<script setup>
  import { ref, reactive } from "vue"
const classObject = ref({
    active: true,
    'text-danger': false
})
</script>

<template>
  <div :class="classObject">Foo</div>
</template>

<style scoped>
  .active {
    font-weight:bold;
  }
  .text-danger {
     color: red; 
  }
</style>