<script setup>
import DashboardLayout from './views/DashboardLayout.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <DashboardLayout />
  <!-- <RouterView /> -->
</template>

