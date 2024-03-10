<script setup>
const props = defineProps(['modelValue'])
</script>


<template>
  <div style="border: 1px solid red">
    <input 
           :value="props.modelValue" 
           @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>