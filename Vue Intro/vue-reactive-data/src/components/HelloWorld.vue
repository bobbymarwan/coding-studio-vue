<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  message: string;
}>();

const name = ref("");
</script>


<template>
  <h1>{{ message }}</h1>
  <p>Masukan Nama Anda: <input type="text" v-model="name" /></p>
  <p>Halo, {{ name }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
