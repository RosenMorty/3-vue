<template>
  <h2>Каталог</h2>
  <div class="filters">
    <p>Поиск</p>
    <input
      type="searchText"
      v-model="searchText"
      placeholder="Введите больше 2-х символов"
    />
  </div>
  <div class="product-list">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
  <AppPagination
    :total-pages="pagination.pages"
    :current-page="pagination.page"
    @update:current-page="changePage"
  />

  />
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import { getProducts } from "@/api/product";
import type { IProduct } from "@/types/product";
import ProductCard from "@/components/ProductCard.vue";
import type { IPagination } from "@/types/global";
import AppPagination from "@/components/AppPagination.vue";
import { watch } from "vue";

const products = ref<IProduct[]>([]);
const pagination = ref<IPagination>({
  page: 1,
  pages: 0,
  total: 0,
});

const searchText = ref("");

const loadProducts = async (page: number, searchText?: string) => {
  const response = await getProducts(page, searchText);
  products.value = response.products;
  pagination.value = response.pagination;
};

const changePage = async (page: number) => {
  if (page !== pagination.value.page) {
    await loadProducts(page);
  }
};
console.log(123);

watchEffect(() => {
  const search = searchText.value;
  if (search) {
    loadProducts(1, search);
  } else {
    loadProducts(1);
  }
});

// watch(
//   searchText,
//   (newVal, oldVal) => {
//     if (newVal.length > 2) {
//       loadProducts(1, newVal);
//     } else {
//       loadProducts(1);
//     }
//   },
//   { immediate: true }
// );
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
