import { createRouter, createWebHistory } from "vue-router";

import Home from "@/Pages/Home.vue";
import Test from "@/Pages/Test.vue";
import ErrorPage from "@/Pages/ErrorPage.vue";
import LoginPage from "@/Pages/LoginPage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        props: true,
        props: { pageName: 'Dashboard' },
        meta: { guest: true },
    },
    {
        path: "/test",
        name: "test",
        component: Test,
        meta: { guest: true },
    },
     {
        path: "/login",
        name: "login",
        component: LoginPage,
        meta: { guest: true },
    },
    {
        path: "/error/:message/:status",
        name: "error",
        component: ErrorPage,
        props: true,
        meta: { guest: true },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: ErrorPage,
        props: { status: 404, message: "Page not found." },
        meta: { guest: true },
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
