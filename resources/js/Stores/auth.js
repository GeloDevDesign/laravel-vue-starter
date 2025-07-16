import { defineStore } from "pinia";
import api from "@/Lib/axios";
import { useModalAlert } from "@/Composables/useModal";
import router from "@/router/index.js";

const { modalAlert } = useModalAlert();

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        user: null,
        errors: {},
    }),

    actions: {
        async authenticate(apiRoute, formData) {
            this.errors = {};

            try {
                const response = await api.post(`/${apiRoute}`, formData);

                const { user, token } = response.data;

                localStorage.setItem("token", token);

                this.user = user;
                this.errors = {};

                modalAlert("Success", `Welcome ${user.name}`, "success");
                router.push({ name: "home" });
            } catch (error) {
                if (error.response?.status === 429) {
                    modalAlert(
                        "Too many attempts",
                        "Please wait a moment.",
                        "error"
                    );
                    return;
                }

                this.errors = error.response?.data?.errors || {};
            }
        },

        async logout() {
            try {
                this.user = null;
                await api.post("/logout");

                localStorage.removeItem("token");

                this.errors = {};

                modalAlert("Success", "Logged out successfully.", "success");
                router.push({ name: "login" });
            } catch (error) {
                modalAlert("Error", "An unexpected error occurred.", "error");
            }
        },

        async getUser() {
            try {
                const response = await api.get("/user");
                this.user = response.data;
            } catch (error) {
                this.user = null;
                localStorage.removeItem("token");
            }
        },
    },
});
