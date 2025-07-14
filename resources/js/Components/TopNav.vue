<script setup>
import { Menu, ChevronDown, BellRing } from "lucide-vue-next";
import { RouterLink } from "vue-router";
import { useSideNav } from "@/Stores/sideNav";
const store = useSideNav();
</script>

<template>
    <div class="navbar bg-base-100 border-b-2 border-base-300 z-0">
        <div class="flex-1">
            <div class="ml-2">
                <button @click="store.toggleSidebar()" class="btn btn-sm mr-2">
                    <Menu size="20" />
                </button>
                <button
                    class="btn btn-sm btn-ghost indicator"
                    popovertarget="popover-1"
                    style="anchor-name: --anchor-1"
                >
                    <BellRing size="20" />
                    <span
                        class="indicator-item badge rounded-full badge-xs mt-2 badge-accent text-white"
                        >2</span
                    >
                </button>
            </div>

            <ul
                class="dropdown menu-sm menu w-52 rounded-box bg-base-100 shadow-sm mt-3"
                popover
                id="popover-1"
                style="position-anchor: --anchor-1"
            >
                <li class=""><a>Item 1</a></li>
                <li class=""><a>Item 1</a></li>
            </ul>
        </div>
        <div class="flex-none">
            <div tabindex="0" role="button" class="avatar">
                <div class="max-w-8 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                </div>
            </div>
            <div class="dropdown dropdown-end">
                <div tabindex="0" class="min-w-20 btn btn-ghost btn-sm avatar">
                    Dr. Angelo <ChevronDown size="14" />
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <RouterLink :to="{ name: 'login' }">
                        <li><a>Logout</a></li>
                    </RouterLink>
                </ul>
            </div>
        </div>
    </div>
</template>
