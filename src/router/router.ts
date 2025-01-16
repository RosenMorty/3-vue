import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            name: 'main',
            path: '/main',
            component: () => import('@/views/MainView.vue'),
            children: [
                {
                    name: 'sales',
                    path: 'sales',
                    component: () => import('@/views/MainSalesView.vue'),
                },
                {
                    name: 'catalog',
                    path: 'catalog',
                    component: () => import('@/views/MainCatalogView.vue'),
                }
            ]
        },
        {
            name: 'settings',
            path: '/settings',
            component: () => import('@/views/SettingsView.vue')
        },
    ]
})

export default router