<script setup>
import { Menu, House, ChartColumnDecreasing } from "lucide-vue-next";
import NavLink from "./NavLink.vue";
import { useSideNav } from "@/Stores/sideNav";
import { storeToRefs } from "pinia";

const { isOpen } = storeToRefs(useSideNav());
</script>

<template>
    <div
        class="bg-base-100 h-full bottom-0 flex flex-col  gap-2 border-r-2 border-base-300 transition-all duration-300"
        :class="isOpen ? 'w-64' : 'w-18 items-center'"
    >
        <div class="p-4 justify-between flex items-center mb-4">
            <div class="flex items-center justify-center gap-2">
                <img
                    class="w-full max-w-10"
                    alt="Tailwind CSS Navbar component"
                    src="https://img.freepik.com/free-vector/gradient-triangle-molecule-logo-technology-design_53876-116026.jpg?semt=ais_hybrid&w=740"
                />
                <a
                    class="text-sm font-bold transition-all duration-300"
                    :class="
                        isOpen
                            ? 'opacity-100 w-auto'
                            : 'opacity-0 w-0 overflow-hidden'
                    "
                >
                    LOGO NAME
                </a>
            </div>
        </div>
        <div class="flex flex-col gap-2 px-4">
            <NavLink
                :buttonName="isOpen ? 'Dashboard' : ''"
                routeName="home"
                tooltipText="Dashboard"
            >
                <template v-slot:icon>
                    <House size="20" />
                </template>
            </NavLink>

            <NavLink
                :buttonName="isOpen ? 'Chart' : ''"
                routeName="notes"
                tooltipText="Chart"
            >
                <template v-slot:icon>
                    <ChartColumnDecreasing size="20" />
                </template>
            </NavLink>
        </div>
    </div>
</template>
