<script setup>
import { ref } from "vue"

const input = ref("Hello !")
</script>


<template>
  <input v-model="input" />
  <p>{{ input }}</p>
  <button @click="input = 'Hello !'">
    Reset
  </button>
</template>