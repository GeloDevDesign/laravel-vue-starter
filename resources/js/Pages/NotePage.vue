<script setup>
import { ref, onMounted, computed } from "vue";
import {
    Menu,
    House,
    Plus,
    SquarePen,
    EllipsisVertical,
} from "lucide-vue-next";

import DefaultLayout from "@/Layout/DefaultLayout.vue";
import Pagination from "@/Components/Pagination.vue";
import PageName from "@/Components/PageName.vue";
import Filter from "@/Components/Filter.vue";
import { storeToRefs } from "pinia";
import { useNoteStore } from "@/Stores/note";
import { useRouter } from "vue-router";

const noteStore = useNoteStore();
const { getNotes, deleteNote } = noteStore;
const { data, pagination, loading } = storeToRefs(noteStore);

const router = useRouter();
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

const goToCreateNote = () => {
    router.push('/notes/create');
};
</script>

<template>
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
                <button
                    class="btn btn-primary ml-4 join-item"
                    @click="goToCreateNote"
                >
                    <Plus /> Add Product
                </button>
            </div>
        </div>

        <div
            class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 h-[71vh] min-h-[71vh]"
        >
            <table class="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Body</th>
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
                                    Try to refresh or start by adding your first note
                                </p>
                            </div>
                        </td>
                    </tr>

                    <tr v-else v-for="(item, index) in data" :key="item.id">
                        <th>{{ numberOffset + index + 1 }}</th>
                        <td>{{ item.title }}</td>
                        <td>{{ item.body }}</td>
                        <td>
                            <button
                                @click="
                                    deleteNote(
                                        `notes/${item.id}`,
                                        item,
                                        pagination?.current_page || 1,
                                        pagination?.per_page || 10
                                    )
                                "
                                class="btn btn-warning btn-sm"
                            >
                                Delete
                            </button>
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

        <!-- Render child routes like NoteCreate.vue -->
        <router-view />
    </DefaultLayout>
</template>
