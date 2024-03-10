<script setup>
import { ref } from 'vue'

const message = ref("Hello world")
</script>


<template>
  <h1>{{ message }}</h1>
</template>


<style scoped>
h1 {
  text-decoration: underline;
}
</style>