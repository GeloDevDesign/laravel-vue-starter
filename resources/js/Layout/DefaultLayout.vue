<script setup>
import { ref } from "vue";
import TopNav from "../Components/TopNav.vue";
import SideNav from "../Components/SideNav.vue";
</script>

<template>
    <!--Top Navigation -->
    <header class="fixed top-0 left-64 right-0 z-50">
        <TopNav />
    </header>

    <!--Side Navigation-->
    <nav class="fixed top-0 left-0 bottom-0 w-64 md:block hidden z-50">
        <SideNav />
    </nav>

    <!-- Main Content Area -->
    <main class="p-4 bg-base-200 md:ml-64 ml-0 mt-16 min-h-screen">
        <section class="">
            <slot></slot>
        </section>
    </main>
</template>
