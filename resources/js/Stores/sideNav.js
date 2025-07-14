import { defineStore } from "pinia";

export const useSideNav = defineStore("sidebar", {
    state: () => ({
        isOpen: true,
    }),
    actions: {
        toggleSidebar() {
            this.isOpen = !this.isOpen;
         
        },
    },
});
