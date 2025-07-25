import { ref } from "vue";
import api from "@/Lib/axios";
import { useToastAlert } from "@/Composables/useToast";

const { toastAlert } = useToastAlert();

export function useApiRequest() {
    const isLoading = ref(false);
    const isRequesting = ref(false);
    const data = ref([]);
    const error = ref(null);
    const isMakingRequest = ref(false);
    const selectedItem = ref(null);
    const pagination = null;

    const httpRequest = async (url, method = "GET", body = null) => {
        if (method === "GET") isLoading.value = true;

        try {
            isRequesting.value = true;
            const response = await api.request({ url, method, data: body });

            if (method === "GET") {
                data.value = response.data?.data ?? response.data;
            } else {
                if (response.data?.data) data.value.unshift(response.data.data);
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

    const httpGetRequest = async (url) => {
        isLoading.value = true;
        try {
            const response = await api.get(url);

            data.value = response.data.data || [];
            pagination.value = response.data.data;
        } catch (err) {
            error.value = err;
        } finally {
            isLoading.value = false;
        }
    };

    const httpPostRequest = async (url, payload) => {
        isMakingRequest.value = true;
        try {
            const response = await api.post(url, payload);
            data.value.unshift(response.data.data);
            toastAlert("Created successfully", "success");
        } catch (err) {
            error.value = err;
        } finally {
            isMakingRequest.value = false;
        }
    };

    const httpPutRequest = async (url, id, payload) => {
        isMakingRequest.value = true;
        selectedItem.value = id;
        try {
            const response = await api.put(url, payload);

            // Update the specific item in the array
            const index = data.value.findIndex((item) => item.id === id);
            if (index !== -1) {
                data.value[index] = response.data.data;
            }
            toastAlert(
                response.data.message || "Updated successfully",
                "success"
            );
        } catch (err) {
            error.value = err;
        } finally {
            isMakingRequest.value = false;
            selectedItem.value = null;
        }
    };

    const httpDeleteRequest = async (url, id) => {
        isMakingRequest.value = true;
        selectedItem.value = id;
        try {
            await api.delete(url);
            const response = await api.delete(url);
            const index = data.value.findIndex((item) => item.id === id);
            if (response.ok && index !== -1) {
                data.value.splice(index, 1); // Remove the item at the found index
            }
            data.value = data.value.filter((item) => item.id !== id);
            toastAlert(
                response.data.message || "Deleted successfully",
                "success"
            );
        } catch (err) {
            error.value = err;
        } finally {
            isMakingRequest.value = false;
            selectedItem.value = null;
        }
    };

    return {
        httpRequest,
        httpGetRequest,
        httpPostRequest,
        httpPutRequest,
        httpDeleteRequest,
        data,
        error,
        isLoading,
        isMakingRequest,
        selectedItem,
    };
}
