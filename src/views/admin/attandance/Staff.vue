<template>
  <div class="flex h-screen bg-[#F8FAFC]">
    <Sidebar />
    <main class="flex-1 p-6 overflow-y-auto">
      <div class="bg-white rounded-2xl shadow-md w-full p-6 min-h-full">
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <div>
            <nav class="text-sm text-gray-500 mb-1" aria-label="Breadcrumb">
              <ol class="list-none p-0 inline-flex">
                <li class="flex items-center">
                  <Home class="w-4 h-4 mr-2" />
                  <a href="#" class="hover:underline">Attandance</a>
                </li>
                <li class="flex items-center mx-2">
                  <ChevronRight class="w-4 h-4" />
                </li>
                <li class="flex items-center text-gray-700 font-medium">
                  Staff
                </li>
              </ol>
            </nav>
            <h1 class="text-3xl font-bold text-gray-800">Dashboard Kehadiran Staf</h1>
            <p class="text-gray-500">Pantau kehadiran staf secara real-time</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="flex items-center border rounded-lg px-3 py-2">
              <Calendar class="w-5 h-5 text-gray-500 mr-2" />
              <span class="text-gray-700">Jumat, 20 Juni 2025</span>
            </div>
            <div class="flex items-center space-x-1 border rounded-lg p-1">
              <button class="px-3 py-1 rounded-md bg-green-500 text-white text-sm">Hari</button>
              <button class="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100 text-sm">Minggu</button>
              <button class="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100 text-sm">Bulan</button>
              <button class="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100 text-sm">Custom</button>
            </div>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <!-- Total Kehadiran -->
          <div class="bg-white p-5 rounded-xl border border-gray-200 flex items-start justify-between">
            <div>
              <p class="text-gray-500 text-sm">Total Kehadiran</p>
              <p class="text-3xl font-bold text-gray-800">18 <span class="text-lg font-normal text-gray-400">/ 20 staf</span></p>
              <p class="text-sm text-green-500 flex items-center mt-1">
                <ArrowUp class="w-4 h-4 mr-1" />
                1.5% <span class="text-gray-400 ml-1">dari minggu lalu</span>
              </p>
            </div>
            <div class="p-2 bg-blue-100 rounded-lg">
              <Users class="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <!-- Staf Check-in -->
          <div class="bg-white p-5 rounded-xl border border-gray-200 flex items-start justify-between">
            <div>
              <p class="text-gray-500 text-sm">Staf Check-in</p>
              <p class="text-3xl font-bold text-gray-800">17 <span class="text-lg font-normal text-gray-400">/ 20 staf</span></p>
              <p class="text-sm text-green-500 flex items-center mt-1">
                <ArrowUp class="w-4 h-4 mr-1" />
                2.5% <span class="text-gray-400 ml-1">dari kemarin</span>
              </p>
            </div>
            <div class="p-2 bg-green-100 rounded-lg">
              <CheckSquare class="w-6 h-6 text-green-500" />
            </div>
          </div>
          <!-- Ketidakhadiran -->
          <div class="bg-white p-5 rounded-xl border border-gray-200 flex items-start justify-between">
            <div>
              <p class="text-gray-500 text-sm">Ketidakhadiran</p>
              <p class="text-3xl font-bold text-gray-800">2 <span class="text-lg font-normal text-gray-400">staf</span></p>
              <p class="text-sm text-red-500 flex items-center mt-1">
                <ArrowUp class="w-4 h-4 mr-1" />
                0.5% <span class="text-gray-400 ml-1">dari minggu lalu</span>
              </p>
            </div>
            <div class="p-2 bg-red-100 rounded-lg">
              <UserX class="w-6 h-6 text-red-500" />
            </div>
          </div>
          <!-- Persentase Kehadiran -->
          <div class="bg-white p-5 rounded-xl border border-gray-200 flex items-start justify-between">
            <div>
              <p class="text-gray-500 text-sm">Persentase Kehadiran</p>
              <p class="text-3xl font-bold text-gray-800">90.0%</p>
              <p class="text-sm text-green-500 flex items-center mt-1">
                <ArrowUp class="w-4 h-4 mr-1" />
                1.0% <span class="text-gray-400 ml-1">dari bulan lalu</span>
              </p>
            </div>
            <div class="p-2 bg-purple-100 rounded-lg">
              <Percent class="w-6 h-6 text-purple-500" />
            </div>
          </div>
        </div>

        <!-- Charts and Recent Activity -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Left Column: Trend Chart and Staff List -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Trend Chart -->
            <div class="bg-white p-6 rounded-xl border border-gray-200">
              <div class="flex justify-between items-center mb-4">
                <h2 class="font-bold text-lg text-gray-800">Tren Kehadiran</h2>
                <div class="flex items-center space-x-2">
                  <button class="flex items-center text-sm text-gray-600 border px-3 py-1.5 rounded-lg hover:bg-gray-50">
                    <Download class="w-4 h-4 mr-2" />
                    Ekspor
                  </button>
                  <button class="flex items-center text-sm text-gray-600 border px-3 py-1.5 rounded-lg hover:bg-gray-50">
                    Semua Status <ChevronDown class="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
              <div id="chart">
                <apexchart type="line" height="350" :options="lineChartOptions" :series="lineChartSeries"></apexchart>
              </div>
            </div>

            <!-- Staff List Table -->
            <div class="bg-white p-6 rounded-xl border border-gray-200">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="font-bold text-lg text-gray-800">Daftar Kehadiran Staf</h2>
                    <div class="flex items-center space-x-2">
                        <div class="relative">
                            <Search class="w-5 h-5 text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                            <input type="text" placeholder="Cari staf..." class="border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500">
                        </div>
                        <button class="flex items-center text-sm text-gray-600 border px-3 py-2 rounded-lg hover:bg-gray-50">
                            Filter Status <ChevronDown class="w-4 h-4 ml-1" />
                        </button>
                    </div>
                </div>
                <!-- table -->
                <div class="overflow-x-auto">
                  <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3">Nama Staf</th>
                        <th scope="col" class="px-6 py-3">Jam Masuk</th>
                        <th scope="col" class="px-6 py-3">Jam Keluar</th>
                        <th scope="col" class="px-6 py-3">Status</th>
                        <th scope="col" class="px-6 py-3">Keterangan</th>
                        <th scope="col" class="px-6 py-3">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="staff in staffs" :key="staff.name" class="bg-white border-b">
                          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="w-10 h-10 rounded-full mr-3 flex items-center justify-center text-white font-bold" :class="staff.avatarBg">
                                {{ staff.initials }}
                              </div>
                              <div>
                                <div class="font-bold">{{ staff.name }}</div>
                                <div class="text-xs text-gray-500">{{ staff.role }}</div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4">{{ staff.checkIn }}</td>
                          <td class="px-6 py-4">{{ staff.checkOut }}</td>
                          <td class="px-6 py-4">
                            <span class="px-2 py-1 rounded-full text-xs font-medium" :class="staff.statusColor">{{ staff.status }}</span>
                          </td>
                          <td class="px-6 py-4">{{ staff.note }}</td>
                          <td class="px-6 py-4">
                            <a href="#" class="font-medium text-green-600 hover:underline">Detail</a>
                          </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- pagination -->
                <div class="flex justify-between items-center mt-4">
                  <span class="text-sm text-gray-500">Menampilkan 1-5 dari 20 staf</span>
                  <div class="flex items-center space-x-1">
                    <button class="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50" disabled>
                      <ChevronLeft class="w-5 h-5" />
                    </button>
                    <button class="px-4 py-2 text-sm rounded-md bg-green-500 text-white">1</button>
                    <button class="px-4 py-2 text-sm rounded-md hover:bg-gray-100 text-gray-600">2</button>
                    <button class="p-2 rounded-md hover:bg-gray-100">
                      <ChevronRight class="w-5 h-5" />
                    </button>
                  </div>
                </div>
            </div>
          </div>

          <!-- Right Column: Status Summary and Recent Activity -->
          <div class="space-y-6">
            <!-- Status Summary -->
            <div class="bg-white p-6 rounded-xl border border-gray-200">
              <div class="flex justify-between items-center mb-4">
                  <h2 class="font-bold text-lg text-gray-800">Ringkasan Status</h2>
                   <button class="flex items-center text-sm text-gray-600 hover:bg-gray-50 p-1 rounded-md">
                    <RefreshCw class="w-4 h-4 mr-1" /> Refresh
                  </button>
              </div>
              <apexchart type="donut" height="250" :options="donutChartOptions" :series="donutChartSeries"></apexchart>
               <div class="mt-4 space-y-2 text-sm">
                <div class="flex justify-between items-center">
                  <span class="flex items-center"><span class="w-3 h-3 rounded-full bg-green-500 mr-2"></span>Hadir</span>
                  <span class="font-medium text-gray-700">18 <span class="text-gray-400">(90.0%)</span></span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="flex items-center"><span class="w-3 h-3 rounded-full bg-orange-400 mr-2"></span>Izin</span>
                  <span class="font-medium text-gray-700">1 <span class="text-gray-400">(5.0%)</span></span>
                </div>
                 <div class="flex justify-between items-center">
                  <span class="flex items-center"><span class="w-3 h-3 rounded-full bg-red-500 mr-2"></span>Sakit</span>
                  <span class="font-medium text-gray-700">1 <span class="text-gray-400">(5.0%)</span></span>
                </div>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="bg-white p-6 rounded-xl border border-gray-200">
               <div class="flex justify-between items-center mb-4">
                  <h2 class="font-bold text-lg text-gray-800">Aktivitas Terbaru</h2>
                   <a href="#" class="text-sm text-green-600 hover:underline">Lihat Semua</a>
              </div>
              <div class="space-y-4">
                <div class="flex">
                  <div class="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 mr-3 flex items-center justify-center">
                      <LogIn class="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-800"><span class="font-bold">Budi Santoso</span> melakukan check-in</p>
                    <p class="text-xs text-gray-500">Check-in pada pukul 08:05:15</p>
                     <span class="text-xs text-gray-400">15 menit yang lalu</span>
                  </div>
                </div>
                 <div class="flex">
                  <div class="w-10 h-10 rounded-full bg-orange-100 flex-shrink-0 mr-3 flex items-center justify-center">
                      <FileText class="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-800"><span class="font-bold">Citra Lestari</span> mengajukan izin</p>
                    <p class="text-xs text-gray-500">Izin tidak hadir karena urusan pribadi</p>
                    <span class="text-xs text-gray-400">1 jam yang lalu</span>
                  </div>
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
import { ref } from 'vue';
import Sidebar from '../../../components/admin/Sidebar.vue'
import { Home, ChevronRight, Calendar, Users, ArrowUp, CheckSquare, UserX, Percent, Download, ChevronDown, Search, ChevronLeft, RefreshCw, LogIn, FileText } from 'lucide-vue-next';
import VueApexCharts from 'vue3-apexcharts';

