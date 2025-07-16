<script setup>
import { ref, reactive, onMounted } from "vue";
import { RouterLink } from "vue-router";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputField from "@/Components/InputField.vue";

import { useApiRequest } from "@/Composables/useApiRequest";
const { httpRequest, data, error, isLoading, isRequesting } = useApiRequest();

const loginFormData = reactive({
    email: "",
    password: "",
});
</script>

<template>
    <section
        class="flex justify-center flex-col gap-4 items-center h-screen bg-base-200"
    >
        <img
            class="w-full max-w-10"
            alt="Tailwind CSS Navbar component"
            src="https://img.freepik.com/free-vector/gradient-triangle-molecule-logo-technology-design_53876-116026.jpg?semt=ais_hybrid&w=740"
        />

        <div class="w-1/4 flex flex-col gap-4 bg-base-100 p-4">
            <div
                class="text-center flex flex-col items-center justify-center pb-4"
            >
                <h1 class="font-semibold text-xl opacity-80">
                   Reset Password
                </h1>
                <p class="opacity-70 text-sm mt-1">
                    Enter your registered email to get a reset link.
                </p>
            </div>
            <InputField
                v-model="loginFormData.email"
                inputType="text"
                placeholder="Your email"
                inputLabel="Email"
            />
            <PrimaryButton buttonName="Send Reset Link" />
        </div>
         <div class="flex items-center gap-1 text-sm">
            <p class="opacity-75">Back to</p>
            <RouterLink :to="{ name: 'login' }">
                <span class="link link-primary opacity-100">Login</span>
            </RouterLink>
        </div>
    </section>
</template>
