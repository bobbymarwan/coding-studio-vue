<template>
    <div>
        <h1>Halaman Home</h1>
        <input type="text" v-model="searchQuery" placeholder="Cari pengguna">
        <button @click="search">Cari</button>

        <ul>
            <li v-for="user in users" :key="user.id">
                <router-link :to="{name: 'profile', params: { id: user.id }}">{{ user.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const users = ref([
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' }
])

function search() {
  router.push({
    name: 'home',
    query: { q: searchQuery.value }
  })
}
</script>