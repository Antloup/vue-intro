<script setup>
const book = {
  title: "Learn Vue",
  author: "Jane Doe",
  publishedAt: "2016-04-10"
}
</script>


<template>
  <ul>
    <li v-for="(value, key) in book">
      #{{key}} {{ value }}
    </li>
  </ul>
</template>