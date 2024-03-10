<script setup>
import { ref } from "vue"
  
const count = ref(0)

function increment() {
  count.value += 2
}
</script>


<template>
  <p>{{ count }}</p>
  <button v-on:click="increment">
    Incrémenter !
  </button>
</template>