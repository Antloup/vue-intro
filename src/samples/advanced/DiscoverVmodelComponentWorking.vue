<script setup>
import BlogPostWriter from "./components/BlogPostWriter.vue"
import { ref } from "vue"
  
const content = ref("Hello world !")
</script>


<template>
  <div>{{ content }}</div>
  
  <BlogPostWriter v-model="content" />
</template>