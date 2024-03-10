<script setup>
const verbs = [
  { text: "Veni" }, 
  { text: "Vidi" },
  { text: "Vici" }
]
</script>


<template>
  <ul>
    <li v-for="(verb, index) in verbs">
      #{{ index }} {{ verb.text }}
    </li>
  </ul>
</template>