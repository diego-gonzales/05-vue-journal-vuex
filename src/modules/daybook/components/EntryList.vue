<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2 mb-2">
      <input
        type="text"
        class="form-control"
        placeholder="Search post"
        v-model="searchTerm"
      />
    </div>

    <div class="d-grid my-3">
      <button class="btn btn-primary mx-3"
              @click="$router.push({ name: 'Entry-Detail', params: { id: 'new-entry' }})"
      >
        <i class="fa fa-plus-circle"></i>
        New Entry
      </button>
    </div>

    <div class="entry-scroll-area">
      <Entry v-for="entry in entriesBySearchTerm" :key="entry.id" :entry="entry" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  data() {
    return {
      searchTerm: '',
    };
  },
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue')),
  },
  computed: {
    ...mapGetters('journalStore', ['getEntriesBySearchTerm']),
    entriesBySearchTerm(): any {
      return this.getEntriesBySearchTerm(this.searchTerm)
    }
  },
});
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}
.entry-scroll-area {
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>
