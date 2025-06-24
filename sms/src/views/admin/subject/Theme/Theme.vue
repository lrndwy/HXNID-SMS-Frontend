<template>
  <div class="flex h-screen" style="background-color: #f8fafc; background-image: radial-gradient(circle at top right, rgba(34, 197, 94, 0.4), transparent 50%);">
    <Sidebar />
    <main class="flex-1 p-6 overflow-y-auto">
      <div class="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl w-full p-6 min-h-full">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-4 mb-6">
          <div class="bg-white p-2 rounded-md shadow">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-7-4h6"></path></svg>
          </div>
          <div class="flex items-center text-xl font-bold text-gray-800">
            <router-link to="/admin/classroom" class="hover:underline">Classroom</router-link>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <router-link :to="{ name: 'admin-subject' }" class="hover:underline">{{ classroomName }}</router-link>
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span>{{ subject?.name }}</span>
          </div>
        </div>

        <!-- Header -->
        <div class="mb-6">
          <button @click="router.back()" class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Daftar Mata Pelajaran
          </button>
          <h1 class="text-3xl font-bold text-gray-800">{{ subject?.name }}</h1>
          <div class="flex items-center space-x-4 text-sm text-gray-500 mt-2">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <span>{{ subject?.teacher }}</span>
            </div>
            <div class="flex items-center">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span>{{ subject?.class }}</span>
            </div>
             <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round"  stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>
               <span>Semester Genap</span>
            </div>
            <span class="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">{{ subject?.status }}</span>
          </div>
        </div>
        
        <!-- Tabs -->
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <button @click="activeTab = 'topik'" :class="[activeTab === 'topik' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']">
              Topik
            </button>
            <button @click="activeTab = 'tugas'" :class="[activeTab === 'tugas' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']">
              Tugas
            </button>
            <button @click="activeTab = 'pengaturan'" :class="[activeTab === 'pengaturan' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']">
              Pengaturan
            </button>
          </nav>
        </div>

        <!-- Topik View -->
        <div v-if="activeTab === 'topik'" class="mt-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-gray-800">Daftar Topik</h2>
            <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Tambah Topik
            </button>
          </div>

          <div class="space-y-4">
            <div v-for="topic in topics" :key="topic.id" class="bg-white rounded-lg p-5 border border-gray-200/80">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-bold text-gray-800 text-lg">{{ topic.title }}</h3>
                  <p class="text-sm text-gray-600 mt-1 max-w-2xl">{{ topic.description }}</p>
                  <p class="text-xs text-gray-400 mt-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Dibuat pada {{ topic.date }}
                  </p>
                </div>
                <div class="flex items-center space-x-2 text-gray-400">
                   <button class="hover:text-green-600 p-1.5 rounded-full hover:bg-gray-100">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"></path></svg>
                  </button>
                  <button class="hover:text-red-600 p-1.5 rounded-full hover:bg-gray-100">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
              </div>
              <div class="flex items-center space-x-2 mt-4">
                <span class="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{{ topic.materialCount }} Materi</span>
                <span class="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">{{ topic.assignmentCount }} Tugas</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tugas View -->
        <div v-if="activeTab === 'tugas'" class="mt-6">
          <div class="flex flex-wrap gap-4 justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-gray-800">Daftar Tugas</h2>
            <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Tambah Tugas
            </button>
          </div>

          <div class="flex flex-wrap gap-4 justify-between items-center mb-6">
            <div class="relative w-full sm:w-auto sm:max-w-xs">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input type="text" placeholder="Cari tugas..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
            </div>
            <div class="flex space-x-4">
              <select class="border border-gray-300 rounded-lg text-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 bg-white">
                <option>Semua Status</option>
              </select>
              <select class="border border-gray-300 rounded-lg text-sm px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 bg-white">
                <option>Semua Topik</option>
              </select>
            </div>
          </div>
          
          <div class="space-y-4">
            <div v-for="assignment in assignments" :key="assignment.id" class="bg-white rounded-lg p-5 border border-gray-200/80 transition-shadow hover:shadow-md">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-bold text-gray-800 text-lg">{{ assignment.title }}</h3>
                  <p class="text-sm text-gray-600 mt-1 max-w-3xl">{{ assignment.description }}</p>
                </div>
                <span :class="[assignment.status === 'Aktif' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800', 'text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap']">{{ assignment.status }}</span>
              </div>
              <div class="flex flex-wrap gap-x-6 gap-y-2 items-center text-sm text-gray-500 mt-3">
                 <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span>Deadline: {{ assignment.deadline }}</span>
                  </div>
                   <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
                    <span>Topik: {{ assignment.topic }}</span>
                  </div>
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                    <span>{{ assignment.submissions }} Submission</span>
                  </div>
              </div>
              <div class="border-t border-gray-100 mt-4 pt-4 flex justify-end items-center space-x-4 text-sm font-medium">
                  <button class="text-gray-500 hover:text-blue-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    <span>Lihat Detail</span>
                  </button>
                  <button class="text-gray-500 hover:text-green-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    <span>Edit</span>
                  </button>
                  <button class="text-red-500 hover:text-red-700 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    <span>Hapus</span>
                  </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Pengaturan View -->
        <div v-if="activeTab === 'pengaturan'" class="mt-8">
          <h2 class="text-xl font-bold text-gray-800 mb-6">Pengaturan Mata Pelajaran</h2>
          
          <!-- Informasi Dasar -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">Informasi Dasar</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="subjectName" class="block text-sm font-medium text-gray-600 mb-1">Nama Mata Pelajaran</label>
                <input type="text" id="subjectName" :value="subject?.name" class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 bg-gray-50">
              </div>
              <div>
                <label for="className" class="block text-sm font-medium text-gray-600 mb-1">Kelas</label>
                <input type="text" id="className" value="Kelas 11" class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 bg-gray-50">
              </div>
              <div>
                <label for="semester" class="block text-sm font-medium text-gray-600 mb-1">Semester</label>
                <input type="text" id="semester" value="Semester Genap" class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 bg-gray-50">
              </div>
              <div>
                <label for="teacherName" class="block text-sm font-medium text-gray-600 mb-1">Guru Pengajar</label>
                <input type="text" id="teacherName" :value="subject?.teacher" class="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 bg-gray-50">
              </div>
            </div>
          </div>

          <!-- Status -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Status</h3>
            <div class="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div>
                <h4 class="font-medium text-gray-800">Status Mata Pelajaran</h4>
                <p class="text-sm text-gray-500">Aktifkan atau nonaktifkan mata pelajaran ini</p>
              </div>
              <label for="toggle-status" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" :checked="subject?.status === 'Aktif'" id="toggle-status" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600"></div>
                <div class="absolute left-1 top-1 bg-white border-gray-300 border rounded-full h-4 w-4 transition-all peer-checked:translate-x-full peer-checked:border-white"></div>
              </label>
            </div>
          </div>

          <!-- Pengaturan Akses -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">Pengaturan Akses</h3>
            <div class="space-y-4">
              <div v-for="permission in permissions" :key="permission.id" class="flex items-start">
                <div class="flex items-center h-5">
                  <input :id="permission.id" type="checkbox" :checked="permission.checked" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                </div>
                <div class="ml-3 text-sm">
                  <label :for="permission.id" class="font-medium text-gray-700">{{ permission.label }}</label>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Zona Berbahaya -->
          <div class="mb-8">
             <h3 class="text-lg font-semibold text-red-600 mb-4">Zona Berbahaya</h3>
             <div class="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center justify-between">
               <div>
                 <h4 class="font-bold text-red-800">Hapus Mata Pelajaran</h4>
                 <p class="text-sm text-red-700 mt-1">Tindakan ini tidak dapat dibatalkan. Semua data akan dihapus secara permanen.</p>
               </div>
               <button class="bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white font-bold py-2 px-4 rounded-lg text-sm">
                 Hapus
               </button>
             </div>
          </div>

          <!-- Action Button -->
          <div class="flex justify-end">
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg">
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useClassroomStore } from '@/stores/classroom'
import { useSubjectStore } from '@/stores/subject'
import Sidebar from '@/components/admin/Sidebar.vue'

