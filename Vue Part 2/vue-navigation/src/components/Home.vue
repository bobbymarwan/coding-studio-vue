<template>
    <div>
        <h1>Halaman Home</h1>
        <button @click="navigateToAbout">Go To About</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateToAbout() {
  router.push('/about')
}
</script>