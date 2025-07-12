<script setup>
import { ref, onMounted } from "vue";

import api from "@/Lib/axios";
import { useApiRequest } from "@/Composables/useApiRequest";

const { httpRequest, isLoading, data, error } = useApiRequest();

onMounted(() => {
    httpRequest("GET", "/sucess");
});
</script>

<template>
    <p v-if="isLoading">loading</p>
    <h1 v-else>Home</h1>
</template>
