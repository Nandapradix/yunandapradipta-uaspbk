<template>
  <div>
    <!-- Navigasi -->
    <nav
      v-if="showNav"
      class="bg-emerald-600 text-white px-6 py-4 flex items-center justify-between shadow"
    >
      <div class="flex gap-6 font-semibold">
        <router-link to="/dashboard" class="hover:underline">Dashboard</router-link>
        <router-link to="/data-pengguna" class="hover:underline">Data Pengguna</router-link>
        <router-link to="/laporan" class="hover:underline">Laporan</router-link>
        <router-link to="/informasi-haji" class="hover:underline">Informasi Haji</router-link>
      </div>
      <div>
        <router-link
          to="/login"
          class="bg-white text-emerald-600 px-3 py-1 rounded hover:bg-gray-100"
        >
          Logout
        </router-link>
      </div>
    </nav>

    <!-- Halaman utama -->
    <main>
      <router-view />
    </main>
  </div>
</template>


<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showNav = computed(() => route.path !== '/login')
</script>
