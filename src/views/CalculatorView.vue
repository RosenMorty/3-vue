<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-container">
      <h2>Калькулятор вклада</h2>
      <div class="form-group">
        <label for="months">Количество месяцев:</label>
        <input
          v-model="form.duration"
          type="number"
          placeholder="Введите количество месяцев"
        />
        <p>{{ form.months }}</p>
      </div>

      <div class="form-group">
        <label for="interest-rate">Процентная ставка (%):</label>
        <input
          v-model="form.interestRate"
          type="number"
          placeholder="Введите процентную ставку"
        />
      </div>

      <div class="form-group">
        <label for="deposit-amount">Сумма вклада:</label>
        <input
          v-model="form.amount"
          type="number"
          placeholder="Введите сумму вклада"
        />
      </div>

      <div class="form-group">
        <div class="result" id="result">
          <p :value="formattedIncome">Доход: {{ formattedIncome }}</p>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import {
  reactive,
  ref,
  watch,
  computed,
  onMounted,
  onBeforeUnmount,
} from "vue";

const form = reactive({
  amount: null,
  interestRate: null,
  duration: null,
});

const resetCalc = () => {
  form.amount = null;
  form.interestRate = null;
  form.duration = null;
};

const profit = ref(null);
const loading = ref(false);
const isScrolled = ref(false);

const getCalculatedProfit = async ({ amount, interestRate, duration }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const calculatedProfit =
        (amount * interestRate * (duration * 30)) / (365 * 100);
      resolve({ profit: calculatedProfit });
    }, 1000);
  });
};

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const calculateProfit = async () => {
  if (form.amount > 0 && form.interestRate > 0 && form.duration > 0) {
    loading.value = true;
    try {
      const result = await getCalculatedProfit(form);
      profit.value = result.profit;
    } catch (error) {
      console.error("Ошибка при расчете прибыли:", error);
      profit.value = "Ошибка";
    } finally {
      loading.value = false;
    }
  } else {
    profit.value = null;
  }
};

const debouncedCalculateProfit = debounce(calculateProfit, 200);

watch(form, debouncedCalculateProfit, { deep: true });

const handleSubmit = async () => {
  await calculateProfit();
};

const formattedIncome = computed(() => {
  return new Intl.NumberFormat("ru-RU").format(profit.value);
});

const checkScroll = () => {
  if (window.scrollY > 600) {
    resetCalc();
    console.log("Сброс калькулятора до дефолтных значений");
  }
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScroll);
});
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
