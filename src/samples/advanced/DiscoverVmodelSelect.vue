<script setup>
import { ref } from "vue"
  
const selected = ref("")
</script>

<template>
  <select v-model="selected">
    <option disabled value="">
      Choisissez
    </option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Séléction : {{ selected }}</span>
</template>