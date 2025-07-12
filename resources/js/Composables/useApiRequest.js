import { ref } from "vue";
import api from "@/Lib/axios";

export function useApiRequest() {
    const isLoading = ref(false);
    const data = ref(null);
    const error = ref(null);

    const httpRequest = async (method = "GET", url, body = null) => {
        isLoading.value = true;
        try {
            const response = await api.request({
                url,
                method,
                body,
            });
            console.log(response.data);
            data.value = response.data?.data ?? response.data;
        } catch (err) {
            error.value = err;
        } finally {
            isLoading.value = false;
        }
    };

    return { httpRequest, data, error, isLoading };
}
