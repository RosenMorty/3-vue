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
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
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
