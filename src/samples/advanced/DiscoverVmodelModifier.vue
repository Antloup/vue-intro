<script setup>
import { ref } from "vue"

const normal = ref("")
const lazy = ref("")
const number = ref(null)
const trim = ref("")
</script>


<template>
  <p>
    v-model
    <input v-model="normal" />
    <code>{{ normal }}</code>
  </p>
  <p>
    v-model.lazy
    <input v-model.lazy="lazy" />
    <code>{{ lazy }}</code>
  </p>
  <p>
    v-model.number
    <input v-model.number="number" type="number" />
    <code>{{ typeof number }}</code>
    <code>{{ number }}</code>
  </p>
  <p>
    v-model.trim
    <input v-model.trim="trim" />
    <code>{{ trim }}</code>
  </p>
</template>

<style>
  input {
    width: 100px
  }
</style>