<script setup>
defineProps({
  status: [String, Number],
  message: String,
  pathMatch: [String, Array]
});
</script>

<template>
  <div>
    <h1>Error {{ status }}</h1>
    <p>{{ message }}</p>
    <p v-if="pathMatch">Tried to access: {{ pathMatch }}</p>
  </div>
</template>
