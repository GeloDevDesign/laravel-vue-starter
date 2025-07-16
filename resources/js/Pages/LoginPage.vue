<script setup>
import { ref, reactive, onMounted } from "vue";
import { RouterLink } from "vue-router";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputField from "@/Components/InputField.vue";


import { useAuthStore } from "@/Stores/auth";
import { storeToRefs } from "pinia";

const { errors } = storeToRefs(useAuthStore());
const authStore = useAuthStore();

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

        <form
            @submit.prevent="
                () => {
                    authStore.authenticate('login', loginFormData);
                }
            "
            class="w-1/4 flex flex-col gap-4 bg-base-100 p-4"
        >
            <div
                class="text-center flex flex-col items-center justify-center pb-4"
            >
                <h1 class="font-semibold text-xl opacity-80">Welcome Back!</h1>
                <p class="opacity-70 mt-1">Log in to access your account.</p>
            </div>

            <InputField
                v-model="loginFormData.email"
                inputType="text"
                placeholder="Your email"
                inputLabel="Email"
                :error="errors.email?.[0]"
            />
            <InputField
                v-model="loginFormData.password"
                inputType="password"
                placeholder="Your Password"
                inputLabel="Password"
                :error="errors.password?.[0]"
            />

            <RouterLink
                class="text-end text-sm link link-primary"
                :to="{ name: 'reset-password' }"
            >
                Forgot your password?
            </RouterLink>

            <PrimaryButton buttonName="Login" />
        </form>

        <div class="flex items-center gap-1 text-sm">
            <p class="opacity-75">Don't have an account yet?</p>
            <RouterLink :to="{ name: 'register' }">
                <span class="link link-primary opacity-100">Create one</span>
            </RouterLink>
        </div>
    </section>
</template>
