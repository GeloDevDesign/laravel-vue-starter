<script setup>
import { ref, onMounted } from "vue";

import api from "@/Lib/axios";
import { useApiRequest } from "@/Composables/useApiRequest";

const { httpRequest, data, error, isLoading } = useApiRequest();

const test = async () => {
    await httpRequest("GET", "/success");
    console.log(data.value);
};

onMounted(() => {
    test();
});
</script>

<template>
    <div v-if="!isLoading" class="flex w-52 flex-col gap-4">
        <div class="skeleton h-32 w-full"></div>
        <div class="skeleton h-4 w-28"></div>
        <div class="skeleton h-4 w-full"></div>
        <div class="skeleton h-4 w-full"></div>
    </div>
    <div
        v-else
        class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100"
    >
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Time in</th>
                    <th>Time out</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr v-for="item in data" :key="item.id">
                    <th>{{ item.id }}</th>
                    <td>{{ item.employee_name }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.time_in }}</td>
                    <td>{{ item.time_out }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
