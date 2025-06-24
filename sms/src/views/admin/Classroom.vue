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
          <!-- Statistik -->
          <div class="grid grid-cols-3 gap-6 mb-8">
            <div class="flex flex-col items-center">
              <span class="material-icons text-4xl mb-1">class</span>
              <span class="font-bold text-2xl">230</span>
              <span class="text-gray-500 text-sm">Total Class</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="material-icons text-4xl mb-1">school</span>
              <span class="font-bold text-2xl">230</span>
              <span class="text-gray-500 text-sm">Total Student</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="material-icons text-4xl mb-1">person_outline</span>
              <span class="font-bold text-2xl">230</span>
              <span class="text-gray-500 text-sm">Total Teacher</span>
            </div>
          </div>
          <!-- Grid Card Kelas -->
          <div class="grid grid-cols-3 gap-6">
            <!-- Card Kelas -->
            <div v-for="classroom in classrooms" :key="classroom.name" @click="goToSubject(classroom.name)" class="flex flex-row bg-white border rounded-xl shadow p-0 hover:shadow-lg transition cursor-pointer">
              <div :class="`w-1 bg-${classroom.color}-500 rounded-l-xl`"></div>
              <div class="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <span :class="`text-${classroom.color}-600 font-bold text-lg`">{{ classroom.name }}</span>
                  <p class="text-xs text-gray-500 mt-1">there are : {{ classroom.students }} students</p>
                </div>
                <div class="flex justify-end mt-2">
                  <span class="material-icons text-gray-400">arrow_forward_ios</span>
                </div>
              </div>
            </div>
            <!-- Placeholder Card -->
            <div v-for="i in (9 - classrooms.length)" :key="'ph-' + i" class="bg-gray-200 rounded-xl h-24 animate-pulse"></div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Sidebar from '@/components/admin/Sidebar.vue'
  import { useClassroomStore } from '@/stores/classroom'
  
  const router = useRouter()
  const classroomStore = useClassroomStore()
  
  const classrooms = ref([
    { name: 'XII PPLG 1', students: 25, color: 'green' },
    { name: 'XII PPLG 2', students: 28, color: 'blue' },
    { name: 'XII PPLG 3', students: 26, color: 'red' },
  ])

  function goToSubject(name: string) {
    classroomStore.setClassroom(name)
    router.push('/admin/subject')
  }
  
  </script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>