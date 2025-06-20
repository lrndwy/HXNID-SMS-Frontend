<template>
  <div style="min-height:100vh; background: linear-gradient(45deg, #ffffff 60%, #a8e6b1 100%);" class="flex">
    <Sidebar/>
    <div class="flex-1 p-6 overflow-auto">
      <!-- Top Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <!-- Staff Card -->
        <div class="bg-white rounded-xl shadow p-5 flex items-center gap-4">
          <div class="bg-green-100 p-3 rounded-full">
            <svg class="w-7 h-7 text-green-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <div>
            <div class="text-xs text-gray-400 font-semibold">STAFF</div>
            <div class="text-2xl font-bold">100</div>
            <div class="text-xs text-gray-400">Male: 55 | Female: 45</div>
          </div>
        </div>
        <!-- Students Card -->
        <div class="bg-white rounded-xl shadow p-5 flex items-center gap-4">
          <div class="bg-blue-100 p-3 rounded-full">
            <svg class="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14c4.418 0 8 1.79 8 4v2H4v-2c0-2.21 3.582-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" /></svg>
          </div>
          <div>
            <div class="text-xs text-gray-400 font-semibold">STUDENTS</div>
            <div class="text-2xl font-bold">308</div>
            <div class="text-xs text-gray-400">Male: 170 | Female: 138</div>
          </div>
        </div>
        <!-- Attendance Card -->
        <div class="bg-white rounded-xl shadow p-5 flex flex-col items-center justify-center">
          <div class="text-xs text-gray-400 font-semibold mb-2">Attendance</div>
          <!-- Donut Chart -->
          <div class="relative flex items-center justify-center mb-2">
            <svg width="80" height="80" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="#f3f4f6" />
              <circle cx="18" cy="18" r="16" fill="none" stroke="#22c55e" stroke-width="4" stroke-dasharray="80 20" stroke-dashoffset="10" />
            </svg>
            <div class="absolute text-xl font-bold">80%</div>
          </div>
          <div class="flex justify-between w-full text-xs text-gray-400">
            <span>Present</span>
            <span>Absent</span>
          </div>
        </div>
      </div>
      <!-- Middle Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <!-- Welcome Card -->
        <div class="md:col-span-2 bg-green-200 rounded-xl flex items-center p-6 gap-4">
          <div class="hidden md:block">
            <img src="/src/assets/image/orang.svg" alt="welcome" class="w-24 h-24" />
          </div>
          <div>
            <div class="text-lg font-bold text-green-800">WELCOME, HANIFTHUR!</div>
            <div class="text-gray-700">Welcome back! We're here to support you on your learning journey. Dive into your classes and keep progressing towards your goals</div>
          </div>
        </div>
        <!-- Calendar -->
        <div class="bg-white rounded-xl shadow p-5">
          <div class="text-xs text-gray-400 font-semibold mb-2">September 2021</div>
          <div class="grid grid-cols-7 gap-1 text-center text-xs text-gray-400 mb-2">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
          </div>
          <div class="grid grid-cols-7 gap-1 text-center">
            <div class="text-gray-300">29</div><div class="text-gray-300">30</div><div>31</div><div>1</div><div>2</div><div>3</div><div>4</div>
            <div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div><div>11</div>
            <div>12</div><div>13</div><div>14</div><div>15</div><div>16</div><div>17</div><div>18</div>
            <div class="bg-green-500 text-white rounded-full">19</div><div>20</div><div>21</div><div>22</div><div>23</div><div>24</div><div>25</div>
            <div>26</div><div>27</div><div>28</div><div>29</div><div>30</div><div class="text-gray-300">1</div><div class="text-gray-300">2</div>
          </div>
        </div>
      </div>
      <!-- Bottom Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Recently Registered Users -->
        <div class="md:col-span-2 bg-white rounded-xl shadow p-5">
          <div class="flex justify-between items-center mb-4">
            <div class="text-md font-bold">Recently registered users</div>
            <a href="#" class="text-xs text-green-500 hover:underline">view all users</a>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full text-xs">
              <thead>
                <tr class="text-left text-gray-400">
                  <th class="py-2 px-2">Name</th>
                  <th class="py-2 px-2">ID</th>
                  <th class="py-2 px-2">Role</th>
                  <th class="py-2 px-2">Gender</th>
                  <th class="py-2 px-2">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-gray-50">
                  <td class="py-2 px-2">ActivEdge Technologies</td>
                  <td class="py-2 px-2">AET154-5671</td>
                  <td class="py-2 px-2">Teacher</td>
                  <td class="py-2 px-2">Male</td>
                  <td class="py-2 px-2">activedgetechnologies@gmail.com</td>
                </tr>
                <tr>
                  <td class="py-2 px-2">ActivEdge Technologies</td>
                  <td class="py-2 px-2">AET154-5671</td>
                  <td class="py-2 px-2">Teacher</td>
                  <td class="py-2 px-2">Male</td>
                  <td class="py-2 px-2">activedgetechnologies@gmail.com</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="py-2 px-2">ActivEdge Technologies</td>
                  <td class="py-2 px-2">AET154-5671</td>
                  <td class="py-2 px-2">Teacher</td>
                  <td class="py-2 px-2">Male</td>
                  <td class="py-2 px-2">activedgetechnologies@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- Upcoming Events -->
        <div class="bg-white rounded-xl shadow p-5">
          <div class="text-md font-bold mb-4">Upcoming events</div>
          <div class="flex gap-2 mb-4">
            <button class="text-xs px-2 py-1 rounded bg-green-500 text-white">All</button>
            <button class="text-xs px-2 py-1 rounded bg-gray-100">Today</button>
            <button class="text-xs px-2 py-1 rounded bg-gray-100">Weekly</button>
            <button class="text-xs px-2 py-1 rounded bg-gray-100">Monthly</button>
          </div>
          <div class="space-y-2">
            <div class="bg-yellow-100 border-l-4 border-yellow-400 p-2 rounded">
              <div class="text-xs font-bold text-yellow-700">Saturday</div>
              <div class="text-xs text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam.</div>
              <div class="text-xs text-gray-400">19/09/2021</div>
            </div>
            <div class="bg-green-100 border-l-4 border-green-400 p-2 rounded">
              <div class="text-xs font-bold text-green-700">Monday</div>
              <div class="text-xs text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam.</div>
              <div class="text-xs text-gray-400">20/09/2021</div>
            </div>
            <div class="bg-red-100 border-l-4 border-red-400 p-2 rounded">
              <div class="text-xs font-bold text-red-700">Saturday</div>
              <div class="text-xs text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam.</div>
              <div class="text-xs text-gray-400">26/09/2021</div>
            </div>
            <div class="bg-gray-100 border-l-4 border-gray-400 p-2 rounded">
              <div class="text-xs font-bold text-gray-700">Other</div>
              <div class="text-xs text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam.</div>
              <div class="text-xs text-gray-400">30/09/2021</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '../../components/admin/Sidebar.vue'
</script>