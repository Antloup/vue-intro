<script setup>
import { ref } from "vue"
  
const count = ref(0)
</script>


<template>
  <p>{{ count }}</p>
  <button v-on:click="count += 1">
    Incrémenter !
  </button>
</template>

<style scoped>
</style>