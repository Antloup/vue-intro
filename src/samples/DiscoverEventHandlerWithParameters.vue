<script setup>
import { ref } from "vue"
  
const count = ref(0)

function increment(delta) {
  count.value += delta
}
</script>


<template>
  <p>{{ count }}</p>
  <button v-on:click="increment(3)">
    Incrémenter !
  </button>
</template>