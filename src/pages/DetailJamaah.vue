<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-emerald-700 mb-4">Detail Jamaah</h1>

    <div v-if="jamaah" class="bg-white shadow p-6 rounded-lg space-y-4">
      <div class="flex items-center space-x-4">
        <img
          :src="jamaah.foto"
          alt="Foto Profil"
          class="w-24 h-24 object-cover rounded-full border-2 border-emerald-600"
        />
        <div>
          <p class="text-xl font-semibold">{{ jamaah.nama }}</p>
          <p class="text-sm text-gray-500">{{ jamaah.kota_asal }}</p>
        </div>
      </div>

      <div class="pt-4 space-y-2">
        <p><strong>Jenis Kelamin:</strong> {{ jamaah.jenis_kelamin }}</p>
        <p><strong>Kelompok:</strong> {{ jamaah.kelompok }}</p>
        <p><strong>Kota Asal:</strong> {{ jamaah.kota_asal }}</p>
      </div>
    </div>

    <div v-else>
      <p class="text-gray-600">Memuat data jamaah...</p>
    </div>

    <router-link
      to="/data-pengguna"
      class="text-emerald-600 mt-4 inline-block hover:underline"
    >
      ← Kembali ke daftar jamaah
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const jamaah = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('/db.json')
    const data = await res.json()
    const id = parseInt(route.params.id)
    jamaah.value = data.jamaah.find(j => j.id === id)
  } catch (err) {
    console.error('Gagal memuat data jamaah:', err)
  }
})
</script>
