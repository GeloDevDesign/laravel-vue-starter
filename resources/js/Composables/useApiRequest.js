import { ref } from "vue";
import api from "@/Lib/axios";
import { useToastAlert } from "@/Composables/useToast";
const { toastAlert } = useToastAlert();

/**
 * Composable for handling API requests with state management
 */
export function useApiRequest() {
    // Reactive state
    const isLoading = ref(false); // Loading state for GET requests
    const data = ref([]); // Stores API response data
    const error = ref(null); // Stores request errors
    const isRequesting = ref(false); // Tracks if any request is in progress

    /**
     * Handles API requests with automatic state management
     * @param {string} url - API endpoint
     * @param {string} method - HTTP method (GET, POST, etc.)
     * @param {object|null} body - Request payload
     */
    const httpRequest = async (url, method = "GET", body = null) => {
        // Only show full loading for GET requests
        if (method === "GET") {
            isLoading.value = true;
        }

        try {
            // Set requesting state for button disables
            isRequesting.value = true;

            const response = await api.request({ url, method, data: body });

            if (method === "GET") {
                // For GET requests, replace all data
                data.value = response.data?.data ?? response.data;
            } else {
                // For other methods, prepend new data if exists
                if (response.data?.data) {
                    data.value.unshift(response.data.data);
                }
                // Show success toast
                toastAlert(
                    response.data.message || "Action successful",
                    "success"
                );
            }
        } catch (err) {
            error.value = err; // Store error
        } finally {
            // Reset loading states
            isLoading.value = false;
            isRequesting.value = false;
        }
    };

    return { httpRequest, data, error, isLoading, isRequesting };
}
