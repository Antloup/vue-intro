<script setup>
import { ref, computed } from "vue"

const firstname = ref("John")
const lastname = ref("Doe")

const fullname = computed({
  get() {
    return `${firstname.value} ${lastname.value}`
  },
  set(_fullname) {
    [fn, ln] = _fullname.split(" ")
    firstname.value = fn
    lastname.value = ln
  }
})

fullname.value = "Obi-Wan Kenobi"
</script>

<template>
 {{ firstname }} /  {{ lastname }}
</template>