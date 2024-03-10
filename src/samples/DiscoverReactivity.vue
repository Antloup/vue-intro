<script setup>
import { ref } from 'vue'

const message = ref("Hello world")

window.message = message
</script>


<template>
  <h1>{{ message }}</h1>
  <pre>
    En console, entrer :
    window.message.value = "Bonjour !" 
  </pre>
</template>