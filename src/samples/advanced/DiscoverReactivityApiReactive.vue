<script setup>
import { ref, reactive } from "vue"

const nativeObj = { count: 0 }
  
const reactObj = reactive({ count: 0 })
</script>

<template>
  <button @click="nativeObj.count++">
      native = {{ nativeObj.count }}
  </button>
    <button @click="reactObj.count++">
      react  = {{ reactObj.count }}
  </button>
</template>

<style scoped>
  button {
    display:block;
    margin: 10px 0;
    
  }

</style>