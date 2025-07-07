import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import DataPengguna from '../pages/DataPengguna.vue'
import Laporan from '../pages/Laporan.vue'
import InformasiHaji from '../pages/InformasiHaji.vue'
import DetailJamaah from '../pages/DetailJamaah.vue' // Tambahan


const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/data-pengguna', component: DataPengguna },
  { path: '/laporan', component: Laporan },
  { path: '/informasi-haji', component: InformasiHaji },
  { path: '/data-pengguna/:id', component: DetailJamaah }, // Tambahan

  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
