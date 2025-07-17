<script setup>
import { RouterLink } from "vue-router";
import { useSideNav } from "@/Stores/sideNav";
import { storeToRefs } from "pinia";

const { isOpen } = storeToRefs(useSideNav());

defineProps({
    routeName: {
        default: "home",
    },

    buttonName: {
        type: String,
        default: "Home",
    },
    tooltipText: {
        type: String,
        default: "Home",
    },
});
</script>

<template>
    <div v-if="!isOpen" class="tooltip tooltip-right" :data-tip="tooltipText">
        <RouterLink
            class="btn btn-ghost opacity-75"
            exactActiveClass="font-semibold bg-blue-100 text-primary opacity-100"
            activeClass="font-semibold bg-blue-100 text-primary opacity-100"
            :to="{ name: routeName }"
        >
            <slot name="icon"></slot>
        </RouterLink>
    </div>

    <RouterLink
        v-else
        class="btn btn-ghost w-full opacity-75"
        exactActiveClass=" font-semibold  bg-blue-100 text-primary opacity-100"
        :to="{ name: routeName }"
    >
        <div class="flex justify-start items-center w-full gap-2">
            <slot name="icon"></slot><span>{{ buttonName }}</span>
        </div>
    </RouterLink>
</template>