const router = useRouter()
const classroomStore = useClassroomStore()
const subjectStore = useSubjectStore()

const classroomName = computed(() => classroomStore.currentClassroomName)
const subject = computed(() => subjectStore.currentSubject)

const activeTab = ref('topik')

onMounted(() => {
  if (!classroomName.value || !subject.value) {
    router.push('/admin/classroom')
  }
})

const topics = ref([
  {
    id: 1,
    title: 'Persamaan Kuadrat',
    description: 'Memahami konsep persamaan kuadrat dan metode penyelesaiannya.',
    date: '15 Mei 2025',
    materialCount: 'Materi',
    assignmentCount: '3 Tugas'
  },
  {
    id: 2,
    title: 'Fungsi Trigonometri',
    description: 'Mempelajari fungsi sinus, cosinus, dan tangen beserta aplikasinya.',
    date: '8 Mei 2025',
    materialCount: 'Materi',
    assignmentCount: '2 Tugas'
  },
  {
    id: 3,
    title: 'Matriks',
    description: 'Pengenalan matriks, operasi matriks, dan determinan.',
    date: '1 Mei 2025',
    materialCount: 'Materi',
    assignmentCount: '0 Tugas'
  },
  {
    id: 4,
    title: 'Limit Fungsi',
    description: 'Konsep limit fungsi dan teknik penyelesaian limit.',
    date: '22 April 2025',
    materialCount: 'Materi',
    assignmentCount: '1 Tugas'
  }
])

const assignments = ref([
  {
    id: 1,
    title: 'Latihan Persamaan Kuadrat',
    description: 'Menyelesaikan 10 soal persamaan kuadrat menggunakan berbagai metode.',
    deadline: '30 Mei 2025',
    topic: 'Persamaan Kuadrat',
    submissions: 15,
    status: 'Aktif'
  },
  {
    id: 2,
    title: 'Quiz Fungsi Trigonometri',
    description: 'Quiz online tentang fungsi trigonometri dasar dan identitas trigonometri.',
    deadline: '25 Mei 2025',
    topic: 'Fungsi Trigonometri',
    submissions: 20,
    status: 'Aktif'
  },
  {
    id: 3,
    title: 'Proyek Aplikasi Persamaan Kuadrat',
    description: 'Membuat proyek aplikasi persamaan kuadrat dalam kehidupan sehari-hari.',
    deadline: '5 Juni 2025',
    topic: 'Persamaan Kuadrat',
    submissions: 10,
    status: 'Aktif'
  },
  {
    id: 4,
    title: 'Latihan Limit Fungsi',
    description: 'Menyelesaikan soal-soal limit fungsi aljabar dan trigonometri.',
    deadline: '20 Mei 2025',
    topic: 'Limit Fungsi',
    submissions: 18,
    status: 'Selesai'
  }
])

const permissions = ref([
  { id: 'perm1', label: 'Siswa dapat melihat materi', checked: true },
  { id: 'perm2', label: 'Siswa dapat mengunduh materi', checked: true },
  { id: 'perm3', label: 'Siswa dapat memberikan komentar', checked: true },
  { id: 'perm4', label: 'Siswa dapat mengumpulkan tugas terlambat', checked: false },
])
</script>