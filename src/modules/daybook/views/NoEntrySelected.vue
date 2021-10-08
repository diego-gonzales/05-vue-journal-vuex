<template>
  <div class="d-flex justify-content-center">
      <h1 class="align-self-center">There isn't a selected bookday</h1>
  </div>

  <FloatingActionButton @click="goToCreateNewEntry" />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  components: {
    FloatingActionButton: defineAsyncComponent(() => import('../components/FloatingActionButton.vue'))
  },
  methods: {
    goToCreateNewEntry() {
      this.$router.push({ name: 'Entry-Detail', params: { id: 'new-entry' } })
    }
  }
})
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}
</style>