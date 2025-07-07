<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-emerald-700 mb-6">Informasi Haji</h1>

    <!-- Tombol Submenu -->
    <div class="flex flex-wrap gap-2 mb-4">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="activeTab = tab.key"
        :class="[
          'px-4 py-2 rounded-full font-medium transition',
          activeTab === tab.key
            ? 'bg-emerald-600 text-white shadow'
            : 'bg-gray-100 text-gray-800 hover:bg-emerald-100'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Konten Tab -->
    <div class="bg-white p-4 shadow rounded-lg">
      <!-- Informasi Dasar Haji -->
<div v-if="activeTab === 'dasar'">

  <div class="space-y-4 text-gray-700 leading-relaxed">
    <!-- Pengertian -->
    <div>
      <h3 class="font-bold text-lg">Pengertian Haji dan Umrah</h3>
      <p>
        Haji adalah ibadah tahunan yang wajib dilakukan umat Islam yang mampu secara fisik dan finansial untuk pergi ke Mekkah pada bulan Dzulhijjah. Umrah adalah ibadah sunnah yang serupa namun dapat dilakukan kapan saja di luar musim haji.
      </p>
    </div>

    <!-- Syarat, Rukun, Wajib -->
    <div>
      <h3 class="font-bold text-lg">Syarat Haji</h3>
      <ul class="list-disc pl-5">
        <li>Islam</li>
        <li>Baligh (dewasa)</li>
        <li>Berakal sehat</li>
        <li>Mampu secara fisik dan finansial</li>
        <li>Merdeka (bukan budak)</li>
      </ul>
    </div>

    <div>
      <h3 class="font-bold text-lg">Rukun Haji</h3>
      <ul class="list-disc pl-5">
        <li>Ihram (niat memulai haji)</li>
        <li>Wukuf di Arafah</li>
        <li>Tawaf Ifadah</li>
        <li>Sa’i antara Shafa dan Marwah</li>
        <li>Tahallul (memotong rambut)</li>
        <li>Tertib</li>
      </ul>
    </div>

    <div>
      <h3 class="font-bold text-lg">Wajib Haji</h3>
      <ul class="list-disc pl-5">
        <li>Ihram dari miqat</li>
        <li>Mabit di Muzdalifah dan Mina</li>
        <li>Melempar jumrah</li>
        <li>Menjaga larangan ihram</li>
        <li>Tawaf Wada’ sebelum pulang</li>
      </ul>
    </div>

    <!-- Jenis Haji -->
    <div>
      <h3 class="font-bold text-lg">Jenis Haji</h3>
      <ul class="list-disc pl-5">
        <li><strong>Haji Ifrad:</strong> Hanya melaksanakan haji, tanpa umrah.</li>
        <li><strong>Haji Tamattu’:</strong> Umrah terlebih dahulu, lalu haji.</li>
        <li><strong>Haji Qiran:</strong> Haji dan umrah dilakukan bersamaan dalam satu niat dan ihram.</li>
      </ul>
    </div>

    <!-- Persyaratan Haji -->
    <div>
      <h3 class="font-bold text-lg">Persyaratan Pendaftaran Haji</h3>
      <ul class="list-disc pl-5">
        <li>Usia minimal 12 tahun</li>
        <li>Sehat jasmani dan rohani</li>
        <li>Memiliki dokumen lengkap (KTP, KK, paspor, dll.)</li>
        <li>Melunasi biaya pendaftaran (BPIH/ONH)</li>
        <li>Memiliki nomor porsi dan masuk dalam kuota nasional</li>
      </ul>
    </div>
  </div>
</div>


      <!-- Pendaftaran & Biaya -->
