<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-container">
      <h2>Калькулятор вклада</h2>
      <div class="form-group">
        <label for="months">Количество месяцев:</label>
        <input
          v-model="duration"
          type="number"
          placeholder="Введите количество месяцев"
        />
        <p>{{ duration.value }}</p>
      </div>

      <div class="form-group">
        <label for="interest-rate">Процентная ставка (%):</label>
        <input
          v-model="interestRate"
          type="number"
          placeholder="Введите процентную ставку"
        />
      </div>

      <div class="form-group">
        <label for="deposit-amount">Сумма вклада:</label>
        <input
          v-model="amount"
          type="number"
          placeholder="Введите сумму вклада"
        />
      </div>

      <div class="form-group">
        <div class="result" id="result">
          <p>Доход: {{ formattedProfit }}</p>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch, watchEffect } from "vue";

const amount = ref(0);
const interestRate = ref(0);
const duration = ref(0);
const profit = ref(0);

// watch(
//   () => {},
//   () => {
//     profit.value =
//       (amount.value * interestRate.value * (duration.value * 30)) / (365 * 100);
//   }
// );

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const formattedProfit = computed(
  () => `${new Intl.NumberFormat("ru-RU").format(profit.value)}`
);

const reset = () =>
  window.scrollY > 600 &&
  ((amount.value = 0), (interestRate = 0), (duration = 0), (profit = 0));

onMounted(() => window.addEventListener("scroll", reset));
onUnmounted(() => window.removeEventListener("scroll", reset));
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
  margin-right: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group input[type="number"] {
  -moz-appearance: textfield;
}

.form-group input[type="number"]::-webkit-outer-spin-button,
.form-group input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-group button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-group button:hover {
  background-color: #45a049;
}

.result {
  margin-top: 20px;
  font-size: 18px;
}
</style>
