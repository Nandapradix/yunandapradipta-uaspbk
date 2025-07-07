<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-200 to-emerald-500">
    <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6 text-emerald-700">Login Jamaah Haji</h2>
      <input v-model="username" placeholder="Nama pengguna" class="w-full p-3 mb-4 border rounded-md" />
      <input v-model="password" type="password" placeholder="Kata sandi" class="w-full p-3 mb-6 border rounded-md" />
      <button @click="login" class="w-full bg-emerald-600 text-white p-3 rounded-md hover:bg-emerald-700">Masuk</button>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const username = ref('')
const password = ref('')
const router = useRouter()
const userStore = useUserStore()

function login() {
  if (username.value && password.value) {
    userStore.setUser({
      nama: username.value,
      role: 'admin'
    })
    router.push('/dashboard')
  } else {
    alert('Nama dan password wajib diisi')
  }
}
</script>
