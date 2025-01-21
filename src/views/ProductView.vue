<template>
  <div class="product">
    <div v-if="product">
      <img
        class="product-img-top"
        :src="product.image.file.url"
        :alt="product.image.file.name"
      />
      <div class="product-body">
        <h5 class="product-title">{{ product.title }}</h5>
        <p class="product-text">{{ product.price }} ₽</p>
      </div>
    </div>
    <div v-else>
      <p>Загрузка...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { IProduct } from "@/types/product";

export default {
  setup() {
    const route = useRoute();
    const product = ref<IProduct | null>(null);

    // Функция для получения данных товара
    const getProduct = async (productId: number) => {
      try {
        const response = await fetch(
          `https://vue-study.skillbox.cc/api/products/${productId}`
        );
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        const data = await response.json();
        product.value = data;
      } catch (error) {
        console.error(error);
      }
    };

    // Получаем данные товара при монтировании компонента
    onMounted(() => {
      const productId = Number(route.params.id); // Получаем id из маршрута
      if (!isNaN(productId)) {
        getProduct(productId); // Загружаем товар по id
      } else {
        console.error("Неверный формат ID");
      }
    });

    // Возвращаем переменные и методы для использования в шаблоне
    return {
      product: product,
    };
  },
};
</script>

<style scoped>
/* Стили для компонента */
img {
  max-width: 200px;
  max-height: 200px;
  object-fit: contain;
}

.product {
  width: 200px;
  margin: 10px;
  border: 1px solid transparent;
  border-radius: 6px;
}
.product-with-small-price {
  border: 1px solid #027502;
}
.product-img-top {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: white;
  border-radius: 6px 6px 0 0;
}
.product-title {
  font-size: 1.25rem;
  font-weight: 700;
}
.product-text {
  font-size: 1rem;
}
.product-text-with-small-price {
  color: #027502;
}
.product-body {
  padding: 4px;
}
h5 {
  margin: 16px 0;
}
</style>
