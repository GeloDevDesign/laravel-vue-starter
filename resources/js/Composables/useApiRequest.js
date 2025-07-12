import { ref } from "vue";
import api from "@/Lib/axios";
import { useToastAlert } from "@/Composables/useToast";
const { toastAlert } = useToastAlert();

export function useApiRequest() {
    const isLoading = ref(false);
    const data = ref([]);
    const error = ref(null);
    const isRequesting = ref(false);

    const httpRequest = async (url, method = "GET", body = null) => {
        isRequesting.value = true;
        if (method === "GET") {
            isLoading.value = true;
        }

        try {
            const response = await api.request({
                url,
                method,
                data: body,
            });

            if (method === "GET") {
                data.value = response.data?.data ?? response.data;
            } else {
                if (response.data?.data) {
                    data.value.unshift(response.data.data);
                }
                toastAlert(
                    response.data.message || "Action successful",
                    "success"
                );
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
