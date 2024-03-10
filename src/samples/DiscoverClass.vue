<script setup>
import { ref } from "vue"
  
const isRed = ref(true)
</script>

<template>
  <h1 class="text" :class="{highlight: isRed}">
    Hello world
  </h1>
  <button @click="isRed = !isRed">Toggle</button>
</template>

<style scoped>
  .highlight { color: red; }
  .text { font-style: italic; }
</style>