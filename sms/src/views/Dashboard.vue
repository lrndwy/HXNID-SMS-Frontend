<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <button class="bg-blue-500 text-white p-2 rounded-md" @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'DashboardView',
  setup() {
    const router = useRouter()
    
    const logout = () => {
      localStorage.removeItem('token')
      router.push('/login')
    }

    return { logout }
  }
})
</script>

