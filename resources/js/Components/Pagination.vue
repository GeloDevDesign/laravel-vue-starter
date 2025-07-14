<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  pagination: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["page-changed"]);

const currentPage = computed(() => props.pagination.current_page);
const lastPage = computed(() => props.pagination.last_page);
const from = computed(() => props.pagination.from || 1);
const to = computed(() => props.pagination.to || props.pagination.total);
const total = computed(() => props.pagination.total);

const pages = computed(() => {
  const range = [];
  const start = Math.max(1, currentPage.value - 2);
  const end = Math.min(lastPage.value, currentPage.value + 2);

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
});

const changePage = (page) => {
  if (page >= 1 && page <= lastPage.value && page !== currentPage.value) {
    emit("page-changed", page);
  }
};
</script>

<template>
  <div class="flex items-center justify-between border-gray-200 sm:px-6">
    <!-- PARA SA MOBILE VIEW-->
    <div class="flex justify-between flex-1 sm:hidden">
      <button
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      >
        Previous
      </button>
      <button
        @click="changePage(currentPage + 1)"
        :disabled="currentPage === lastPage"
        class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      >
        Next
      </button>
    </div>

    <!-- PARA SA DEKSTOP VIEW -->
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ from }}</span>
          to
          <span class="font-medium">{{ to }}</span>
          of
          <span class="font-medium">{{ total }}</span>
          results
        </p>
      </div>
      <div>
        <nav
          class="inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            @click="changePage(1)"
            :disabled="currentPage === 1"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
          >
            <span class="sr-only">First</span>
            &laquo;
          </button>

          <template v-for="page in pages" :key="page">
            <button
              @click="changePage(page)"
              :class="{
                'bg-blue-50 border-blue-500 text-blue-600':
                  currentPage === page,
                'bg-white border-gray-300 text-gray-500 hover:bg-gray-50':
                  currentPage !== page,
              }"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium border"
            >
              {{ page }}
            </button>
          </template>

          <button
            @click="changePage(lastPage)"
            :disabled="currentPage === lastPage"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50"
          >
            <span class="sr-only">Last</span>
            &raquo;
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>