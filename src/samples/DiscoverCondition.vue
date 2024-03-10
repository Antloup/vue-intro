<script setup>
import { ref } from "vue"
  
const speed = ref(10)

window.speed = speed

</script>


<template>
  <p v-if="speed < 88">Plus vite Doc !</p>
  <p v-else-if="speed === 88">88 mph !</p>
  <p v-else>Retour vers le futur !</p>
  <pre>
    En console, entrer :
    window.speed.value = 100
  </pre>
</template>

<style scoped>
</style>