<div v-if="activeTab === 'biaya'">

  <div class="space-y-4 text-gray-700 leading-relaxed">
    
    <!-- Prosedur Pendaftaran -->
    <div>
      <h3 class="font-bold text-lg">Prosedur Pendaftaran (Online & Offline)</h3>
      <p>Pendaftaran haji dapat dilakukan secara:</p>
      <ul class="list-disc pl-5">
        <li><strong>Offline:</strong> Melalui Kantor Kementerian Agama (Kemenag) setempat dengan membawa dokumen lengkap.</li>
        <li><strong>Online:</strong> Melalui situs resmi <a href="https://haji.kemenag.go.id" class="text-emerald-600 underline" target="_blank">haji.kemenag.go.id</a></li>
      </ul>
      <p class="mt-2">Syarat dokumen:</p>
      <ul class="list-disc pl-5">
        <li>KTP & KK</li>
        <li>Akta Kelahiran</li>
        <li>Paspor aktif</li>
        <li>Surat Keterangan Sehat dari Puskesmas/RS</li>
      </ul>
    </div>

    <!-- Daftar Biaya -->
    <div>
      <h3 class="font-bold text-lg">Biaya Haji (ONH/BPIH)</h3>
      <ul class="list-disc pl-5">
        <li><strong>BPIH (Biaya Penyelenggaraan Ibadah Haji):</strong> Sekitar Rp 49 juta (bisa berubah tiap tahun)</li>
        <li>Biaya tambahan: Visa, vaksin, koper, seragam, dll.</li>
        <li>Pembayaran dapat dilakukan secara <strong>cicilan</strong> melalui bank syariah mitra Kemenag.</li>
      </ul>
    </div>

    <!-- Kalkulator Biaya -->
    <div>
      <h3 class="font-bold text-lg">Kalkulator Estimasi Biaya Haji</h3>
      <p>Berikut estimasi berdasarkan jenis haji:</p>
      <table class="w-full text-left mt-2 border rounded">
        <thead class="bg-emerald-600 text-white">
          <tr>
            <th class="p-2">Jenis Haji</th>
            <th class="p-2">Estimasi Biaya</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <td class="p-2">Haji Reguler</td>
            <td class="p-2">± Rp 49.000.000</td>
          </tr>
          <tr class="border-b">
            <td class="p-2">Haji Khusus/Plus</td>
            <td class="p-2">± Rp 150.000.000</td>
          </tr>
          <tr>
            <td class="p-2">Haji Furoda</td>
            <td class="p-2">± Rp 250.000.000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Status Kuota -->
    <div>
      <h3 class="font-bold text-lg">Status Kuota & Antrean Haji</h3>
      <p>
        Antrean haji di Indonesia bisa mencapai 10–30 tahun tergantung wilayah.
        Cek status kuota dan estimasi keberangkatan di:
        <a href="https://haji.kemenag.go.id/v4/" class="text-emerald-600 underline" target="_blank">haji.kemenag.go.id/v4</a>
      </p>
    </div>
    
  </div>
</div>


      <!-- Jadwal & Timeline -->
<div v-if="activeTab === 'jadwal'">

  <div class="space-y-4 text-gray-700 leading-relaxed">

    <!-- Jadwal Pendaftaran -->
    <div>
      <h3 class="font-bold text-lg">Jadwal Pendaftaran (Tahapan Gelombang Haji)</h3>
      <p>Pendaftaran haji dilakukan secara bertahap dan terbagi dalam beberapa gelombang:</p>
      <ul class="list-disc pl-5 mt-2">
        <li><strong>Gelombang 1:</strong> Dibuka awal tahun untuk keberangkatan tahun berjalan</li>
        <li><strong>Gelombang 2:</strong> Untuk jamaah cadangan atau sisa kuota</li>
        <li><strong>Pendaftaran Antrean:</strong> Berlaku untuk tahun-tahun berikutnya sesuai kuota wilayah</li>
      </ul>
    </div>

    <!-- Timeline Perjalanan -->
    <div>
      <h3 class="font-bold text-lg">Timeline Perjalanan Haji</h3>
      <p>Berikut adalah tahapan umum perjalanan ibadah haji:</p>
      <ol class="list-decimal pl-5 mt-2">
        <li>Keberangkatan dari embarkasi (Bandara Soekarno-Hatta, Juanda, dll)</li>
        <li>Tiba di Madinah (ziarah ke Masjid Nabawi, Raudhah)</li>
        <li>Menuju Mekkah dan melaksanakan Umrah Tamattu’</li>
        <li>Persiapan Haji (8 Dzulhijjah): menuju Mina</li>
        <li>Wukuf di Arafah (9 Dzulhijjah)</li>
        <li>Mabit di Muzdalifah dan Mina</li>
        <li>Tawaf Ifadah, Sa’i, dan Tahallul</li>
        <li>Tawaf Wada & kepulangan ke tanah air</li>
      </ol>
    </div>

    <!-- Kalender Islam -->
    <div>
      <h3 class="font-bold text-lg">Kalender Islam & Jadwal Penting</h3>
      <p>Beberapa tanggal penting dalam pelaksanaan haji:</p>
      <ul class="list-disc pl-5 mt-2">
        <li>1 Dzulhijjah: Awal bulan haji</li>
        <li>8 Dzulhijjah: Hari Tarwiyah (berangkat ke Mina)</li>
        <li>9 Dzulhijjah: Wukuf di Arafah</li>
        <li>10 Dzulhijjah: Idul Adha dan pelaksanaan kurban</li>
        <li>11–13 Dzulhijjah: Hari Tasyriq (lempar jumrah)</li>
      </ul>
    </div>

  </div>
</div>


      <!-- Persiapan Haji -->
