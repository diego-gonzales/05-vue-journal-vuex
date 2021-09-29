<template>
  <div class="d-flex justify-content-center">
      <h1 class="align-self-center">There isn't a selected bookday</h1>
  </div>

  <FloatingActionButton />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  components: {
    FloatingActionButton: defineAsyncComponent(() => import('../components/FloatingActionButton.vue'))
  }
})
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}
</style>