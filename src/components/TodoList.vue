<script setup>
// Model
import { ref } from "vue"
  
let todos = ref([])
let newLabel = ref("")

// Logic
function addTodo() {
  todos.value.push({ 
    id: Date.now(),
    label: newLabel.value, 
    done: false 
  })
  newLabel.value = ""
}

function toggleTodo(todo) {
  todo.done = !todo.done
}
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.key">
        <span :class="{strike: todo.done}">{{ todo.label }}</span>
        <button @click="toggleTodo(todo)">X</button>
    </li>
  </ul>
  <input v-model="newLabel" type="text" />
  <button @click="addTodo">Ajouter</button>
</template>

<style scoped>
.strike {
  text-decoration: line-through;
}
</style>