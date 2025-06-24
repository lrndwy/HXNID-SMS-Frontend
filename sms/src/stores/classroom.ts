import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useClassroomStore = defineStore('classroom', () => {
  const currentClassroomName = ref('')

  function setClassroom(name: string) {
    currentClassroomName.value = name
  }

  return { currentClassroomName, setClassroom }
}) 