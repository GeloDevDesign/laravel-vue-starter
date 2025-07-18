<script setup>
import { ref } from "vue";
import DefaultLayout from "@/Layout/DefaultLayout.vue";
import { useNoteStore } from "@/Stores/note";

const noteStore = useNoteStore();
const { addNote } = noteStore;

const formData = ref({
    title: "",
    body: "",
});

const submitNote = async () => {
    await addNote("notes", formData.value);
    // Optionally, redirect back to notes list or show success message
};
</script>

<template>
    <DefaultLayout>
        <h1 class="text-xl font-bold mb-4">Create Note Page</h1>
        <form @submit.prevent="submitNote" class="space-y-4">
            <InputField
                v-model="formData.title"
                inputType="text"
                placeholder="Note Title"
                inputLabel="Title"
                :error="errors.title?.[0]"
            />

            <InputField
                v-model="formData.title"
                inputType="text"
                placeholder="Note Title"
                inputLabel="Title"
                :error="errors.title?.[0]"
            />

            <button type="submit" class="btn btn-primary">Save Note</button>
        </form>
    </DefaultLayout>
</template>
