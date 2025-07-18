<script setup>
import { ref } from "vue";
import DefaultLayout from "@/Layout/DefaultLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputField from "@/Components/InputField.vue";
import PageName from "@/Components/PageName.vue";

import { useNoteStore } from "@/Stores/note";

const noteStore = useNoteStore();
const { addNote, errors } = noteStore;

defineProps({
    pageName: {
        default: "No Page name",
    },
    description: {
        default: "No description for this page",
    },
});

const noteFormData = ref({
    title: "",
    body: "",
});
</script>

<template>
    <DefaultLayout>
        <PageName :name="pageName" :description="description" />
        <form @submit.prevent="" class="space-y-4 mt-4">
            <InputField
                v-model="noteFormData.title"
                inputType="text"
                placeholder="Note Title"
                inputLabel="Title"
                :error="errors.title?.[0]"
            />

            <InputField
                v-model="noteFormData.body"
                inputType="text"
                placeholder="Note Title"
                inputLabel="Title"
                :error="errors.body?.[0]"
            />

            <PrimaryButton buttonName="Login" />
        </form>
    </DefaultLayout>
</template>
