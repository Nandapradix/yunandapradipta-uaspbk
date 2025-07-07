<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Konten utama -->
    <div class="flex-grow p-6">
      <h1 class="text-2xl font-bold text-emerald-700 mb-4">Laporan Jamaah</h1>

      <form @submit.prevent="kirimLaporan" class="bg-white shadow rounded-lg p-6 space-y-4 max-w-xl">
        <div>
          <label class="block font-medium mb-1 text-gray-700">Nama</label>
          <input
            v-model="nama"
            type="text"
            placeholder="Nama lengkap"
            class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div>
          <label class="block font-medium mb-1 text-gray-700">Kategori Laporan</label>
          <select
            v-model="kategori"
            class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          >
            <option disabled value="">-- Pilih Kategori --</option>
            <option>Keluhan</option>
            <option>Saran</option>
            <option>Informasi Tambahan</option>
          </select>
        </div>

        <div>
          <label class="block font-medium mb-1 text-gray-700">Isi Laporan</label>
          <textarea
            v-model="isi"
            rows="4"
            placeholder="Tulis laporan Anda di sini..."
            class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          Kirim Laporan
        </button>

        <p v-if="sukses" class="text-green-600 mt-2 font-medium">Laporan berhasil dikirim!</p>
      </form>
    </div>

    <!-- Footer -->
        <footer class="bg-emerald-5 text-gray-800 px-4 pt-16">
      <div class="mx-auto max-w-screen-xl md:px-24 lg:px-8">
        <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Logo & Deskripsi -->
          <div class="sm:col-span-2">
            <a href="/" class="inline-flex items-center mb-4">
              <svg class="w-8 text-emerald-600" viewBox="0 0 24 24" fill="none">
                <path d="M3 3h7v12H3zM3 17h7v4H3zM14 3h7v6h-7zM14 11h7v10h-7z" stroke="currentColor" stroke-width="2" />
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
import { ref } from 'vue'

const nama = ref('')
const kategori = ref('')
const isi = ref('')
const sukses = ref(false)

function kirimLaporan() {
  console.log('Laporan:', {
    nama: nama.value,
    kategori: kategori.value,
    isi: isi.value
  })

  // Reset form & tampilkan pesan sukses
  nama.value = ''
  kategori.value = ''
  isi.value = ''
  sukses.value = true

  setTimeout(() => {
    sukses.value = false
  }, 3000)
}
</script>
