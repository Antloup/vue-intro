<script setup>
import { ref } from "vue"

let letters = ref(
  ["J", "X", "O", "B", "U", "I"]
)

let sort = () => letters.value.sort()
</script>

<template>
  <div @click="sort">
    {{ letters }}
  </div>
</template>