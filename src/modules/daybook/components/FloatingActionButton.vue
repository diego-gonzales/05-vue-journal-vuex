<template>
  <button class="btn btn-primary">
    <i class="fa fa-2x" :class="iconName"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    iconName: {
      type: String,
      default: 'fa-plus'
    }
  }
});
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 100%;
}
</style>
