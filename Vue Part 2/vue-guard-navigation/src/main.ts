import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
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
        beforeEnter: (to: any, from: any) => {
            console.log('beforeEnter:', to, from)
            return true
        }
    },
    {
        path: '/profile/:id',
        name: 'profile',
        component: Profile,
        beforeEnter: (to: any, from: any) => {
            console.log('beforeEnter:', to, from)
            return true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

