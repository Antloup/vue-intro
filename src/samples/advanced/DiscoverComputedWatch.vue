<script setup>
import { ref, watch } from "vue"

const firstname = ref("John")
const lastname = ref("Doe")
const fullname = ref("John Doe")

watch([firstname, lastname], () => 
  fullname.value = `${firstname.value} ${lastname.value}`
)

firstname.value = "Jean"
</script>

<template>
  {{ fullname }}
</template>