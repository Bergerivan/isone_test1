import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpecView from '../views/SpecView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/spec/:id',
            name: 'spec',
            component: SpecView
        },
        {
            path: '/spec/add',
            name: 'spec-add',
            component: () => import('./../views/SpecAddView.vue')
        }
    ]
})

export default router