<div v-if="activeTab === 'persiapan'">
  <div class="space-y-6 text-gray-700 leading-relaxed">

    <!-- Kesehatan & Vaksinasi -->
    <div>
      <h3 class="text-lg font-bold">Kesehatan & Vaksinasi</h3>
      <p>Setiap jamaah wajib memenuhi persyaratan kesehatan berikut:</p>
      <ul class="list-disc pl-5 mt-2">
        <li>Wajib vaksin meningitis dan COVID-19</li>
        <li>Sertifikat vaksin harus dibawa saat keberangkatan</li>
        <li>Disarankan cek kesehatan lengkap minimal 1 bulan sebelum keberangkatan</li>
      </ul>
      <p class="mt-2">Tips menjaga kesehatan selama haji:</p>
      <ul class="list-disc pl-5">
        <li>Minum air putih yang cukup</li>
        <li>Gunakan masker di area ramai</li>
        <li>Gunakan alas kaki agar tidak terluka di jalan panas</li>
        <li>Bawa obat-obatan pribadi & multivitamin</li>
      </ul>
    </div>

    <!-- Pembekalan Materi -->
    <div>
      <h3 class="text-lg font-bold">Pembekalan Materi Haji</h3>
      <p>Sebelum berangkat, jamaah disarankan untuk mengikuti pembekalan:</p>
      <ul class="list-disc pl-5 mt-2">
        <li><strong>Video Manasik Haji:</strong> Simulasi pelaksanaan rukun dan wajib haji</li>
        <li><strong>Panduan PDF:</strong> Buku saku doa dan tata cara ibadah</li>
        <li><strong>Simulasi Praktik:</strong> Kegiatan manasik haji di lokasi tertentu (biasanya oleh Kemenag)</li>
      </ul>
    </div>

    <!-- Packing List -->
    <div>
      <h3 class="text-lg font-bold">Packing List & Barang Larangan</h3>
      <p>Berikut barang-barang yang wajib dan disarankan dibawa:</p>
      <ul class="list-disc pl-5 mt-2">
        <li>Paspor dan visa haji</li>
        <li>Kain ihram (2 lembar)</li>
        <li>Pakaian ganti, sandal, perlengkapan mandi</li>
        <li>Botol minum, obat pribadi, masker, hand sanitizer</li>
        <li>Identitas diri & gelang jamaah</li>
      </ul>
      <p class="mt-2">Barang yang tidak boleh dibawa:</p>
      <ul class="list-disc pl-5">
        <li>Barang tajam (gunting besar, pisau)</li>
        <li>Alat listrik berdaya besar (rice cooker, setrika)</li>
        <li>Barang mudah meledak (aerosol/gas butana)</li>
      </ul>
    </div>

  </div>
</div>

     <!-- Layanan & Fitur Online -->
<div v-if="activeTab === 'layanan'">

  <div class="space-y-6 text-gray-700 leading-relaxed">

    <!-- Cek Status Pendaftaran -->
    <div>
      <h3 class="text-lg font-bold">Cek Status Pendaftaran</h3>
      <p>Gunakan NIK atau Nomor Porsi Anda untuk mengetahui status pendaftaran haji.</p>
      <p class="mt-1 italic text-sm text-gray-500">Fitur ini dapat diakses melalui aplikasi resmi Kementerian Agama atau website haji.</p>
      <button class="mt-2 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition">
        Cek Status Sekarang
      </button>
    </div>

    <!-- Pembayaran Online -->
    <div>
      <h3 class="text-lg font-bold">Pembayaran Online</h3>
      <p>Fasilitas pembayaran haji kini lebih mudah:</p>
      <ul class="list-disc pl-5 mt-2">
        <li>Pembayaran melalui Virtual Account (VA) Bank mitra</li>
        <li>Mendukung e-wallet seperti LinkAja Syariah</li>
        <li>Notifikasi otomatis setelah pembayaran berhasil</li>
      </ul>
    </div>

    <!-- Tracking Jamaah -->
    <div>
      <h3 class="text-lg font-bold">Tracking Jamaah</h3>
      <p>Fitur ini membantu mengetahui lokasi kelompok/kloter jamaah secara real-time di Arab Saudi:</p>
      <ul class="list-disc pl-5 mt-2">
        <li>Lokasi terkini (Makkah, Madinah, Arafah, Mina, dll)</li>
        <li>Update perjalanan kloter secara otomatis</li>
        <li>Bisa dilihat oleh keluarga di Indonesia</li>
      </ul>
    </div>

    <!-- Helpdesk & Chatbot -->
    <div>
      <h3 class="text-lg font-bold">Helpdesk & Chatbot</h3>
      <p>Layanan bantuan untuk pertanyaan darurat atau kendala saat ibadah:</p>
      <ul class="list-disc pl-5 mt-2">
        <li>Chatbot 24 jam untuk pertanyaan umum</li>
        <li>Hotline darurat Kementerian Agama</li>
        <li>Bantuan teknis aplikasi & pengaduan</li>
      </ul>
      <button class="mt-2 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition">
        Hubungi Helpdesk
      </button>
    </div>

  </div>
</div>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('dasar') // default tab
const tabs = [
  { key: 'dasar', label: 'Informasi Dasar' },
  { key: 'biaya', label: 'Pendaftaran & Biaya' },
  { key: 'jadwal', label: 'Jadwal & Timeline' },
  { key: 'persiapan', label: 'Persiapan Haji' },
  { key: 'layanan', label: 'Layanan Online' }
]
</script>
