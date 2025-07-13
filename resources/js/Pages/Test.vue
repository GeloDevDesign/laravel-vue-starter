<script setup>
import { ref, onMounted } from "vue";

import api from "@/Lib/axios";
import { useApiRequest } from "@/Composables/useApiRequest";
import DefaultLayout from "../Layout/DefaultLayout.vue";

const { httpRequest, data, error, isLoading, isRequesting } = useApiRequest();

const test = async () => {
    await httpRequest("/success");
    console.log(data.value);
};

onMounted(() => {
    test();
});
</script>

<template>
    <DefaultLayout>
        <div
            class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100"
        >
            <button
                @click="httpRequest('/success', 'POST')"
                :disabled="isRequesting"
                class="btn btn-primary"
            >
                Test toast
            </button>
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
    </DefaultLayout>
</template>
