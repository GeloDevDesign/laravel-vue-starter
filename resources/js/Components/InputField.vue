<script setup>
import { ref, defineModel } from "vue";

const props = defineProps({
    inputType: {
        type: String,
    },
    placeholder: {
        type: String,
    },
    inputLabel: {
        type: String,
    },
    error: {
        type: String,
    },
});

const model = defineModel({
    required: true,
});
</script>

<template>
    <div>
        <label class="label text-sm">{{ props.inputLabel }}</label>
        <input
            v-model="model"
            :type="props.inputType"
            :class="props.error ? 'border-red-200' : ''"
            class="input w-full"
            :placeholder="props.placeholder"
        />
        <p v-if="props.error" class="text-red-600 text-sm opacity-70">
            {{ props.error }}
        </p>
    </div>
</template>
