<script setup>
import { ref } from "vue"
const loginByUser = ref(true)
</script>

<template>
  <template v-if="loginByUser">
    <label>Nom d'utilisateur</label>
    <input placeholder="Entrez votre nom d'utilisateur" key="username">
  </template>
  <template v-else>
    <label>Email</label>
    <input placeholder="Entrez votre adresse email" key="email">
  </template>
  <button @click="loginByUser = !loginByUser">Changer de type de connexion</button>
</template>

<style scoped>
  * {
    display: block;
  }
</style>