import { createRouter, createWebHistory } from "vue-router";

import Home from "@/Pages/Home.vue";
import Test from "@/Pages/Test.vue";
import ErrorPage from "@/Pages/ErrorPage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: { guest: true },
    },
    {
        path: "/test",
        name: "test",
        component: Test,
        meta: { guest: true },
    },
    {
        path: "/error/:status/:message",
        name: "error",
        component: ErrorPage,
        props: true,

        meta: { guest: true },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: ErrorPage,
        props: { errorStatus: 404 },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from) => {
    // const authStore = useAuthStore();
    // await authStore.getUser();
    // if (authStore.user && to.meta.guest) {
    //     return { name: "home" };
    // }
    // if (!authStore.user && to.meta.auth) {
    //     return { name: "login" };
    // }
});

export default router;
