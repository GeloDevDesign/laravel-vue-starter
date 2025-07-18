<script setup>
import { ref, onMounted, computed } from "vue";
import {
    Menu,
    House,
    Plus,
    EllipsisVertical,
    SquarePen,
} from "lucide-vue-next";

import DefaultLayout from "@/Layout/DefaultLayout.vue";
import Pagination from "@/Components/Pagination.vue";
import PageName from "@/Components/PageName.vue";
import Filter from "@/Components/Filter.vue";
import { storeToRefs } from "pinia";
import { useNoteStore } from "@/Stores/note";

const noteStore = useNoteStore();
const { getNotes, deleteNote } = noteStore;
const { data, pagination, loading } = storeToRefs(noteStore);

const formData = ref({});

const handlePageChange = (page) => {
    getNotes("notes", page, 10);
};

const numberOffset = computed(() => {
    if (!pagination.value) return 0;
    return (pagination.value.current_page - 1) * pagination.value.per_page;
});

defineProps({
    pageName: {
        default: "No Page name",
    },
    description: {
        default: "No description for this page",
    },
});

onMounted(async () => {
    await getNotes("notes", 1, 10);
});
</script>

<template>
    <router-view />
    <DefaultLayout>
        <div class="w-full flex items-center justify-between mt-2 mb-4">
            <PageName :name="pageName" :description="description" />

            <div class="join">
                <div class="w-full">
                    <input
                        class="input join-item min-w-52 w-80"
                        placeholder="Search"
                    />
                </div>
                <Filter :filterItems="['Sci-fi', 'Athletic', 'Action']" />
                <RouterLink
                    class="btn btn-primary ml-4 join-item"
                    :to="{ path: '/notes/create' }"
                >
                    <Plus /> Add Product
                </RouterLink>
            </div>
        </div>

        <div
            class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 h-[71vh] min-h-[71vh]"
        >
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="loading">
                        <td colspan="4" class="text-center py-12">
                            <div
                                class="flex justify-center items-center space-x-2 text-base-content/60"
                            >
                                <span
                                    class="loading loading-spinner loading-sm"
                                ></span>
                                <span>Loading notes...</span>
                            </div>
                        </td>
                    </tr>

                    <tr v-else-if="!loading && (!data || data.length === 0)">
                        <td colspan="4" class="text-center py-12">
                            <div class="text-base-content/60">
                                <p class="text-lg mb-2">No notes found</p>
                                <p class="text-sm">
                                    Try to refresh or start by adding your first
                                    note
                                </p>
                            </div>
                        </td>
                    </tr>

                    <tr v-else v-for="(item, index) in data" :key="item.id">
                        <th>{{ numberOffset + index + 1 }}</th>
                        <td>{{ item.title }}</td>
                        <td>{{ item.body }}</td>
                        <td>
                            <div
                                class="badge font-medium badge-soft badge-primary"
                            >
                                Primary
                            </div>
                        </td>
                        <td>
                            <div class="tooltip" data-tip="Edit Note">
                                <RouterLink
                                    :to="`/notes/${item.id}`"
                                    class="btn btn-ghost text-info btn-xs"
                                >
                                    <SquarePen size="18" />
                                </RouterLink>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Pagination
            v-if="pagination && pagination.total > 0"
            :pagination="pagination"
            @page-changed="handlePageChange"
            class="mt-4"
        />
    </DefaultLayout>
</template>
