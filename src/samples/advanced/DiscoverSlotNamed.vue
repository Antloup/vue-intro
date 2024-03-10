<script setup>
import AlertBox from "./components/AlertBox.vue"
</script>

<template>
  <AlertBox>
    Quelque chose s'est mal passé.
    <template #code>1337</template>
  </AlertBox>
</template>