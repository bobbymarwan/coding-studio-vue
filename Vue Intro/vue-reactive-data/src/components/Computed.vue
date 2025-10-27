<template>
  <div>
    <p>Masukkan angka: <input type="number" v-model="number" /></p>
    <p>Angka yang Anda masukkan adalah: {{ number }}</p>
    <p>Angka dikalikan 2 = {{ doubleNumber }}</p>
    <p v-if="numberChanged">Angka telah berubah!</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue"

// state (data)
const number = ref(0)
const numberChanged = ref(false)

// computed property
const doubleNumber = computed(() => number.value * 2)

// watcher
watch(number, (newValue, oldValue) => {
  numberChanged.value = newValue !== oldValue
})
</script>

<style scoped>
p {
  font-family: sans-serif;
}
</style>