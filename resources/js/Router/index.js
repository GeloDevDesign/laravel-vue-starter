import { createRouter, createWebHistory } from "vue-router";

import Home from "@/Pages/Home.vue";
import ErrorPage from "@/Pages/ErrorPage.vue";
import LoginPage from "@/Pages/LoginPage.vue";
import RegisterPage from "@/Pages/RegisterPage.vue";
import ForgotPasswordPage from "@/Pages/ForgotPasswordPage.vue";
import EmailVerificationPage from "@/Pages/EmailVerificationPage.vue";

import NotePage from "@/Pages/Note/index.vue";
import NoteCreate from "@/Pages/Note/create.vue";

import { useAuthStore } from "@/Stores/auth";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        props: true,
        props: {
            pageName: "Dashboard",
            description: "Your system analytics here",
        },
        meta: { auth: true },
    },

    {
        path: "/notes",
        children: [
            { path: "", component: NotePage, name: "notes" },
            { path: "create", component: NoteCreate, name: "create-note" },
            { path: "edit", component: NoteCreate, name: "edit-note" },
        ],
    },

    {
        path: "/login",
        name: "login",
        component: LoginPage,
        meta: { guest: true },
    },
    {
        path: "/register",
        name: "register",
        component: RegisterPage,
        meta: { guest: true },
    },
    {
        path: "/email-verification",
        name: "email-verification",
        component: EmailVerificationPage,
        meta: { auth: true },
    },
    {
        path: "/reset-password",
        name: "reset-password",
        component: ForgotPasswordPage,
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
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from) => {
    const authStore = useAuthStore();
    await authStore.getUser();

    if (!authStore.user && to.meta.auth) {
        await authStore.getUser();
    }

    if (authStore.user && to.meta.guest) {
        return { name: "home" };
    }

    if (!authStore.user && to.meta.auth) {
        return { name: "login" };
    }
});

export default router;
