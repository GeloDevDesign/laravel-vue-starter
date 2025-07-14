<script setup>
import { ref, defineEmits } from "vue";
import { Funnel } from "lucide-vue-next";
defineProps({
    filterItems: {
        type: Array,
        default: [],
    },
});

const model = defineModel({ type: [String, Number], required: true });
</script>

<template>
    <div class="dropdown dropdown-center">
        <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-outline border-gray-300 text-gray-600"
        >
            <Funnel size="18" />
            Filter
        </div>
        <ul
            tabindex="0"
            class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
            <li v-for="(item, index) in filterItems" :key="index">
                <a>{{ item }}</a>
            </li>
        </ul>
    </div>
</template>
