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
  for (let i = 1; i <= lastPage.value; i++) {
    if (
      i === 1 ||
      i === lastPage.value ||
      (i >= currentPage.value - 1 && i <= currentPage.value + 1)
    ) {
      range.push(i);
    } else if (range[range.length - 1] !== '...') {
      range.push('...');
    }
  }
  return range;
});

const changePage = (page) => {
  if (page !== '...' && page !== currentPage.value && page >= 1 && page <= lastPage.value) {
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
        <div class="join">
          <button
            @click="changePage(currentPage - 1)"
            :disabled="currentPage === 1"
            :class="currentPage === 1 ? 'btn-disabled' : 'bg-white'"
            class="join-item btn btn-square"
          >
            &#8249;
          </button>

          <template v-for="(page, index) in pages" :key="index">
            <input
              v-if="page !== '...'"
              :class="{
                'btn-primary': currentPage === page,
                'bg-white': currentPage !== page
              }"
              class="join-item btn btn-square"
              type="radio"
              name="pagination"
              :aria-label="page.toString()"
              :checked="currentPage === page"
              @change="changePage(page)"
            />
            <button
              v-else
              class="join-item btn btn-square btn-disabled"
              disabled
            >
              ...
            </button>
          </template>

          <button
            @click="changePage(currentPage + 1)"
            :disabled="currentPage === lastPage"
            :class="currentPage === lastPage ? 'btn-disabled' : 'bg-white'"
            class="join-item btn btn-square"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>