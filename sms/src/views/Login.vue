<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const loginUrl = `${import.meta.env.VITE_API_BASE_URL}/users/login/`
const login = async () => {
  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })
    
    if (!response.ok) throw new Error('Login failed')
    
    const data = await response.json()
    localStorage.setItem('token', data.token)
    window.location.href = '/dashboard'
    // Handle successful login here
  } catch (error) {
    console.error('Login error:', error)
  }
}
</script>

<template>
  <div class="flex flex-col lg:flex-row min-h-screen min-w-screen bg-white">
    <!-- Image Section - Top on mobile, Right on desktop -->
    <div class="w-full lg:w-1/2 flex items-center justify-center order-first lg:order-last" style="background: linear-gradient(45deg, #ffffff 60%, #a8e6b1 100%);">
      <div class="w-full h-[300px] lg:h-full flex flex-col items-center justify-center">
        <!-- Ilustrasi (2/3 area) -->
        <div class="w-full flex-2 flex items-center justify-center" style="flex:2">
          <!-- Ganti ini dengan <img src=...> atau SVG ilustrasi -->
          <img src="../assets/image/orang.svg" width="404" height="202" alt="orang">
        </div>
        <!-- Logo (1/3 area) -->
        <div class="w-full flex-1 flex items-center justify-center" style="flex:1">
          <!-- Ganti ini dengan <img src=...> logo -->
          <img src="../assets/image/hexa.svg" alt="hexa" width="508">
            
        </div>
      </div>
    </div>

    <!-- Login Form Section - Bottom on mobile, Left on desktop -->
    <div class="w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center order-last lg:order-first">
      <div class="w-full max-w-md">
        <div class="mb-8 text-center">
          <h1 class="text-2xl lg:text-3xl font-semibold text-gray-800">HEXANEST SCHOOL SYSTEM</h1>
          <p class="mt-2 text-gray-600">Welcome Back! Please Enter Your Details!</p>
        </div>
        
        <form @submit.prevent="login" class="space-y-6">
          <div>
            <label for="email" class="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input 
              id="email" 
              type="text" 
              v-model="email" 
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#27ae60] focus:border-[#27ae60]"
              placeholder="Enter your email"
              autocomplete="email"
              required
            />
          </div>
          <div>
            <label for="password" class="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input 
              id="password" 
              type="password" 
              v-model="password" 
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#27ae60] focus:border-[#27ae60]"
              placeholder="Enter your password"
              autocomplete="current-password"
              required
            />
          </div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input 
                id="remember-me" 
                type="checkbox" 
                v-model="rememberMe" 
                class="w-4 h-4 text-[#27ae60] border-gray-300 rounded focus:ring-[#27ae60]"
              />
              <label for="remember-me" class="block ml-2 text-sm text-gray-700">Remember me</label>
            </div>
            
            <div>
              <a href="#" class="text-sm font-medium text-[#27ae60] hover:text-[#219a52]">Forgot password?</a>
            </div>
          </div>
          
          <div>
            <button 
              type="submit" 
              class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#27ae60] border border-transparent rounded-md shadow-sm hover:bg-[#219a52] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#27ae60]"
            >
              Sign in
            </button>
          </div>

          

          
        </form>
        
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Don't have an account? 
            <a href="#" class="font-medium text-[#27ae60] hover:text-[#219a52]">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
