<template>
  <h2>Каталог</h2>
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
import { ref } from "vue";
import { getProducts } from "@/api/product";
import type { IProduct } from "@/types/product";
import ProductCard from "@/components/ProductCard.vue";
import type { IPagination } from "@/types/global";
import AppPagination from "@/components/AppPagination.vue";

const products = ref<IProduct[]>([]);
const pagination = ref<IPagination>({
  page: 1,
  pages: 0,
  total: 0,
});

const loadProducts = async (page: number) => {
  const response = await getProducts(page);
  products.value = response.products;
  pagination.value = response.pagination;
  console.log(response);
};

const changePage = async (page: number) => {
  if (!page !== pagination.value.page) {
    await loadProducts(page);
  }
};

loadProducts(pagination.value.page);
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
