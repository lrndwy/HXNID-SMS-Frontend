import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: () => import('../views/admin/Dashboard.vue')
  },
  {
    path: '/admin/classroom',
    name: 'Classroom',
    component: () => import('../views/admin/Classroom.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 