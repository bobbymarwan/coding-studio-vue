<template>
    <div>
        <h1>Halaman About</h1>
        <button @click="navigateToHome">Ke Halaman Home</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateToHome() {
  router.push('/')
}
</script>