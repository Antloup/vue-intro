<script setup>
import { ref } from "vue"
  
const message = ref("")
</script>


<template>
  <textarea v-model="message">
  </textarea>
  <p style="white-space: pre-line;">
    {{ message }}
  </p>
</template>