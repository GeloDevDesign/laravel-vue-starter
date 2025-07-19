import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/Stores/auth";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/Pages/Home.vue"),
        props: {
            pageName: "Dashboard",
            description: "Your system analytics here",
        },
        meta: { auth: true },
    },

    {
        path: "/notes",
        children: [
            {
                path: "",
                component: () => import("@/Pages/Note/index.vue"),
                name: "notes",
                props: {
                    pageName: "Notes Dashboard",
                    description:
                        "View and manage all your notes in one place. Easily keep track of your ideas and tasks.",
                },
                meta: { auth: true },
            },
            {
                path: "create",
                component: () => import("@/Pages/Note/create.vue"),
                name: "create-note",
                props: {
                    pageName: "Create Note",
                    description:
                        "Start writing a new note to capture your thoughts, reminders, or plans.",
                },
                meta: { auth: true },
            },
            {
                path: ":id",
                component: () => import("@/Pages/Note/edit.vue"),
                name: "edit-note",
                props: (route) => ({
                    id: route.params.id,
                    pageName: "Edit Note",
                    description:
                        "Modify your existing note here. Make changes to keep your information up-to-date.",
                }),
            },
        ],
        meta: { auth: true },
    },

    {
        path: "/login",
        name: "login",
        component: () => import("@/Pages/LoginPage.vue"),
        meta: { guest: true },
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/Pages/RegisterPage.vue"),
        meta: { guest: true },
    },
    {
        path: "/email-verification",
        name: "email-verification",
        component: () => import("@/Pages/EmailVerificationPage.vue"),
        meta: { auth: true },
    },
    {
        path: "/reset-password",
        name: "reset-password",
        component: () => import("@/Pages/ForgotPasswordPage.vue"),
        meta: { guest: true },
    },
    {
        path: "/error/:message/:status",
        name: "error",
        component: () => import("@/Pages/ErrorPage.vue"),
        props: true,
        meta: { guest: true },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("@/Pages/ErrorPage.vue"),
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
        return { name: "login" };
    }

    if (authStore.user && to.meta.guest) {
        return { name: "home" };
    }
});

export default router;
