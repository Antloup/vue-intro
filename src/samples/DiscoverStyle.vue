<script setup>
import { ref } from "vue"
  
const size = ref(30)
</script>


<template>
  <button @click="size = 10">Small</button>
  <button @click="size = 30">Medium</button>
  <button @click="size = 50">Large</button>
  <h1 :style="{fontSize: size + 'px'}">
    Hello world
  </h1>
</template>
