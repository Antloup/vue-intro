<script setup>
import { ref } from "vue"
  
const fields = ref(["A", "B", "C"])

const removeField = () => fields.value.shift()
</script>

<template>
  <input
    :placeholder="'#' + i + ' - ' + field"
    v-for="(field, i) in fields"
    :key="i"
   />
  <button @click="removeField">
    Remove first field
  </button>
</template>

<style scoped>
  * {
    display: block;
  }
</style>