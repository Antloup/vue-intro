<script setup>
import { ref, computed } from "vue"

const numbers = ref([1, 2, 3, 4, 5])

const even = computed(() => 
   numbers.value.filter(n => n%2 === 0)
)
</script>

<template>
  <li v-for="n in even">{{ n }}</li>
</template>