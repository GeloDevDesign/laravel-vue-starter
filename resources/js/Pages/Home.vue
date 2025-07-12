<script setup>
import { ref, onMounted } from "vue";

import api from "@/Lib/axios";

const testAxios = async () => {
    const response = await api.get("/sucess");

    console.log(response.data);
   
};

onMounted(async () => {
    await testAxios();
});
</script>

<template>
    <h1>Home</h1>
</template>
