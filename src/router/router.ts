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
      name: "main",
      path: "/main",
      component: () => import("@/views/MainView.vue"),
      children: [
        {
          name: "page1",
          path: "page1",
          component: () => import("@/views/Page1View.vue"),
        },
        {
          name: "page2",
          path: "page2",
          component: () => import("@/views/Page2View.vue"),
        },
      ],
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
      name: "swapi",
      path: "/swapi",
      component: () => import("@/views/SwapiView.vue"),
    },
    {
      name: "counter",
      path: "/counter",
      component: () => import("@/views/DoubleCount.vue"),
    },
  ],
});

export default router;
