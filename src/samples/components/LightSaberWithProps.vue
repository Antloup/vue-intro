<script setup>
const props = defineProps({
  owner: String,
  color: String
})
</script>

<template>
  <div>
    <span>{{ owner }}</span>
    <span class="handle">|||||</span>
    <span class="light" :style="{background: color}">======</span>  
  </div>
</template>

<style>
.handle {
  display: inline-block;
  background: grey;
}

.light {
  display: inline-block;
}
</style>