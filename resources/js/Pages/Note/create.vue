<script setup>
import { ref, onMounted } from "vue";
import DefaultLayout from "@/Layout/DefaultLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputField from "@/Components/InputField.vue";
import PageName from "@/Components/PageName.vue";
import { storeToRefs } from "pinia";
import { useNoteStore } from "@/Stores/note";
import { useRoute } from "vue-router";

const noteStore = useNoteStore();

const { data, errors, loading, isRequesting } = storeToRefs(noteStore);
const route = useRoute();

const props = defineProps({
    pageName: {
        type: String,
        default: "No Page Name",
    },
    description: {
        type: String,
        default: "No description for this page",
    },
});

const noteFormData = ref({
    title: "",
    body: "",
});
</script>
id

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

            <PrimaryButton
                :disabled="isRequesting"
                @click="noteStore.addNote('notes', noteFormData)"
                buttonName="Create New Note"
            />
        </form>
    </DefaultLayout>
</template>
