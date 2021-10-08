<template>
  <template v-if="entry">
    <div class="row m-2 justify-content-between">
      <div class="col">
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-3 fw-light">{{ yearAndDayOfTheWeek }}</span>
      </div>
      <div class="col d-flex justify-content-end">
        <input type="file"
               v-show="false"
               @change="onSelectedImage"
               ref="myInputFile"
               accept="image/png, image/jpeg">
        <button v-if="entry.id"
                @click="onDeleteEntry"
                class="btn btn-danger mx-2">
          Delete
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary"
                @click="onUploadImage">
          Upload Image
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>

    <hr />

    <div class="d-flex flex-column h-75 m-2">
      <textarea placeholder="What happended today?" v-model="entry.text"></textarea>
    </div>

    <!-- Cloudinary Image -->
    <img
      v-if="entry.imageUrl && !localImage"
      :src="entry.imageUrl"
      class="img-thumbnail"
    />

    <!-- Local Image -->
    <img
      v-if="localImage"
      :src="localImage"
      alt="image"
      class="img-thumbnail"
    />
  </template>

  <FloatingActionButton iconName="fa-save" @my-click="onSaveEntry"/>

</template>


<script lang="ts">
import { defineAsyncComponent, defineComponent } from '@vue/runtime-core';
import { mapActions, mapGetters } from 'vuex';
import getDayMonthYear from '../helpers/getDayMonthYear'
import uploadImage from '../helpers/uploadImage'
import { Entry } from '../interfaces/entry.interface'
import Swal from 'sweetalert2'

export default defineComponent({
  props: {
    // this 'id' come from route params
    id: {
      type: String,
      required: true
    }
  },

  components: {
    FloatingActionButton: defineAsyncComponent(() =>
      import("../components/FloatingActionButton.vue")
    ),
  },

  data() {
    return {
      entry: {} as Entry,
      localImage: null as any,
      imageToSave: null as any
    }
  },

  computed: {
    ...mapGetters('journalStore', ['getEntryById']),
    day() {
      const { day } = getDayMonthYear(this.entry.date)
      return day
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date)
      return month
    },
    yearAndDayOfTheWeek() {
      const { yearAndDayOfTheWeek } = getDayMonthYear(this.entry.date)
      return yearAndDayOfTheWeek
    }
  },

  methods: {
    ...mapActions('journalStore', ['putEntry', 'postEntry', 'deleteEntry']),

    loadEntry() {
      let myEntry;

      if (this.id === 'new-entry') {
        myEntry = {
          text: '',
          date: new Date().getTime()
        }
      } else {
        myEntry = this.getEntryById(this.id)
        if (!myEntry) return this.$router.push({ name: 'NoEntrySelected' })
      }

      this.entry = myEntry
    },
    async onSaveEntry() {
      Swal.fire({
        title: 'Saving entry...',
        allowOutsideClick: false
      })
      Swal.showLoading()

      const generatedImageUrl = await uploadImage(this.imageToSave)
      if (generatedImageUrl) this.entry.imageUrl = generatedImageUrl

      if (this.entry.id) {
        // Update entry
        await this.putEntry(this.entry)
        Swal.close()
      } else {
        // Create entry
        const idNewEntry = await this.postEntry(this.entry)
        Swal.close()
        // Redirect
        this.$router.push({ name: 'Entry-Detail', params: { id: idNewEntry } })
      }

      this.imageToSave = null

      Swal.fire({
        title: 'Successfully saved',
        icon: 'success'
      })
    },
    async onDeleteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showDenyButton: true,
        confirmButtonText: 'Yes, delete it!'
      })

      if (isConfirmed) {
        Swal.fire({
          title: 'Removing entry...',
          allowOutsideClick: false
        })
        Swal.showLoading()

        await this.deleteEntry(this.entry.id)

        Swal.close()

        Swal.fire('Deleted!', 'Your entry has been deleted.', 'success')

        this.$router.push({ name: 'NoEntrySelected' })
      }
    },
    onSelectedImage(event: any) {
      const image = event.target.files[0]

      if (!image) {
        this.localImage = null
        this.imageToSave = null
        return
      }

      this.imageToSave = image

      const fr = new FileReader()
      fr.readAsDataURL(image)
      fr.onload = () => this.localImage = fr.result
    },
    onUploadImage() {
      // document.querySelector('input')
      const input = this.$refs.myInputFile as any
      input.click()
    }
  },

  created() {
    // console.log(this.$route.params.id)
    this.loadEntry()
  },

  watch: {
    // This method must have the same name as the data property / id (actualValue, oldValue) {}
    id() {
      this.loadEntry()
    }
  }
});
</script>


<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;
    &:focus {
        outline: none;
    }
}
img {
    position: fixed;
    bottom: 150px;
    right: 20px;
    width: 200px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
