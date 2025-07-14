import { ref } from "vue";
import api from "@/Lib/axios";
import { useToastAlert } from "@/Composables/useToast";

const { toastAlert } = useToastAlert();

/**
 * Handles API requests with loading and error states
 */
export function useApiRequest() {
    const isLoading = ref(false);       // For GET requests
    const isRequesting = ref(false);    // For all requests
    const data = ref([]);               // Response data
    const error = ref(null);            // Error response

    /**
     * Sends an API request
     * @param {string} url - API endpoint
     * @param {string} method - HTTP method
     * @param {object|null} body - Request payload
     */
    const httpRequest = async (url, method = "GET", body = null) => {
        if (method === "GET") isLoading.value = true;
       

        try {
             isRequesting.value = true;
            const response = await api.request({ url, method, data: body });

            if (method === "GET") {
                data.value = response.data?.data ?? response.data;
            } else {
                // Prepend new data for non-GET requests
                if (response.data?.data) data.value.unshift(response.data.data);
                toastAlert(response.data.message || "Action successful", "success");
            }
        } catch (err) {
            error.value = err;
        } finally {
            isLoading.value = false;
            isRequesting.value = false;
        }
    };

    return { httpRequest, data, error, isLoading, isRequesting };
}
