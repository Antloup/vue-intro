<script setup>
</script>

<template>
  <div style="background:red;">
    <strong>Erreur</strong>
    <slot />
    <i v-if="$slots.code"> 
      Code <slot name="code" />
    </i>
  </div>
</template>