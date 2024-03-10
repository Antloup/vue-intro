<script setup>
import { ref } from 'vue'
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';

const url = ref(img1)

setTimeout(() => {
  url.value = img2
}, 4000)
</script>


<template>
  <img :src="url" />
</template>

<style scoped>
  img {
    height: 220px;
    margin: 0 auto;
  }
</style>