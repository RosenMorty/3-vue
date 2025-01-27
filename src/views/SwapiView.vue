<template>
  <h2>Каталог SWAPI</h2>
  <div class="swapi">
    <input type="serchSomethink" placeholder="Введите что вы ищите )" />
    <div class="swapi-people">
      <h5 class="name">Имя: {{}}</h5>
      <h5 class="height">Рост: {{}}</h5>
      <h5 class="mass">Вес: {{}}</h5>
      <h5 class="hair_color">Цвет волос: {{}}</h5>
      <h5 class="skin_color">Цвет кожи: {{}}</h5>
      <h5 class="eye_color">Цвет глаз: {{}}</h5>
      <h5 class="gender">Цвет кожи: {{}}</h5>
      <div class="swapi-list"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { ISwapi } from "@/types/swapi";
import { useRoute } from "vue-router";
import SwapiCard from "@/components/SwapiCard.vue";

const route = useRoute();
const guys = ref<ISwapi | null>(null);
const searchQuery = ref("");

const getSwapiG = async (swapiId: number): Promise<void> => {
  try {
    const response = await fetch("https://swapi.dev/api/");
    if (!response.ok) {
      throw new Error("Ошибка загрузки данных");
    }
    const data = await response.json();
    guys.value = data;
  } catch (error) {
    console.log(error);
  }
};

const filteredSwapiGuys = computed(() =>
  guys.value.filter((guy) =>
    guy.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
</script>

<style scoped>
.swapi {
  width: 200px;
  margin: 10px;
  border: 1px solid transparent;
  border-radius: 6px;
}

.name .height .mass .hair_color .hair_color .skin_color .eye_color .gender {
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
