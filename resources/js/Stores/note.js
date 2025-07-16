import { defineStore } from "pinia";
import api from "@/lib/axios";
import { useModalAlert } from "@/composables/useModal";
import { useToastAlert } from "@/composables/useToast";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import router from "@/router";

const { modalAlert } = useModalAlert();
const { toastAlert } = useToastAlert();

export const useNoteStore = defineStore("noteStore", {
    state: () => ({
        data: [],
        selectedItem: null,
        errors: {},
        pagination: null,
        loading: false,
    }),

    actions: {
        async getNotes(
            apiRoute,
            page = 1,
            perPage = 10,
            search = "",
            filter = []
        ) {
            this.loading = true;
            this.errors = {};

            try {
                const { data } = await api.get(`/${apiRoute}`, {
                    params: {
                        page,
                        per_page: perPage,
                        search,
                        category_id: filter,
                    },
                });

                this.data = data.data || [];
                this.pagination = data;
            } catch (error) {
                this.data = [];
                modalAlert("Error", "Failed to fetch products.", "error");
            } finally {
                this.loading = false;
            }
        },

        async getINote(apiRoute) {
            this.errors = {};

            try {
                this.loading = true;
                const { data } = await api.get(`/${apiRoute}`);
                this.selectedItem = data;
            } catch (error) {
                router.push({
                    name: "error",
                    query: {
                        status: error.response?.status || 500,
                        message:
                            error.response?.data?.message ||
                            "Unable to fetch product.",
                    },
                });
            } finally {
                this.loading = false;
            }
        },

        async addNote(apiRoute, formData) {
            this.errors = {};

            try {
                const { data } = await api.post(`/${apiRoute}`, formData);

                toastAlert(
                    data.message || "Product added successfully.",
                    "success"
                );
                router.push({ name: "home" });
            } catch (error) {
                this.errors = error.response?.data?.errors || {};
                toastAlert("Failed to add product.", "error");
            }
        },

        async updateNote(apiRoute, formData) {
            this.errors = {};

            try {
                const { data } = await api.patch(`/${apiRoute}`, formData);

                toastAlert(
                    data.message || "Product updated successfully.",
                    "success"
                );
                router.push({ name: "home" });
            } catch (error) {
                this.errors = error.response?.data?.errors || {};
                toastAlert("Failed to update product.", "error");
            }
        },

        async deleteNote(apiRoute, item) {
            this.errors = {};

            const { isConfirmed } = await Swal.fire({
                title: `Delete ${item.title}?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Delete",
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
            });

            if (!isConfirmed) return;

            try {
                await api.delete(`/${apiRoute}`);

                toastAlert("Note deleted successfully.", "success");

                // Refresh data after deletion using current pagination
                await this.getNotes("notes", this.pagination.current_page, this.pagination.per_page);
            } catch (error) {
                this.errors = error.response?.data?.errors || {};
                toastAlert("Failed to delete note.", "error");
            }
        },
    },
});
