<script setup>


defineProps({
    message: {
        type: String
       
    },
    status: {
        type: String
    },
});
</script>

<template>
    <h1>{{ message }}</h1>
    <p>{{ status }}</p>
</template>
