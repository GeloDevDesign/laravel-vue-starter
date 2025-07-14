<script setup>
import { ref, reactive, onMounted } from "vue";
import { useApiRequest } from "@/Composables/useApiRequest";
const { httpRequest, data, error, isLoading, isRequesting } = useApiRequest();

const loginFormData = reactive({
    email: "",
    password: "",
});

import InputField from "@/Components/InputField.vue";
</script>

<template>
    <section class="flex justify-center items-center h-screen">
        <div class="w-1/4 flex flex-col gap-4">
            <InputField
                v-model="loginFormData.email"
                inputType="text"
                placeholder="Your email"
                inputLabel="Email"
            />
            <InputField
                v-model="loginFormData.password"
                inputType="password"
                placeholder="Your Password"
                inputLabel="Password"
            />
        </div>
    </section>
</template>
