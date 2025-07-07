import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  const setUser = (newUser) => {
    user.value = newUser
  }

  const clearUser = () => {
    user.value = null
  }

  const isLoggedIn = computed(() => user.value !== null)
  const getUserName = computed(() => user.value?.nama || '')

  return {
    user,
    setUser,
    clearUser,
    isLoggedIn,
    getUserName,
  }
})
