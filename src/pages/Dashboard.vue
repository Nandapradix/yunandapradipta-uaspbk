<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Header + Konten -->
    <div class="flex-grow p-6 space-y-6">
      <!-- Header -->
      <div class="flex justify-between items-center bg-white shadow-md p-6 rounded-xl border border-gray-200">
        <div>
          <h2 class="text-2xl font-bold text-emerald-700 mb-1">Halo, {{ userName }}</h2>
          <div class="flex items-center space-x-2">
            <span
              :class="isLoggedIn ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
              class="px-3 py-1 rounded-full text-sm font-medium flex items-center"
            >
              <svg
                v-if="isLoggedIn"
                class="w-4 h-4 mr-1 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7" />
              </svg>
              <svg
                v-else
                class="w-4 h-4 mr-1 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
              {{ isLoggedIn ? 'Login Aktif' : 'Belum Login' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Konten Dashboard -->
      <div>
        <h1 class="text-3xl font-bold text-emerald-700 mb-4">Dashboard Haji</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white shadow p-4 rounded-lg">
            <h2 class="font-semibold text-lg text-gray-700">Jumlah Jamaah</h2>
            <p class="text-3xl font-bold text-emerald-600 mt-2">120</p>
          </div>
          <div class="bg-white shadow p-4 rounded-lg">
            <h2 class="font-semibold text-lg text-gray-700">Petugas Haji</h2>
            <p class="text-3xl font-bold text-emerald-600 mt-2">18</p>
          </div>
          <div class="bg-white shadow p-4 rounded-lg">
            <h2 class="font-semibold text-lg text-gray-700">Laporan Terverifikasi</h2>
            <p class="text-3xl font-bold text-emerald-600 mt-2">98</p>
          </div>
          <div class="bg-white shadow p-4 rounded-lg">
            <h2 class="font-semibold text-lg text-gray-700">Belum Berangkat</h2>
            <p class="text-3xl font-bold text-emerald-600 mt-2">22</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Gambar dan Doa -->
    <section class="bg-emerald-5 py-10">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:items-center">
          <!-- Gambar -->
          <div class="md:col-span-3">
            <img
              src="https://bpkh.go.id/wp-content/uploads/2024/08/ucapan-doa-untuk-orang-berangkat-haji.webp"
              class="rounded-xl shadow-lg w-full object-cover"
              alt="Ucapan Doa Haji"
            />
          </div>

          <!-- Doa -->
          <div class="md:col-span-1 bg-white p-6 rounded-xl shadow-md">
            <h2 class="text-xl font-bold text-emerald-700 sm:text-2xl leading-tight">
              Semoga Allah memberkahi perjalanan hajimu dengan kemudahan dan keberkahan.
            </h2>
            <p class="mt-4 text-gray-600 text-sm leading-relaxed">
              Doa dan harapan terbaik menyertai para tamu Allah yang menunaikan ibadah haji. Semoga menjadi haji mabrur dan kembali dengan selamat.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-emerald-5 text-gray-800 px-4 pt-16">
      <div class="mx-auto max-w-screen-xl md:px-24 lg:px-8">
        <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Logo & Deskripsi -->
          <div class="sm:col-span-2">
            <a href="/" class="inline-flex items-center mb-4">
              <svg class="w-8 text-emerald-600" viewBox="0 0 24 24" fill="none">
                <path d="M3 3h7v12H3zM3 17h7v4H3zM14 3h7v6h-7zM14 11h7v10h-7z" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span class="ml-2 text-xl font-bold tracking-wide text-emerald-800 uppercase">InfoHaji</span>
            </a>
            <p class="text-sm text-gray-700">
              InfoHaji menyajikan informasi seputar keberangkatan, persiapan, dan pelaksanaan ibadah Haji secara resmi dan akurat.
            </p>
          </div>

          <!-- Kontak -->
          <div class="space-y-2 text-sm">
            <p class="text-base font-bold tracking-wide text-gray-900">Kontak</p>
            <div class="flex">
              <p class="mr-1 text-gray-800">Telepon:</p>
              <a href="tel:1500124" class="text-emerald-600 hover:underline">1500-124</a>
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-800">Email:</p>
              <a href="mailto:haji@kemenag.go.id" class="text-emerald-600 hover:underline">haji@kemenag.go.id</a>
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-800">Alamat:</p>
              <a href="https://maps.google.com" class="text-emerald-600 hover:underline" target="_blank">
                Jl. Lapangan Banteng Barat No. 3-4, Jakarta
              </a>
            </div>
          </div>

          <!-- Sosial Media -->
          <div>
            <p class="text-base font-bold tracking-wide text-gray-900">Ikuti Kami</p>
            <div class="flex items-center mt-2 space-x-3 text-emerald-600">
              <a href="#"><i class="fab fa-facebook h-5 w-5"></i></a>
              <a href="#"><i class="fab fa-instagram h-5 w-5"></i></a>
              <a href="#"><i class="fab fa-twitter h-5 w-5"></i></a>
              <a href="#"><i class="fab fa-youtube h-5 w-5"></i></a>
            </div>
            <p class="mt-4 text-sm text-gray-600">
              Kami hadir untuk mendampingi setiap langkah perjalanan Haji Anda.
            </p>
          </div>
        </div>

        <!-- Footer bawah -->
        <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row border-gray-200">
          <p class="text-sm text-gray-600">© 2025 InfoHaji. Seluruh hak cipta dilindungi.</p>
          <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li><a href="#" class="text-sm text-gray-600 hover:text-emerald-600">F.A.Q</a></li>
            <li><a href="#" class="text-sm text-gray-600 hover:text-emerald-600">Kebijakan Privasi</a></li>
            <li><a href="#" class="text-sm text-gray-600 hover:text-emerald-600">Syarat & Ketentuan</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

const isLoggedIn = computed(() => userStore.isLoggedIn)
const userName = computed(() => userStore.getUserName)
</script>
