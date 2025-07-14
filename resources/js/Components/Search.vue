<script setup>
import {ref,defineModel} from "vue";
const model = defineModel({ type: [String, Number], required: true });
</script>

<template>
    <label class="input rounded-l-sm">
        <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
            </g>
        </svg>
        <input v-model="model" type="search" class="grow min-w-52 max-w-80" placeholder="Search" />
      
    </label>
</template>
