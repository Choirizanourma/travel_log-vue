//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'travel.Index_user',
        component: () => import( /* webpackChunkName: "Index_user" */ '@/views/travel/Index_user.vue')
    },
    {
        path: '/create_user',
        name: 'travel.Create_user',
        component: () => import( /* webpackChunkName: "Create_user" */ '@/views/travel/Create_user.vue')
    },
    {
        path: '/edit_user/:id',
        name: 'travel.Edit_user',
        component: () => import( /* webpackChunkName: "Edit_user" */ '@/views/travel/Edit_user.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router