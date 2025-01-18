<template>
  <div class="container">
    <div class="header">
      <router-link to="main">main link</router-link>
    </div>
    <h1>Project title</h1>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, useRouter, useRoute } from "vue-router";

const user = {
  isManager: true,
};

const router = useRouter();

const route = useRoute();
console.log(route);
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
