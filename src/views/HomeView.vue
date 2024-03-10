<script setup>
import routes from "../router/routes.js"
</script>

<template>
  <main>
    MENU:
    <div>
    <ul>
      <li v-for="(route, i) in routes" :key="route.path">
        <router-link :to="route.path">{{i+1}} - {{ route.path.slice(1) }}</router-link>
      </li>
    </ul>
    EXERCISE:
    <ul>
      <li>
        <router-link :to="{name: 'todo'}">Todo list</router-link>
      </li>
    </ul>
  </div>
  </main>
</template>
