<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button';

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <Button label="Submit" />
  <Button class="btn-custom" label="Test"/>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.btn-custom {
  padding: 100px;
}
</style>
