<template>
  <header class="class">
    <router-link :to="{ name: 'product', query: {} }"> unknown </router-link>
    <router-link :to="{ name: 'product', query: { from: 'youtube' } }">
      from youtube
    </router-link>
    <router-link :to="{ name: 'product', query: { from: 'email' } }">
      from email
    </router-link>
  </header>
  <h3>Product page</h3>
  <h4>id: {{ route.params.id }}</h4>
  <h4 v-if="route.query.from">
    Добро пожаловать, рады что вы пришли к нам с {{ route.query.from }}
  </h4>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
