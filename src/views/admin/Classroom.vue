<template>
    <div class="flex h-screen" style="background-color: #f8fafc; background-image: radial-gradient(circle at top right, rgba(34, 197, 94, 0.4), transparent 50%);">
      <Sidebar/>
      <main class="flex-1 p-6 overflow-y-auto">
        <div class="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl w-full p-6 min-h-full">
          <!-- Header & Breadcrumb -->
          <div class="flex items-center gap-4 mb-6">
            <div class="bg-white p-2 rounded-md shadow">
              <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-7-4h6"></path></svg>
            </div>
            <h1 class="text-xl font-bold text-gray-800">Classroom</h1>
          </div>
          <!-- Statistik mirip Figma -->
          <div class="grid grid-cols-3 gap-6 mb-8">
            <div class="flex flex-col items-center bg-white rounded-xl shadow p-4">
              <span class="material-icons text-4xl mb-1">class</span>
              <span class="font-bold text-3xl">{{ isLoading ? '-' : totalClass }}</span>
              <span class="text-gray-700 text-base font-semibold mt-1">Total Class</span>
              <span class="text-gray-400 text-xs">student</span>
            </div>
            <div class="flex flex-col items-center bg-white rounded-xl shadow p-4">
              <span class="material-icons text-4xl mb-1">school</span>
              <span class="font-bold text-3xl">{{ isLoading ? '-' : totalStudent }}</span>
              <span class="text-gray-700 text-base font-semibold mt-1">Total Student</span>
              <span class="text-gray-400 text-xs">student</span>
            </div>
            <div class="flex flex-col items-center bg-white rounded-xl shadow p-4">
              <span class="material-icons text-4xl mb-1">person_outline</span>
              <span class="font-bold text-3xl">{{ isLoading ? '-' : totalTeacher }}</span>
              <span class="text-gray-700 text-base font-semibold mt-1">Total Teacher</span>
              <span class="text-gray-400 text-xs">student</span>
            </div>
          </div>
          <!-- Grid Card Kelas mirip Figma -->
          <div class="grid grid-cols-3 gap-4">
            <!-- Card Kelas -->
            <div v-if="!isLoading && classrooms.length" v-for="classroom in classrooms" :key="classroom.id || classroom.class_name" @click="goToSubject(classroom.class_name)" class="relative flex flex-col bg-white border rounded-xl shadow p-0 hover:shadow-lg transition cursor-pointer min-h-[90px] h-[90px]">
              <div class="absolute left-0 top-0 h-full w-1 bg-green-500 rounded-l-xl"></div>
              <span class="absolute top-2 right-2 material-icons text-gray-400 text-base">arrow_forward_ios</span>
              <div class="flex flex-col flex-1 p-3 pl-5 justify-between h-full">
                <span class="text-green-600 font-bold text-base">{{ classroom.class_name }}</span>
                <p class="text-xs text-gray-500 mt-1">Grade: {{ classroom.grade_level }} | Homeroom: {{ classroom.homeroom_teacher }}</p>
              </div>
            </div>
            <!-- Placeholder Card biar grid rapih -->
            
            
          </div>
          <div v-if="error" class="text-red-500 mt-4">{{ error }}</div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import Sidebar from '@/components/admin/Sidebar.vue'
  import { useClassroomStore } from '@/stores/classroom'
  
  
  const router = useRouter()
  const classroomStore = useClassroomStore()
  
  const classrooms = ref<any[]>([])
  const totalClass = ref(0)
  const totalStudent = ref(0)
  const totalTeacher = ref(0)
  const isLoading = ref(true)
  const error = ref('')

  const API_BASE = import.meta.env.VITE_API_BASE_URL || ''

  async function fetchData() {
    isLoading.value = true
    error.value = ''
    try {
      const token = localStorage.getItem('token')
      if (!token) throw new Error('Token not found, please login again!')
      // Fetch kelas
      const classRes = await fetch(`${API_BASE}/classes/`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      })
      if (!classRes.ok) throw new Error('Gagal fetch kelas')
      const classData = await classRes.json()
      classrooms.value = (classData.results || classData)
      totalClass.value = Array.isArray(classData.results) ? classData.results.length : (classData.length || 0)

      // Fetch users
      const userRes = await fetch(`${API_BASE}/users/`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      })
      if (!userRes.ok) throw new Error('Gagal fetch users')
      const userData = await userRes.json()
      const users = userData.results || userData
      totalTeacher.value = users.filter((u:any) => u.role === 2).length
      totalStudent.value = users.filter((u:any) => u.role === 3).length
    } catch (e:any) {
      error.value = e.message || 'Gagal fetch data'
    } finally {
      isLoading.value = false
    }
  }

  onMounted(fetchData)

  function goToSubject(name: string) {
    classroomStore.setClassroom(name)
    router.push('/admin/subject')
  }
  
  </script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>