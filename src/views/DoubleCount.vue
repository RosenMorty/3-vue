<template>
  <div>
    <h2>Дочерний компонент</h2>
    <p>Текущее значение key1: {{ obj.key1 }}</p>
    <p>Текущее значение key2: {{ props.count }}</p>
  </div>
</template>

<script setup>
import { watch } from "vue";

// Объявляем пропс obj
const props = defineProps({
  count: Number,
  obj: {
    type: Object,
    required: true, // Пропс обязателен
  },
});

// Следим за всем объектом obj
watch(
  () => props.obj,
  (newVal, oldVal) => {
    console.log("Объект obj изменился:", { oldVal, newVal });
  },
  { deep: true } // Наблюдаем за изменениями внутри объекта
);
watch(
  () => props.count,
  (newVal, oldVal) => {
    console.log("Объект obj изменился:", { oldVal, newVal });
  }
);
</script>
