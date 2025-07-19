<script setup>
import { ref, reactive, onMounted } from "vue";
import { RouterLink } from "vue-router";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputField from "@/Components/InputField.vue";

import { useApiRequest } from "@/Composables/useApiRequest";
import { useAuthStore } from "@/Stores/auth";
import { storeToRefs } from "pinia";

const { errors,isRequesting } = storeToRefs(useAuthStore());
const authStore = useAuthStore();

const registerFormData = reactive({
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

        <form
            @submit.prevent="
                () => {
                    authStore.authenticate('register', registerFormData);
                }
            "
            class="w-1/4 flex flex-col gap-4 bg-base-100 p-4"
        >
            <div
                class="text-center flex flex-col items-center justify-center pb-4"
            >
                <h1 class="font-semibold text-xl opacity-80">
                    Create Your Account
                </h1>
                <p class="opacity-70 text-sm mt-1">Sign up to get started.</p>
            </div>

            <InputField
                v-model="registerFormData.name"
                inputType="text"
                placeholder="Your name"
                inputLabel="Name"
                :error="errors.name?.[0]"
            />
            <InputField
                v-model="registerFormData.email"
                inputType="text"
                placeholder="Your email"
                inputLabel="Email"
                :error="errors.email?.[0]"
            />
            <InputField
                v-model="registerFormData.password"
                inputType="password"
                placeholder="Your password"
                inputLabel="Password"
            />
            <InputField
                v-model="registerFormData.password_confirmation"
                inputType="password"
                placeholder="Confirm your password"
                inputLabel="Confirm Password"
                :error="errors.password?.[0]"
            />

            <PrimaryButton :disabled="isRequesting"  buttonName="Register" class="mt-2" />
        </form>

        <div class="flex items-center gap-1 text-sm">
            <p class="opacity-75">Already have an account?</p>
            <RouterLink :to="{ name: 'login' }">
                <span class="link link-primary opacity-100">Log in</span>
            </RouterLink>
        </div>
    </section>
</template>
