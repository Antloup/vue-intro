<script setup>
import { ref } from "vue"
  
const selected = ref("A")
const options = ref([
  { text: "Un", value: "A" },
  { text: "Deux", value: "B" },
  { text: "Trois", value: "C" }
])
</script>

<template>
  <select v-model="selected">
    <option v-for="option in options" 
            :value="option.value"
            key="option.value">
      {{ option.text }}
    </option>
  </select>
  <div>Sélectionné : {{ selected }}</div>
</template>