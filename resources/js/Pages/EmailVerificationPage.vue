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
                    Check Your Email
                </h1>
                <p class="opacity-70 text-sm mt-1">
                    We've sent you a reset link.
                </p>
            </div>

            <PrimaryButton buttonName="Send Reset Link" />
        </div>

        <div class="flex items-center gap-2 text-sm">
            <span class="opacity-70">Didn't get the email?</span>
            <span class="link link-primary">Resend</span>
        </div>
    </section>
</template>
