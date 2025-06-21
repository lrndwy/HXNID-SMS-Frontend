<template>
  <aside class="flex flex-col justify-between w-64 h-screen shadow-lg font-sans bg-gradient-to-b from-white from-[80%] to-green-200">
    <!-- Profile -->
    <div>
      <div class="flex flex-col items-center py-6">
        <img src="/src/assets/image/orang.svg" alt="profile" class="w-16 h-16 rounded-full border-4 border-gray-100 shadow-md" />
        <div class="mt-3 text-center">
          <div class="font-bold text-gray-800 capitalize text-lg">{{ userName }}</div>
          <div class="text-xs text-gray-500 lowercase">ui/ux - designer</div>
        </div>
      </div>
      <hr class="mx-4 mb-2" />
      <!-- Menu -->
      <nav class="px-4">
        <div class="text-xs text-gray-400 mb-2 uppercase font-bold tracking-wider px-2">Home</div>
        <a href="/admin/dashboard" :class="getLinkClass('/admin/dashboard')">
          <Home :size="20" />
          <span>Dashboard</span>
        </a>
        
        <div class="text-xs text-gray-400 mt-4 mb-2 uppercase font-bold tracking-wider px-2">Features</div>
        
        <!-- Classroom -->
        <a href="#" :class="getLinkClass('/admin/classroom')">
          <Book :size="20" />
          <span>Classroom</span>
        </a>
        
        <!-- Attendance -->
        <div>
          <div :class="getLinkClass('/admin/attendance')" @click="toggle('attendance')">
            <CalendarCheck :size="20" />
            <span>Attendance</span>
            <span class="ml-auto"> <component :is="open.attendance ? ChevronUp : ChevronDown" :size="18" /> </span>
          </div>
          <div v-if="open.attendance" class="ml-8 my-2 space-y-2 text-gray-600">
            <a href="#" class="flex items-center gap-3 text-sm cursor-pointer hover:text-green-600 font-medium capitalize"><User :size="16" />Teacher</a>
            <a href="#" class="flex items-center gap-3 text-sm cursor-pointer hover:text-green-600 font-medium capitalize"><UserCog :size="16" />Staff</a>
            <a href="#" class="flex items-center gap-3 text-sm cursor-pointer hover:text-green-600 font-medium capitalize"><GraduationCap :size="16" />Student</a>
          </div>
        </div>
        
        <!-- Examination -->
        <a href="#" :class="getLinkClass('/admin/examination')">
          <ClipboardList :size="20" />
          <span>Examination</span>
        </a>
        
        <!-- Announcement -->
        <a href="#" :class="getLinkClass('/admin/announcement')">
          <Megaphone :size="20" />
          <span>Announcement</span>
        </a>

        <!-- Users -->
        <div>
          <div :class="getLinkClass('/admin/users')" @click="toggle('users')">
            <Users :size="20" />
            <span>Users</span>
            <span class="ml-auto"> <component :is="open.users ? ChevronUp : ChevronDown" :size="18" /> </span>
          </div>
          <div v-if="open.users" class="ml-8 my-2 space-y-2 text-gray-600">
            <a href="#" class="flex items-center gap-3 text-sm cursor-pointer hover:text-green-600 font-medium capitalize"><User :size="16" />Teacher</a>
            <a href="#" class="flex items-center gap-3 text-sm cursor-pointer hover:text-green-600 font-medium capitalize"><UserCog :size="16" />Staff</a>
            <a href="#" class="flex items-center gap-3 text-sm cursor-pointer hover:text-green-600 font-medium capitalize"><GraduationCap :size="16" />Student</a>
          </div>
        </div>

        <!-- Payment -->
        <a href="#" :class="getLinkClass('/admin/payment')">
          <CreditCard :size="20" />
          <span>Payment</span>
        </a>
      </nav>
    </div>
    <!-- Logout Button -->
    <div class="px-6 pb-6">
      <hr class="mb-4" />
      <button class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition" @click="logout">Logout</button>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Home, Users, Book, CalendarCheck, Megaphone, CreditCard, User, UserCog, GraduationCap, ChevronDown, ChevronUp, ClipboardList } from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()

const open = ref({ attendance: true, users: true })

let user = {};
try {
  user = JSON.parse(localStorage.getItem('user') || '{}');
} catch (e) {
  console.error("Failed to parse user from localStorage", e);
  user = {}; // Fallback to empty object on error
}
const userName = ref(user.username || user.name || 'User');

function toggle(key) {
  open.value[key] = !open.value[key]
}

const getLinkClass = (path) => {
  const baseClass = "flex items-center gap-3 px-3 py-2 cursor-pointer rounded-lg font-medium capitalize text-base my-1 transition-colors";
  if (route.path === path) {
    return `${baseClass} bg-gray-200 text-gray-900`;
  }
  return `${baseClass} text-gray-600 hover:bg-gray-100 hover:text-gray-900`;
};

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/login')
}
</script>
  