const apexchart = VueApexCharts;

const lineChartOptions = ref({
  chart: {
    height: 350,
    type: 'line',
    toolbar: { show: false },
    zoom: { enabled: false }
  },
  colors: ['#22c55e', '#f97316', '#ef4444'],
  dataLabels: { enabled: false },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  xaxis: {
    categories: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
  },
  yaxis: {
    min: 0,
    max: 25,
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
  },
  grid: {
    borderColor: '#f1f1f1',
  }
});

const lineChartSeries = ref([
  {
    name: "Hadir",
    data: [18, 17, 18, 19, 18, 17, 16]
  },
  {
    name: "Izin",
    data: [1, 2, 1, 0, 1, 1, 2]
  },
  {
    name: "Sakit",
    data: [1, 1, 1, 1, 1, 2, 2]
  }
]);

const donutChartOptions = ref({
  chart: {
    type: 'donut',
  },
  labels: ['Hadir', 'Izin', 'Sakit'],
  colors: ['#22c55e', '#f97316', '#ef4444'],
  legend: { show: false },
  dataLabels: { enabled: false },
  plotOptions: {
    pie: {
      donut: {
        size: '75%',
        labels: {
          show: true,
          total: {
            show: true,
            label: 'Total Hadir',
            formatter: () => '90.0%'
          }
        }
      }
    }
  }
});

