<script setup>
import { ref } from "vue";

defineProps({
    name: {
        type: String,
        default: "No page name.",
    },
    description: {
        type: String,
        default: "No description for this page.",
    },
});
</script>

<template>
    <div class="w-1/2">
        <a class="text-2xl font-bold opacity-80">{{ name }}</a>
        <p class="text-xs opacity-70">{{ description }}</p>
    </div>
</template>
