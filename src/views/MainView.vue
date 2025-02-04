<template>
  <h3>Main page</h3>
  <router-view />
</template>

<script setup>
// const bibery = () => {
//   const a = 15;
//   return new Promise((resolve) => resolve(a * 2))
//     .then((data) =>
//       setTimeout(() => {
//         const b = data * 4;
//         console.log(b);
//       }, 2000)
//     )
//     .catch((error) => {
//       throw new Error("Проебался", error);
//     });
// };

// console.log(bibery());

// const newFunc = async () => {
//   const a = 100;
//   const prom = new Promise((resolve) => resolve(a * 2));
//   return await prom.then(console.log(prom));
// };

// console.log(newFunc());

// const prom = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hello, Promise!");
//   }, 1000);
// });

// prom.then((message) => {
//   console.log(message);
// });

// const promErr = new Promise((reject) => {
//   setTimeout(() => {
//     reject(new Error("Something went wrong"));
//   }, 1000);
// });

// promErr.catch((error) => {
//   console.error(error.message);
// });

// const numberPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000);
// });

// numberPromise
//   .then((a) => {
//     console.log(a);
//     return a * 1;
//   })
//   .then((num) => num + 5)
//   .then((result) => console.log(result))
//   .catch((error) => console.error("Ошибка:", error));

// const myPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hello, Promise !");
//   }, 2000);
// });

// myPromise.then((message) => {
//   console.log(message);
// });

// const myPromise = new Promise((_, reject) => {
//   setTimeout(() => {
//     reject("Something went wrong");
//   }, 1000);
// });

// myPromise.catch((error) => {
//   console.error("Ошибка:", error);
// });

// const plusFive = new Promise((resolve) => {
//   resolve(10);
// });

// plusFive.then((num) => num + 5).then((result) => console.log(result));

// const myPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Done");
//   }, 2000);
// });

// myPromise.finally(() => {
//   console.log("Execution finished");
// });

const f = async () => {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("готово!"), 1000);
  });

  let result = await promise;

  alert(result);
};

f();
</script>
