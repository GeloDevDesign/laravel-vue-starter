<script setup>
import { RouterLink } from "vue-router";

defineProps({
    routeName: {
        default: "home",
    },

    buttonName: {
        type: String,
        default: "Home",
    },
});
</script>

<template>
    <RouterLink
        class="btn btn-ghost w-full opacity-75"
        exactActiveClass=" font-semibold bg-blue-100 text-primary opacity-100"
        :to="{ name: routeName }"
    >
        <div class="flex justify-start items-center w-full gap-2">
            <slot name="icon"></slot><span>{{ buttonName }}</span>
        </div>
    </RouterLink>
</template>
