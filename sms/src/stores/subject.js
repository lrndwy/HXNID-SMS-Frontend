import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useSubjectStore = defineStore('subject', () => {
    const currentSubject = ref(null);
    function setSubject(subject) {
        currentSubject.value = subject;
    }
    return { currentSubject, setSubject };
});
//# sourceMappingURL=subject.js.map