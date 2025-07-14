<script setup>
import { ref } from "vue";
import TopNav from "../Components/TopNav.vue";
import SideNav from "../Components/SideNav.vue";
import { useSideNav } from "@/Stores/sideNav";
import { storeToRefs } from "pinia";

const { isOpen } = storeToRefs(useSideNav());
</script>

<template>
    <!--Top Navigation -->
    <header
        class="fixed top-0 right-0 z-50 transition-all duration-300"
        :class="isOpen ? 'left-64' : 'left-22'"
    >
        <TopNav />
    </header>

    <!--Side Navigation-->
    <nav
        class="fixed top-0 left-0 bottom-0 z-50 transition-all duration-300"
        :class="[
            isOpen
                ? 'w-64 translate-x-0'
                : 'w-22 translate-x-0 md:translate-x-0',
            'md:translate-x-0', // Always show on md+ screens
        ]"
    >
        <SideNav />
    </nav>

    <!-- Overlay for mobile when sidebar is open -->
    <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        @click="isOpen = false"
    ></div>

    <!-- Main Content Area -->
    <main
        class="p-4 bg-base-200 mt-16 min-h-screen transition-all duration-300"
        :class="isOpen ? 'ml-64' : 'ml-22'"
    >
        <section class="">
            <slot></slot>
        </section>
    </main>
</template>
