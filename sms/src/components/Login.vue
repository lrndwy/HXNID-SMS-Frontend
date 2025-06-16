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
  <div class="flex items-center justify-center min-h-screen min-w-screen bg-white">
    <div class="w-[900px] p-12 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-gray-800">Login</h1>
        <p class="mt-2 text-gray-600">Sign in to your account</p>
      </div>
      
      <form @submit.prevent="login" class="space-y-6">
        <div>
          <label for="email" class="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input 
            id="email" 
            type="text" 
            v-model="email" 
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="remember-me" class="block ml-2 text-sm text-gray-700">Remember me</label>
          </div>
          
          <div>
            <a href="#" class="text-sm font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
          </div>
        </div>
        
        <div>
          <button 
            type="submit" 
            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </div>
      </form>
      
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          Don't have an account? 
          <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</template>
