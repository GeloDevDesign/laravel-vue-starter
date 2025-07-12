<script setup>
import { ref, onMounted } from "vue";

import api from "@/Lib/axios";
import { useApiRequest } from "@/Composables/useApiRequest";

const { httpRequest, isLoading, data, error } = useApiRequest();

await httpRequest("GET", "/sucess");

onMounted(async () => {
    httpRequest();
    console.log(data);
});
</script>

<template>
    <h1>Home</h1>
</template>
