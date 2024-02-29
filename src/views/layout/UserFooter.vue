<script setup>
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
  IconBrandTiktokFilled,
} from '@tabler/icons-vue'
</script>

<template>
  <footer class="footer items-center p-4 bg-neutral text-neutral-content">
    <aside class="items-center grid-flow-col">
      <img src="/logo-himpunan.png" class="h-10" alt="Flowbite Logo" />
      <img src="/difest.png" class="h-10" alt="Flowbite Logo" />
      <p>Copyright © HIMATIKOM {{ new Date().getFullYear()  }} - All right reserved</p>
    </aside> 
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a>
        <IconBrandWhatsapp />
      </a>
      <a>
        <IconBrandInstagram />
      </a>
      <a>
        <IconBrandYoutubeFilled />
      </a>
      <a>
        <IconBrandTiktokFilled/>
      </a>
    </nav>
  </footer>
</template>