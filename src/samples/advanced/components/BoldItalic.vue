<script setup>
const props = defineProps({
  content: String
})
</script>

<template>
   <b><i><slot /></i></b>
</template>