<template>
  <div class="flex h-screen" style="background-color: #f8fafc; background-image: radial-gradient(circle at top right, rgba(34, 197, 94, 0.4), transparent 50%);">
    <Sidebar/>
    <main class="flex-1 p-6 overflow-y-auto">
      <div class="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl w-full p-6 min-h-full">
        
        <div class="flex items-center gap-4 mb-6">
          <div class="bg-white p-2 rounded-md shadow">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-7-4h6"></path></svg>
          </div>
          <h1 class="text-xl font-bold text-gray-800">Dashboard</h1>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Left and Middle Column -->
          <div class="lg:col-span-2 space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <!-- Staff Card -->
              <div class="bg-white rounded-xl shadow p-5 flex items-center gap-4">
                <div class="relative w-20 h-20 flex-shrink-0">
                  <apexchart type="radialBar" width="100%" height="100%" :options="staffChart.chartOptions" :series="staffChart.series"></apexchart>
                  <div class="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                  </div>
                </div>
                <div>
                  <div class="text-sm text-gray-500 font-semibold">STAFF</div>
                  <div class="text-2xl font-bold">100</div>
                  <div class="text-xs text-gray-400">
                    <span class="text-green-500">●</span> MALE (55%)
                  </div>
                </div>
              </div>
              <!-- Students Card -->
              <div class="bg-white rounded-xl shadow p-5 flex items-center gap-4">
                <div class="relative w-20 h-20 flex-shrink-0">
                  <apexchart type="radialBar" width="100%" height="100%" :options="studentChart.chartOptions" :series="studentChart.series"></apexchart>
                  <div class="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 14v5h22v-5" />
                      </svg>
                  </div>
                </div>
                <div>
                  <div class="text-sm text-gray-500 font-semibold">STUDENTS</div>
                  <div class="text-2xl font-bold">308</div>
                   <div class="text-xs text-gray-400">
                    <span class="text-indigo-500">●</span> MALE (55%)
                  </div>
                </div>
              </div>
               <!-- Attendance Card -->
              <div class="bg-white rounded-xl shadow p-5">
                  <div class="flex justify-between items-start">
                      <h3 class="font-semibold text-gray-600">Attendance</h3>
                      <button class="text-gray-400">•••</button>
                  </div>
                   <div class="flex items-center justify-center my-1">
                      <apexchart type="donut" :options="attendanceChart.chartOptions" :series="attendanceChart.series" width="150"></apexchart>
                  </div>
                  <div class="flex justify-between text-xs">
                      <div><span class="text-gray-700 font-bold">●</span> Present</div>
                      <div><span class="text-green-500 font-bold">●</span> Absent</div>
                  </div>
              </div>
            </div>
            <!-- Welcome Card -->
            <div class="bg-green-100 rounded-xl flex items-center p-6 gap-6 shadow" style="background-color: #e0f2f1;">
              <div class="flex-shrink-0 hidden sm:block">
                <img src="/src/assets/image/orang.svg" alt="welcome" class="w-28 h-28" />
              </div>
              <div class="flex-1">
                <h2 class="text-xl font-bold text-green-800 uppercase">WELCOME, {{ userName }}</h2>
                <p class="text-gray-700 mt-1">Welcome back! We're here to support you on your learning journey. Dive into your classes and keep progressing towards your goals</p>
              </div>
            </div>
             <!-- Recently Registered Users -->
            <div class="bg-white rounded-xl shadow p-5">
              <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold text-gray-800">Recently registered users</h3>
                <a href="#" class="text-sm text-green-500 hover:underline">View all users</a>
              </div>
              <div class="overflow-x-auto">
                <table class="min-w-full text-sm">
                  <thead>
                    <tr class="text-left text-gray-500">
                      <th class="py-2 px-3 font-semibold">Name</th>
                      <th class="py-2 px-3 font-semibold">ID</th>
                      <th class="py-2 px-3 font-semibold">Role</th>
                      <th class="py-2 px-3 font-semibold">Gender</th>
                      <th class="py-2 px-3 font-semibold">Email</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr v-for="i in 3" :key="i" class="hover:bg-gray-50">
                      <td class="py-2 px-3">ActivEdge Technologies</td>
                      <td class="py-2 px-3">AET154-5671</td>
                      <td class="py-2 px-3">Teacher</td>
                      <td class="py-2 px-3">Male</td>
                      <td class="py-2 px-3">activedgetechnologies@g...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Right Column -->
          <div class="space-y-6">
            <!-- Calendar -->
            <div class="bg-white rounded-xl shadow p-5">
              <div class="flex justify-between items-center mb-4">
                  <button @click="prevMonth" class="text-gray-500 hover:text-gray-700">‹</button>
                  <h3 class="font-semibold text-gray-800">{{ currentMonthName }} {{ currentYear }}</h3>
                  <button @click="nextMonth" class="text-gray-500 hover:text-gray-700">›</button>
              </div>
              <div class="grid grid-cols-7 gap-2 text-center text-xs text-gray-500 mb-2">
                <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
              </div>
               <div class="grid grid-cols-7 gap-1 text-center text-sm">
                  <div v-for="(day, index) in calendarDays" :key="index"
                      class="p-1"
                      :class="{ 'text-gray-300': !day.isCurrentMonth }">
                      <div class="w-7 h-7 flex items-center justify-center mx-auto rounded-full"
                          :class="{ 'bg-red-500 text-white': day.isToday, 'hover:bg-gray-100': day.isCurrentMonth && !day.isToday }">
                          {{ day.dayNumber }}
                      </div>
                  </div>
              </div>
            </div>
            <!-- Upcoming Events -->
            <div class="bg-white rounded-xl shadow p-5">
              <h3 class="font-bold text-gray-800 mb-4">Upcoming events</h3>
              <div class="flex space-x-2 mb-4">
                <button class="text-xs px-3 py-1 rounded-lg bg-green-500 text-white">All</button>
                <button class="text-xs px-3 py-1 rounded-lg bg-gray-200 text-gray-700">Today</button>
                <button class="text-xs px-3 py-1 rounded-lg bg-gray-200 text-gray-700">Weekly</button>
                <button class="text-xs px-3 py-1 rounded-lg bg-gray-200 text-gray-700">Monthly</button>
              </div>
              <div class="space-y-3">
                 <div class="bg-yellow-100 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                  <div class="text-sm font-bold text-yellow-800">Saturday</div>
                  <div class="text-xs text-gray-600">Lorem ipsum dolor sit amet...</div>
                </div>
                 <div class="bg-green-100 border-l-4 border-green-400 p-3 rounded-r-lg">
                  <div class="text-sm font-bold text-green-800">Saturday</div>
                  <div class="text-xs text-gray-600">Lorem ipsum dolor sit amet...</div>
                </div>
                 <div class="bg-red-100 border-l-4 border-red-400 p-3 rounded-r-lg">
                  <div class="text-sm font-bold text-red-800">Saturday</div>
                  <div class="text-xs text-gray-600">Lorem ipsum dolor sit amet...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Sidebar from '../../components/admin/Sidebar.vue'
