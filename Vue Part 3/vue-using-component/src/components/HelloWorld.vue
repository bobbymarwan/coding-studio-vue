<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import InputMask from "primevue/inputmask";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <Button label="Submit" />
  <Toolbar>
    <template #start>
      <Button icon="pi pi-plus" class="mr-2" severity="secondary" text />
      <Button icon="pi pi-print" class="mr-2" severity="secondary" text />
      <Button icon="pi pi-upload" severity="secondary" text />
    </template>

    <template #center>
      <IconField>
        <InputIcon>
          <i class="pi pi-search" />
        </InputIcon>
        <InputText placeholder="Search" />
      </IconField>
    </template>

    <template #end>
      <SplitButton label="Save" :model="items"></SplitButton
    ></template>
  </Toolbar>
  <div class="flex-auto">
    <label for="ssn" class="font-bold block mb-2">SSN</label>
    <InputMask
      id="ssn"
      v-model="value1"
      mask="999-99-9999"
      placeholder="999-99-9999"
      fluid
    />
  </div>

  <div class="flex-auto">
    <label for="phone" class="font-bold block mb-2">Phone</label>
    <InputMask
      id="phone"
      v-model="value2"
      mask="(999) 999-9999"
      placeholder="(999) 999-9999"
      fluid
    />
  </div>

  <div class="flex-auto">
    <label for="serial" class="font-bold block mb-2">Serial</label>
    <InputMask
      id="serial"
      v-model="value3"
      mask="a*-999-a999"
      placeholder="a*-999-a999"
      fluid
    />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
