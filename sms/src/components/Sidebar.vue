<template>
  <aside class="flex flex-col justify-between w-64 h-screen bg-gradient-to-b from-white to-green-100 shadow-lg font-sans">
    <!-- Profile -->
    <div>
      <div class="flex flex-col items-center py-6">
        <img src="../assets/image/orang.svg" alt="profile" class="w-16 h-16 rounded-full border-4 border-white shadow-md" />
        <div class="mt-2 text-center">
          <div class="font-bold text-gray-800 capitalize text-lg">Haniffthur</div>
          <div class="text-xs text-gray-500 lowercase">ui/ux - designer</div>
        </div>
      </div>
      <hr class="mb-2" />
      <!-- Menu -->
      <nav class="px-2">
        <div class="text-xs text-gray-400 mb-2 uppercase font-bold tracking-wider">Home</div>
        <a href="#" class="flex items-center gap-2 px-3 py-2 mb-2 rounded-lg bg-gray-200 text-gray-800 font-semibold capitalize text-base">
          <Home :size="22" />
          <span>Dashboard</span>
        </a>
        <div class="text-xs text-gray-400 mb-2 uppercase font-bold tracking-wider">Fitures</div>
        <!-- Classroom -->
        <div class="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-lg font-medium capitalize text-base">
          <Book :size="22" />
          <span>Classroom</span>
        </div>
        <!-- Attendance -->
        <div>
          <div class="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-lg font-medium capitalize text-base" @click="toggle('attendance')">
            <CalendarCheck :size="22" />
            <span>Attendance</span>
            <span class="ml-auto"> <component :is="open.attendance ? ChevronUp : ChevronDown" :size="18" /> </span>
          </div>
          <div v-if="open.attendance" class="ml-8 mt-1 space-y-1">
            <div class="flex items-center gap-2 text-xs cursor-pointer hover:text-green-600 font-normal capitalize"><User :size="20" />Teacher</div>
            <div class="flex items-center gap-2 text-xs cursor-pointer hover:text-green-600 font-normal capitalize"><UserCog :size="20" />Staff</div>
            <div class="flex items-center gap-2 text-xs cursor-pointer hover:text-green-600 font-normal capitalize"><GraduationCap :size="20" />Student</div>
          </div>
        </div>
        <!-- Examination -->
        <div class="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-lg font-medium capitalize text-base">
          <Book :size="22" />
          <span>Examination</span>
        </div>
        <!-- Announcement -->
        <div class="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-lg font-medium capitalize text-base">
          <Megaphone :size="22" />
          <span>Announcment</span>
        </div>
        <!-- Users -->
        <div>
          <div class="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-lg font-medium capitalize text-base" @click="toggle('users')">
            <Users :size="22" />
            <span>Users</span>
            <span class="ml-auto"> <component :is="open.users ? ChevronUp : ChevronDown" :size="18" /> </span>
          </div>
          <div v-if="open.users" class="ml-8 mt-1 space-y-1">
            <div class="flex items-center gap-2 text-xs cursor-pointer hover:text-green-600 font-normal capitalize"><User :size="20" />Teacher</div>
            <div class="flex items-center gap-2 text-xs cursor-pointer hover:text-green-600 font-normal capitalize"><UserCog :size="20" />Staff</div>
            <div class="flex items-center gap-2 text-xs cursor-pointer hover:text-green-600 font-normal capitalize"><GraduationCap :size="20" />Student</div>
          </div>
        </div>
        <!-- Payment -->
        <div class="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded-lg font-medium capitalize text-base">
          <CreditCard :size="22" />
          <span>Payment</span>
        </div>
      </nav>
    </div>
    <!-- Logout Button -->
    <div class="px-4 pb-6">
      <hr class="mb-4" />
      <button class="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded transition font-semibold uppercase tracking-wider">Logout</button>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Home, Users, Book, CalendarCheck, Megaphone, CreditCard, User, UserCog, GraduationCap, ChevronDown, ChevronUp } from 'lucide-vue-next'

const router = useRouter()
const open = ref({ attendance: true, users: true })

function toggle(key) {
  open.value[key] = !open.value[key]
}

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>
  