const donutChartSeries = ref([18, 1, 1]);

const staffs = ref([
    { name: 'Andi Wijaya', initials: 'AW', role: 'Administrasi', checkIn: '08:00:12', checkOut: '17:05:30', status: 'Hadir', note: 'Tepat waktu', statusColor: 'bg-green-100 text-green-800', avatarBg: 'bg-blue-500' },
    { name: 'Budi Santoso', initials: 'BS', role: 'Keuangan', checkIn: '08:05:15', checkOut: '17:00:00', status: 'Hadir', note: 'Tepat waktu', statusColor: 'bg-green-100 text-green-800', avatarBg: 'bg-pink-500' },
    { name: 'Citra Lestari', initials: 'CL', role: 'Perpustakaan', checkIn: '-', checkOut: '-', status: 'Izin', note: 'Urusan pribadi', statusColor: 'bg-orange-100 text-orange-800', avatarBg: 'bg-green-500' },
    { name: 'Doni Firmansyah', initials: 'DF', role: 'Keamanan', checkIn: '-', checkOut: '-', status: 'Sakit', note: 'Flu', statusColor: 'bg-red-100 text-red-800', avatarBg: 'bg-yellow-500' },
    { name: 'Eka Putri', initials: 'EP', role: 'Kebersihan', checkIn: '07:55:45', checkOut: '16:50:10', status: 'Hadir', note: 'Tepat waktu', statusColor: 'bg-green-100 text-green-800', avatarBg: 'bg-purple-500' },
]);

</script>