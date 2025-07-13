<script setup>
import { Menu, House, ChartColumnDecreasing } from "lucide-vue-next";
import NavLink from "./NavLink.vue";
</script>

<template>
    <div
        class="w-full  bg-base-100 h-full bottom-0 flex flex-col gap-2 border-r-2 border-base-300"
    >
        <div class="w-full p-4 justify-between flex items-center mb-4">
            <div class="">
                <div class="flex items-center gap-2">
                    <img
                        class="max-w-12"
                        alt="Tailwind CSS Navbar component"
                        src="https://img.freepik.com/free-vector/gradient-triangle-molecule-logo-technology-design_53876-116026.jpg?semt=ais_hybrid&w=740"
                    />
                    <a class="text-sm font-bold">LOGO NAME</a>
                </div>
            </div>
           
        </div>
        <div class="flex flex-col gap-2 px-4">
            <NavLink buttonName="Dashboard" routeName="home">
                <template v-slot:icon>
                    <House size="20" />
                </template>
            </NavLink>

          

            <NavLink buttonName="Chart" routeName="test">
                <template v-slot:icon>
                    <ChartColumnDecreasing size="20" />
                </template>
            </NavLink>
        </div>
    </div>
</template>
