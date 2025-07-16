<script setup>
import { ref, reactive, onMounted } from "vue";
import { RouterLink } from "vue-router";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputField from "@/Components/InputField.vue";

import { useApiRequest } from "@/Composables/useApiRequest";
const { httpRequest, data, error, isLoading, isRequesting } = useApiRequest();

const loginFormData = reactive({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});
</script>

<template>
    <section
        class="flex justify-center flex-col gap-4 items-center h-screen bg-base-200"
    >
        <img
            class="w-full max-w-10 mb-4"
            alt="Tailwind CSS Navbar component"
            src="https://img.freepik.com/free-vector/gradient-triangle-molecule-logo-technology-design_53876-116026.jpg?semt=ais_hybrid&w=740"
        />

        <div class="w-1/4 flex flex-col gap-4 bg-base-100 p-4">
            <div
                class="text-center flex flex-col items-center justify-center pb-4"
            >
                <h1 class="font-semibold text-xl opacity-80">Welcome Back</h1>
                <p class="opacity-70 text-sm mt-1">
                    To access the system please login.
                </p>
            </div>
            <InputField
                v-model="loginFormData.name"
                inputType="text"
                placeholder="Your name"
                inputLabel="Name"
            />
            <InputField
                v-model="loginFormData.email"
                inputType="text"
                placeholder="Your email"
                inputLabel="Email"
            />
            <InputField
                v-model="loginFormData.password"
                inputType="password"
                placeholder="Your password"
                inputLabel="Password"
            />
            <InputField
                v-model="loginFormData.password_confirmation"
                inputType="password"
                placeholder="Your password confirmation"
                inputLabel="Password Confirmation"
            />

            <PrimaryButton buttonName="Register" class="mt-2" />
        </div>
        <div class="flex items-center gap-1">
            <p class="opacity-75">Already have account yet?</p>
            <RouterLink :to="{ name: 'login' }">
                <span class="link link-primary opacity-100">Login</span>
            </RouterLink>
        </div>
    </section>
</template>
