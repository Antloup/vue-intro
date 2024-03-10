<script setup>
const verbs = [
  { text: "Veni" }, 
  { text: "Vidi" },
  { text: "Vici" }
]
</script>


<template>
  <ul>
    <li v-for="verb in verbs">
      {{ verb.text }}
    </li>
  </ul>
</template>