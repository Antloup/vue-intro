<script setup>
import { ref } from "vue"

const events = ref([])

function log(e) {
  events.value.push(e)
}
</script>


<template>
  <p @click="log('p@click')">
    <button @click="log('button@click')">@click</button>
    <button @click.stop="log('button@click.stop')">@click.stop</button>
    <button @click.once="log('button@click.once')">@click.once</button>
    <button @click.prevent="log('button@click.prevent')">@click.prevent</button>
    <button @click.prevent.once="log('button@click.prevent.once')">@click.prevent.once</button>
  </p>
  <ol>
    <li v-for="event in events">{{ event }}</li>
  </ol>
  <button @click="events = []">
    Clear
  </button>
</template>

<style scoped>
  button {
    display:block;
  }
</style>