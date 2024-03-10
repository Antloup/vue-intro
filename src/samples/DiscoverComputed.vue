<script setup>
import { ref, computed } from "vue"

const message = ref("Hello world")

const reversed = computed(() => 
  message.value.split('').reverse().join('')
)
</script>


<template>
  <p>
    Message original : {{ message }}
  </p>
  <br/>
  <p>
    Message inversé : {{ reversed }}
  </p>
</template>