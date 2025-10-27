import { createApp } from 'vue'
import {
    createRouter,
    createWebHistory,
    type RouteLocationNormalized,
    type NavigationGuardNext
} from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: { requiresAuth: true }
    },
    {
        path: '/profile/:id',
        name: 'profile',
        component: Profile,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

async function checkLoginStatus(): Promise<boolean> {
  try {
    await new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, 3000)
    })
    return false
  } catch (error) {
    console.error('❌ Gagal cek login:', error)
    return false
  }
}

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (to.meta.requiresAuth) {
    const isLoggedIn: boolean = await checkLoginStatus()

    if (!isLoggedIn) {
      console.warn('⛔ User belum login — redirect ke Home')
      alert('Harus login dulu!')
      next({ name: 'home' }) // redirect manual
      return
    }

    console.log('✅ User sudah login')
  }

  next() // lanjutkan navigasi
})

const app = createApp(App)
app.use(router)
app.mount('#app')

