<script setup>
import { ref, onMounted } from "vue";

import api from "@/Lib/axios";
import { useApiRequest } from "@/Composables/useApiRequest";

const { httpRequest, isLoading, data, error } = useApiRequest();

const test = () => {
    api.post("/sucess");
};

onMounted(async () => {
    test();
});
</script>

<template>
    <p v-if="isLoading">loading</p>
    <h1 v-else>Home</h1>
</template>
