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
          <p :value="formattedIncome">Доход: {{ formattedIncome }}</p>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from "vue";

// const amount = ref(0);
// const interestRate = ref(0);
// const duration = ref(0);
// const profit = ref(0);
// const loading = ref(false);

// const getCalculatedProfit = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         profit:
//           (amount.value * interestRate.value * (duration.value * 30)) /
//           (365 * 100),
//       });
//     }, 2000);
//   });
// };

// const resetCalc = () => {
//   amount.value = 0;
//   interestRate.value = 0;
//   duration.value = 0;
//   profit.value = 0;
// };

// const calculatedProfit = async () => {
//   if (amount.value > 0 && interestRate.value > 0 && duration.value > 0) {
//     loading.value = true;
//     try {
//       const result = await getCalculatedProfit();
//       profit.value = result.profit;
//     } catch (error) {
//       console.log("Ошибка в расчетах", error);
//       profit.value = "Ошибка";
//     } finally {
//       loading.value = false;
//     }
//   } else {
//     profit.value = null;
//   }
// };

// const debounce = (func, delay) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func(...args), delay);
//   };
// };

// const formattedIncome = computed(() => {
//   console.log(profit.value);
//   return new Intl.NumberFormat("ru-RU").format(profit.value);
// });

// // const debouncedCalculateProfit = debounce(calculatedProfit, 200);

// watch([amount, interestRate, duration], debouncedCalculateProfit, {
//   deep: true,
// });

// const checkScroll = () => {
//   if (window.scrollY > 600) {
//     resetCalc();
//     console.log("Сброс калькулятора до дефолтных значений");
//   }
// };

// onMounted(() => {
//   window.addEventListener("scroll", checkScroll);
// });

// onBeforeUnmount(() => {
//   window.removeEventListener("scroll", checkScroll);
// });

// const getRandomNumber = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() * 10 + 1 > 9) {
//       resolve("Успешно выполнилось");
//     } else {
//       reject("Число меньше 9");
//     }
//   }, 2000);
// });

// getRandomNumber
//   .then((successData) => {
//     console.log("Успешно:", successData);
//   })
//   .catch((error) => {
//     console.log("Ошибка:", error);
//   });

// const fetchUserData = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Vlad", age: 22 });
//     }, 1500);
//   });
// };

// async () => {
//   const user = await fetchUserData();
//   console.log("Данные пользователя:", user);
// };
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
