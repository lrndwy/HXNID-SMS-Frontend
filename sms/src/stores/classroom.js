import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useClassroomStore = defineStore('classroom', () => {
    const currentClassroomName = ref('');
    function setClassroom(name) {
        currentClassroomName.value = name;
    }
    return { currentClassroomName, setClassroom };
});
//# sourceMappingURL=classroom.js.map