<template>
  <template v-if="entry">
    <div class="row m-2 justify-content-between">
      <div class="col">
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fs-3 fw-light">{{ yearAndDayOfTheWeek }}</span>
      </div>
      <div class="col d-flex justify-content-end">
        <button class="btn btn-danger mx-2">
          Delete
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
          Upload Image
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>

    <hr />

    <div class="d-flex flex-column h-75 m-2">
      <textarea placeholder="What happended today?" v-model="entry.text"></textarea>
    </div>
  </template>

  <FloatingActionButton iconName="fa-save"/>

  <img
    src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/PC_Hardware/XCM_1095776_Manual_750x375_1095776_us_pc_hardware_pcit_maincomputersstorefront_tablets_v3_cg_750x375_jpg_PCIT_PCIT_mainComputersStorefront_Additional_Stock_photos.jpg"
    alt="image"
    class="img-thumbnail"
  />
</template>


<script lang="ts">
import { defineAsyncComponent, defineComponent } from '@vue/runtime-core';
import { mapGetters } from 'vuex';
import getDayMonthYear from '../helpers/getDayMonthYear'

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
      entry: {} as any
    }
  },

  methods: {
    loadEntry() {
      const myEntry = this.getEntryById(this.id)
      // console.log(myEntry)
      if (!myEntry) return this.$router.push({ name: 'NoEntrySelected' })
  
      this.entry = myEntry
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
