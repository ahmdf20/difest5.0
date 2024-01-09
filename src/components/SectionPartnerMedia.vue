<script setup>
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
  IconBrandTiktokFilled,
  IconDownload
} from '@tabler/icons-vue'

const downloadPDF = () => {
  const pdfPath = '/booklet-difest-2024.pdf'
  const link = document.createElement('a')
  link.href = pdfPath
  link.download = 'Booklet_DIFEST_2024.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <section class="flex justify-center bg-kuning-difest py-[5rem] md:py-[15rem]" id="count-down" aria-label="Section Our Location n Our Media">
    <div class="grid gap-[2rem]">
      <div>
      <h5 class="font-extrabold text-3xl text-black text-center mb-3">Media Partner & Sponsorship :</h5>
      <h5 class="text-5xl text-black text-center">Coming Soon!</h5>
    </div>
    </div>
  </section>
</template>