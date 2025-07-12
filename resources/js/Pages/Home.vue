<script setup>
import { ref, onMounted } from "vue";

import api from "@/Lib/axios";
import { useApiRequest } from "@/Composables/useApiRequest";

const { httpRequest, data, error, isLoading } = useApiRequest();

const test = async () => {
    await httpRequest("GET", "/success");
    console.log(data);
};

onMounted(() => {
    test();
});
</script>

<template>
    <p v-if="isLoading">loading</p>
    <h1 v-else>Home</h1>
</template>
