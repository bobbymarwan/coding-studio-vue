<template>
    <div>
        <h1>Profil Pengguna</h1>
        <p>ID: Pengguna: {{ route.params.id }}</p>
    </div>
</template>


<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>