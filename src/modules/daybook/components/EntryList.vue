<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2 mb-2">
      <input type="text" class="form-control" placeholder="Search post" />
    </div>
    <div class="entry-scroll-area">
      <Entry v-for="item in 100" :key="item" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
    components: {
        Entry: defineAsyncComponent(() => import('./Entry.vue'))
    }
})
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