import VueApexCharts from 'vue3-apexcharts';

const user = JSON.parse(localStorage.getItem('user') || '{}')
const userName = ref(user.username || user.name || 'User')

const staffChart = ref({
  series: [55],
  chartOptions: {
    chart: { type: 'radialBar' },
    plotOptions: {
      radialBar: {
        hollow: { margin: 15, size: '60%' },
        track: { background: '#f0f0f0' },
        dataLabels: { show: false },
      },
    },
    colors: ['#22c55e'],
    stroke: { lineCap: 'round' },
  },
});

const studentChart = ref({
  series: [55],
  chartOptions: {
    chart: { type: 'radialBar' },
    plotOptions: {
      radialBar: {
        hollow: { margin: 15, size: '60%' },
        track: { background: '#f0f0f0' },
        dataLabels: { show: false },
      },
    },
    colors: ['#6366f1'],
     stroke: { lineCap: 'round' },
  },
});

const attendanceChart = ref({
  series: [80, 20],
  chartOptions: {
    chart: {
      type: 'donut',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
           labels: {
            show: true,
            total: {
              show: true,
              label: '',
              formatter: () => '80%'
            }
          }
        }
      }
    },
    colors: ['#34D399', '#A78BFA'],
    labels: ['Present', 'Absent'],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    }
  }
});

const currentDate = ref(new Date());
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentMonthName = computed(() => monthNames[currentDate.value.getMonth()]);
const currentYear = computed(() => currentDate.value.getFullYear());

const calendarDays = computed(() => {
    const year = currentDate.value.getFullYear();
    const month = currentDate.value.getMonth();
    const today = new Date();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const daysInMonth = lastDayOfMonth.getDate();
    const startDayOfWeek = firstDayOfMonth.getDay();

    const days = [];

    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();
    for (let i = startDayOfWeek; i > 0; i--) {
        days.push({ dayNumber: lastDayOfPrevMonth - i + 1, isCurrentMonth: false, isToday: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === i;
        days.push({ dayNumber: i, isCurrentMonth: true, isToday: isToday });
    }

    const gridCells = 42; // 6 weeks * 7 days
    const nextMonthDays = gridCells - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
        days.push({ dayNumber: i, isCurrentMonth: false, isToday: false });
    }
    
    return days.slice(0,35);
});

const prevMonth = () => {
  currentDate.value = new Date(currentDate.value.setMonth(currentDate.value.getMonth() - 1));
};

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.setMonth(currentDate.value.getMonth() + 1));
};

const apexchart = VueApexCharts;

</script>