<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const isLogin = ref(true)
const regName = ref('')
const regEmail = ref('')
const regPassword = ref('')
const regConfirm = ref('')
const loginUrl = `${import.meta.env.VITE_API_BASE_URL}/users/login/`
const registerUrl = `${import.meta.env.VITE_API_BASE_URL}/users/register/`

// const toggleAuth = () => {
//   isLogin.value = !isLogin.value
// }

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
    console.log('LOGIN RESPONSE:', data)
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    window.location.href = '/admin/dashboard'
    // Handle successful login here
  } catch (error) {
    console.error('Login error:', error)
  }
}

const register = async () => {
  try {
    const response = await fetch(registerUrl, {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: regName.value,
        email: regEmail.value,
        password: regPassword.value,
        confirm_password: regConfirm.value
      })
    })
    if (!response.ok) throw new Error('Register failed')
    // Optional: handle response, show success, etc
    alert('Register success!')
    isLogin.value = true
  } catch (error) {
    console.error('Register error:', error)
    alert('Register failed!')
  }
}
</script>

<template>
  <div class="flex flex-col lg:flex-row min-h-screen min-w-screen bg-white overflow-hidden">
    <Transition name="slide" mode="out-in">
      <!-- Image Section -->
      <div 
        :key="isLogin ? 'login-image' : 'signup-image'"
        class="w-full lg:w-1/2 flex items-center justify-center"
        :class="[isLogin ? 'lg:order-last' : 'lg:order-first']"
        style="background: linear-gradient(45deg, #ffffff 60%, #a8e6b1 100%);"
      >
        <div class="w-full h-[300px] lg:h-full flex flex-col items-center justify-center">
          <div class="w-full flex-2 flex items-center justify-center" style="flex:2">
            <img src="../assets/image/orang.svg" width="404" height="202" alt="orang">
          </div>
          <div class="w-full flex-1 flex items-center justify-center" style="flex:1">
            <img src="../assets/image/hexa.svg" alt="hexa" width="508">
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="slide" mode="out-in">
      <!-- Auth Form Section -->
      <div 
        :key="isLogin ? 'login-form' : 'signup-form'"
        class="w-full lg:w-1/2 p-6 lg:p-12 flex items-center justify-center"
        :class="[isLogin ? 'lg:order-first' : 'lg:order-last']"
      >
        <div class="w-full max-w-md">
          <div class="mb-8 text-center">
            <h1 class="text-2xl lg:text-3xl font-semibold text-gray-800">HEXANEST SCHOOL SYSTEM</h1>
            <p class="mt-2 text-gray-600">{{ isLogin ? 'Welcome Back! Please Enter Your Details!' : 'Create Your Account!' }}</p>
          </div>
          <form v-if="isLogin" @submit.prevent="login" class="space-y-6">
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
          <form v-else @submit.prevent="register" class="space-y-6">
            <div>
              <label for="reg-name" class="block mb-1 text-sm font-medium text-gray-700">Name</label>
              <input 
                id="reg-name" 
                type="text" 
                v-model="regName" 
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#27ae60] focus:border-[#27ae60]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label for="reg-email" class="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input 
                id="reg-email" 
                type="email" 
                v-model="regEmail" 
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#27ae60] focus:border-[#27ae60]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label for="reg-password" class="block mb-1 text-sm font-medium text-gray-700">Password</label>
              <input 
                id="reg-password" 
                type="password" 
                v-model="regPassword" 
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#27ae60] focus:border-[#27ae60]"
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <label for="reg-confirm" class="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
              <input 
                id="reg-confirm" 
                type="password" 
                v-model="regConfirm" 
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#27ae60] focus:border-[#27ae60]"
                placeholder="Confirm your password"
                required
              />
            </div>
            <!-- <div>
              <button 
                type="submit" 
                class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#27ae60] border border-transparent rounded-md shadow-sm hover:bg-[#219a52] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#27ae60]"
              >
                Sign up
              </button>
            </div> -->
          </form>
          <!-- <div class="mt-6 text-center">
            <p class="text-sm text-gray-600">
              {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
              <a 
                href="#" 
                @click.prevent="toggleAuth"
                class="font-medium text-[#27ae60] hover:text-[#219a52]"
              >
                {{ isLogin ? 'Sign up' : 'Sign in' }}
              </a>
            </p>
          </div> -->
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media (min-width: 1024px) {
  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(0);
  }
}
</style>
