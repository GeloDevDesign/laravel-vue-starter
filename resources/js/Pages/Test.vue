<script setup>
import { ref, onMounted } from "vue";
import {
    Menu,
    House,
    Plus,
    SquarePen,
    EllipsisVertical,
} from "lucide-vue-next";
import api from "@/Lib/axios";
import { useApiRequest } from "@/Composables/useApiRequest";
import DefaultLayout from "../Layout/DefaultLayout.vue";
import PageName from "@/Components/PageName.vue";
import Filter from "@/Components/Filter.vue";
const {
    httpRequest,
    httpPostRequest,
    httpDeleteRequest,
    data,
    error,
    isLoading,
    isMakingRequest,
    selectedItem,
} = useApiRequest();

const formData = ref({});

defineProps({
    pageName: {
        default: "No Page name",
    },
});

onMounted(async () => {
    await httpRequest("/success");
});
</script>

<template>
    <DefaultLayout>
        <div v-if="isLoading" class="flex w-52 flex-col gap-4">
            <div class="skeleton h-92 w-full"></div>
            <div class="skeleton h-4 w-28"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
        </div>
        <div class="w-full flex items-center justify-between mt-2 mb-4">
            <PageName
                :name="pageName"
                description="his is your dashboard analytics"
            />

            <div class="join">
                <div class="w-full">
                    <input
                        class="input join-item min-w-52 w-80"
                        placeholder="Search"
                    />
                </div>
                <Filter :filterItems="['Sci-fi', 'Athletic', 'Action']" />
                <button class="btn btn-primary ml-4 join-item">
                    <Plus /> Add Product
                </button>
            </div>
        </div>
        <div
            class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100"
        >
            <button
                @click="httpPostRequest('/success')"
                :disabled="isMakingRequest"
                class="btn btn-primary"
            >
                Test toast
            </button>
            <table v-if="!isLoading" class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time in</th>
                        <th>Time out</th>
                        <th>Action</th>
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
                        <td>
                            <button
                                :disabled="selectedItem === item.id"
                                class="btn btn-warning btn-sm"
                                @click="httpDeleteRequest('/success', item.id)"
                            >
                                {{
                                    selectedItem === item.id
                                        ? "Deleting.."
                                        : "Delete"
                                }}<span
                                    v-if="selectedItem === item.id"
                                    class="loading loading-spinner loading-xs"
                                ></span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DefaultLayout>
</template>
