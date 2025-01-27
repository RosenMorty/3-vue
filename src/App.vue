<template>
  <div class="container">
    <div class="header">
      <router-link to="main">main link</router-link>
      <router-link to="main/page1">Page1</router-link>
      <router-link to="main/page2">Page2</router-link>
    </div>
    <h1>Project title</h1>
    <div>
      <h1>Родительский компонент</h1>
      <label>
        Измените значение key1:
        <input type="text" v-model="obj.key1" />
      </label>
      <label>
        Измените значение key2:
        <input type="number" v-model="count" />
      </label>
      <double-count :obj="obj" :count="count" />
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, useRouter, useRoute } from "vue-router";
import DoubleCount from "./views/DoubleCount.vue";
import { reactive } from "vue";

const count = ref(10);

// Реактивный объект
const obj = reactive({
  key1: null,
  key2: null,
});

const user = {
  isManager: true,
};

const router = useRouter();

const route = useRoute();
// console.log(route);
</script>

<style>
body {
  background-color: #e1e1e1;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.header {
  display: flex;
  gap: 12px;
}
</style>
