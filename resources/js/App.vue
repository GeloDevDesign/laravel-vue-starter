<script setup>
import { RouterView, RouterLink } from "vue-router";

</script>

<template>
    
    <section class="flex gap-2 items-center">
        <RouterLink :to="{ name: 'home' }">
            <button class="text-red-500 px-4 py-2 bg-gray-200 btn">Home</button>
        </RouterLink>
        <RouterLink :to="{ name: 'test' }">Test</RouterLink>
    </section>
    <RouterView />
</template>
