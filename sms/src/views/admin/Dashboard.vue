<template>
  <div style="min-height:100vh; background: linear-gradient(45deg, #ffffff 60%, #a8e6b1 100%);" class="flex">
    <Sidebar/>
    <div class="flex items-center justify-center flex-1 p-8">
      <div class="bg-white/30 rounded-2xl shadow-2xl w-full h-full p-8 border border-white/30 backdrop-blur-md">
        <h2 class="text-2xl font-bold mb-4">Welcome, Admin!</h2>
        <p class="text-gray-600">Ini contoh card pake Tailwind. Lo bisa custom isinya sesuka lo.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Sidebar from '../../components/Sidebar.vue'

</script>
text-xs