<script setup>
  
const verbs = [
        { text: 'Veni' },
        { text: 'Vidi' },
        { text: 'Vici' }
      ]

</script>


<template>
  <ol>
    <li v-for="verb in verbs" :key="verb.text">
      {{ verb.text }}
    </li>
  </ol>
</template>

<style scoped>
</style>