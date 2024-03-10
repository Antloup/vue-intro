<script setup>
import { ref } from "vue"
  
const picked = ref(null)
</script>

<template>
  <input type="radio" id="one" 
         value="Un" v-model="picked" />
  <label for="one">Un</label>
  <br />
  
  <input type="radio" id="two" 
         value="Deux" v-model="picked" />
  <label for="two">Deux</label>
  <br />
  
  <p>Choisi : {{ picked }}</p>
</template>
