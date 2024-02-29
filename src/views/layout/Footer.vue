<script setup>
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
  IconBrandTiktokFilled,
  IconDownload
} from '@tabler/icons-vue'
</script>
<template>
<footer class="footer footer-center p-10">
  <aside>
    <div class="flex gap-3">
        <img src="/logo-himpunan.png" class="h-10" alt="Flowbite Logo" />
        <img src="/difest.png" class="h-10" alt="Flowbite Logo" />
    </div>
    <p class="font-bold">
      Digital Festival 5.0 HIMATIKOM POLSUB 
    </p> 
    <p>Copyright © {{ new Date().getFullYear() }} - HIMATIKOM POLSUB</p>
  </aside> 
  <nav>
    <div class="grid grid-flow-col gap-4">
      <a><IconBrandWhatsapp /></a>
      <a><IconBrandInstagram /></a>
      <a><IconBrandYoutubeFilled /></a>
      <a><IconBrandTiktokFilled /></a>
    </div>
  </nav>
</footer>
</template>