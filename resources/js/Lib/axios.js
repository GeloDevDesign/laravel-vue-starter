import axios from "axios";
import router from "@/router";
import { useToastAlert } from "@/Composables/useToast";
import { RESPONSE_STATUS } from "./responses.js";
const { toastAlert } = useToastAlert();

const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
    headers: {
        Accept: "application/json",
    },
});

api.interceptors.request.use((request) => {
    const token = localStorage.getItem("token");
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
});

api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        const status = error.response?.status;

        const errorFound = RESPONSE_STATUS.find((s) => s.statusCode === status);
        const message = errorFound?.message || "An unknown error occurred.";

        if (
            status === 403 ||
            status === 405 ||
            status === 500 ||
            status === 502 ||
            status === 503 ||
            status === 504
        ) {
            router.push({
                name: "error",

                params: {
                    status: status || 404,
                    message: message || "Page not found.",
                },
            });
        }

        return Promise.reject(error);
    }
);

export default api;
