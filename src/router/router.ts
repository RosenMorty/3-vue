import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      name: "catalog",
      path: "/catalog",
      component: () => import("@/views/CatalogView.vue"),
    },
    {
      name: "product",
      path: "/product/:id",
      component: () => import("@/views/ProductView.vue"),
    },
    {
      name: "not-found",
      path: "/:pathMach(.*)*",
      component: () => import("@/views/NotFoundView.vue"),
    },
    {
      name: "calculator",
      path: "/calculator",
      component: () => import("@/views/CalculatorView.vue"),
    },
  ],
});

export default router;
