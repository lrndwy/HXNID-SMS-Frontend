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
  },
  {
    path: '/admin/attandance/staff',
    name: 'Staff-Attandance',
    component: () => import('../views/admin/attandance/Staff.vue')
  },
  {
    path: '/admin/attandance/student',
    name: 'Student-Attandance',
    component: () => import('../views/admin/attandance/Student.vue')
  },
  {
    path: '/admin/attandance/teacher',
    name: 'Teacher-Attandance',
    component: () => import('../views/admin/attandance/Teacher.vue')
  },
  {
    path: '/admin/subject',
    name: 'admin-subject',
    component: () => import('../views/admin/subject/Subject.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 