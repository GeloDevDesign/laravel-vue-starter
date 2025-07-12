import axios from "axios";
import router from "@/router";

const RESPONSE_STATUS = [
    {
        statusCode: 400,
        message: "Bad Request. The server could not understand the request.",
    },
    {
        statusCode: 401,
        message: "Unauthorized. Please login to access this resource.",
    },
    {
        statusCode: 403,
        message:
            "Forbidden Access. You don’t have permission to view this page.",
    },
    {
        statusCode: 404,
        message: "Page not found. The requested resource doesn't exist.",
    },
    {
        statusCode: 405,
        message: "Method Not Allowed. The request method is not supported.",
    },
    {
        statusCode: 408,
        message:
            "Request Timeout. The server timed out waiting for the request.",
    },
    {
        statusCode: 409,
        message:
            "Conflict. The request could not be completed due to a conflict.",
    },
    {
        statusCode: 422,
        message:
            "Validation failed. Please review and correct the highlighted fields.",
    },
    {
        statusCode: 429,
        message: "Too Many Requests. You have hit the rate limit.",
    },
    {
        statusCode: 500,
        message: "Internal Server Error. Something went wrong on the server.",
    },
    {
        statusCode: 502,
        message: "Bad Gateway. Invalid response from the upstream server.",
    },
    {
        statusCode: 503,
        message:
            "Service Unavailable. The server is temporarily overloaded or down.",
    },
    {
        statusCode: 504,
        message: "Gateway Timeout. The server didn’t respond in time.",
    },
];

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
    (response) => response,
    (error) => {
        const status = error.response?.status;

        const errorFound = RESPONSE_STATUS.find((s) => s.statusCode === status);
        const message = errorFound?.message || "An unknown error occurred.";

        if (status === 401 || status === 502 || status === 503 || status === 504) {
            localStorage.removeItem("token");
            router.push({
                name: "error",
                props: { errorStatus: status, errorMessage: message },
            });
        } else {
            alert(message);
        }

        return Promise.reject(error);
    }
);

export default api;
