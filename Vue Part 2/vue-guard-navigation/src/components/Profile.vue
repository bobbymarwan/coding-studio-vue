<template>
    <div>
        <p>Halaman ini akan menanyakan konfirmasi sebelum ditinggalkan</p>
        <router-link to="/">Kembali ke beranda</router-link>
    </div>
</template>


<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from 'vue-router'

const route = useRoute()



onBeforeRouteUpdate((to, from, next) => {
    console.log('onBeforeRouteUpdate: ', to, from)
    next()
})

onBeforeRouteLeave((to, from, next) => {
    console.log('onBeforeRouteLeave: ', to, from)
    const confirmation = window.confirm('Apakah Anda yakin akan meninggalkan halaman ini?')
    if(confirmation) {
        next()
    } else {
        next(false)
    }
})
</script>