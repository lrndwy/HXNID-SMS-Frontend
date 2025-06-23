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
            <div v-for="i in 3" :key="i" class="flex flex-row bg-white border rounded-xl shadow p-0 hover:shadow-lg transition">
              <div class="w-1 bg-green-500 rounded-l-xl"></div>
              <div class="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <span class="text-green-600 font-bold text-lg">XII PPLG 1</span>
                  <p class="text-xs text-gray-500 mt-1">there are : 25 students</p>
                </div>
                <div class="flex justify-end mt-2">
                  <span class="material-icons text-gray-400">arrow_forward_ios</span>
                </div>
              </div>
            </div>
            <!-- Placeholder Card -->
            <div v-for="i in 9" :key="'ph-' + i" class="bg-gray-200 rounded-xl h-24"></div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import Sidebar from '../../components/admin/Sidebar.vue'
  
  
  </script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>