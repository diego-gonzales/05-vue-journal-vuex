<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hello World</h1>
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDaybook" class="btn btn-success">Success</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'DaybookLayout'})
    }
  }
})
</script>