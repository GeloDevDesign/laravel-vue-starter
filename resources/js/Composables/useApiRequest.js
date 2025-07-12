import { reactive } from "vue";
import api from "@/Lib/axios";

export function useApiRequest() {
    const apiState = reactive({
        isLoading: false,
        data: null,
        error: null,
    });

    const httpRequest = async (callback) => {
        apiState.isLoading = true;
        apiState.error = null;
        apiState.data = null;

        try {
            const response = await callback;
            console.log(response.data);
            apiState.data = response.data?.data ?? response.data;
        } catch (err) {
            apiState.error = err;
        } finally {
            apiState.isLoading = false;
        }
    };

    return { httpRequest, apiState };
}
