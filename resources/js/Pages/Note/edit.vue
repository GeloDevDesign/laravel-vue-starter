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

const props = defineProps({
    id: {
        type: [String, Number],
        required: true,
    },
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

onMounted(async () => {
    await noteStore.getNote(`notes/${props.id}`);
    noteFormData.value.title = data.value.title;
    noteFormData.value.body = data.value.body;
});
</script>
id

<template>
    <DefaultLayout>
        <div class="flex items-center justify-between">
            <PageName :name="pageName" :description="description" />
            <button
                @click="noteStore.deleteNote(`notes/${props.id}`, noteFormData.title)"
                class="link-error link"
            >
                Delete Note
            </button>
        </div>
        <form @submit.prevent="" class="space-y-4 mt-4">
            <div v-if="loading" class="skeleton h-10 w-full"></div>
            <div v-if="loading" class="skeleton h-10 w-full"></div>

            <InputField
                v-if="!loading"
                v-model="noteFormData.title"
                inputType="text"
                placeholder="Note Title"
                inputLabel="Title"
                :error="errors.title?.[0]"
            />

            <InputField
                v-if="!loading"
                v-model="noteFormData.body"
                inputType="text"
                placeholder="Note Body"
                inputLabel="Body"
                :error="errors.body?.[0]"
            />

            <PrimaryButton
                :disabled="isRequesting"
                @click="noteStore.updateNote(`notes/${props.id}`, noteFormData)"
                buttonName="Update Note"
            />
        </form>
    </DefaultLayout>
</template>
