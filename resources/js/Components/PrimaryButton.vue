<script setup>
defineProps({
    buttonName: {
        type: String,
        default: "No button name",
    },
});
</script>

<template>
    <button class="btn btn-primary">
        {{ buttonName }}
    </button>
</template>
