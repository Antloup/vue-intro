<script setup>
import LightSaber from "./components/LightSaberWithProps.vue"
  
const jedis = [
  { name: 'Obi-Wan', color: 'lightblue' },
  { name: 'Darth Vader', color: 'red' },
  { name: 'Rey', color: 'orange' },
]
</script>


<template>
  <LightSaber 
    v-for="jedi in jedis" 
    :owner="jedi.name" 
    key="jedi.name" 
    :color="jedi.color" 
              style="margin: 10px 0"
  />
</template>
