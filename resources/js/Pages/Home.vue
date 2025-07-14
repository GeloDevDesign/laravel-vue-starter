<script setup>
import { ref, onMounted } from "vue";
import api from "@/Lib/axios";
import { useApiRequest } from "@/Composables/useApiRequest";
import DefaultLayout from "@/Layout/DefaultLayout.vue";
import PageName from "@/Components/PageName.vue";
import Filter from "@/Components/Filter.vue";
import Search from "@/Components/Search.vue";

import {
    Menu,
    House,
    Plus,
    SquarePen,
    EllipsisVertical,
} from "lucide-vue-next";
const { httpRequest, data, error, isLoading, isRequesting } = useApiRequest();

defineProps({
    pageName: {
        default: "Home",
    },
});
const test = async () => {
    await httpRequest("/success");
};

onMounted(() => {
    test();
});
</script>

<template>
    <DefaultLayout>
        <div class="w-full flex items-center justify-between mt-2 mb-4">
            <PageName
                :name="pageName"
                description="his is your dashboard analytics"
            />

            <div class="join">
                <Search />

                <Filter :filterItems="['Sci-fi', 'Athletic', 'Action']" />

                <button class="btn btn-primary ml-4 join-item">
                    <Plus /> Add Product
                </button>
            </div>
        </div>
        <div
            class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 h-[75vh]"
        >
            <table class="table table-pin-rows">
                <!-- head -->
                <thead class="">
                    <tr class="">
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>
                            <div
                                class="badge badge-soft font-semibold badge-primary"
                            >
                                Primary
                            </div>
                        </td>
                        <td>
                            <div class="dropdown dropdown-center">
                                <div
                                    tabindex="0"
                                    role="button"
                                    class="btn btn-sm m-1"
                                >
                                    <EllipsisVertical size="18" />
                                </div>
                                <ul
                                    tabindex="0"
                                    class="dropdown-content menu bg-base-100 rounded-box z-1 m-w-52 p-2 shadow-sm"
                                >
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-between items-center mt-4">
            <p class="text-sm">Showing 1 out of 2</p>
            <div class="join">
                <button class="join-item btn bg-white">1</button>
                <button class="join-item btn bg-white">2</button>
                <button class="join-item btn btn-disabled">...</button>
                <button class="join-item btn bg-white">99</button>
                <button class="join-item btn bg-white">100</button>
            </div>
        </div>
    </DefaultLayout>
</template>
