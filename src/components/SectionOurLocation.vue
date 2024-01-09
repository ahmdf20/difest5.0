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
  <section class="flex justify-center bg-gray-100 py-5 md:py-[5rem]" id="count-down" aria-label="Section Our Location n Our Media">
    <div class="flex flex-wrap gap-[2rem]">
      <div class="max-w-[100%] overflow-hidden text-red-600 w-[500px] h-[500px]">
        <h5 class="font-extrabold text-3xl text-black text-center mb-[3rem]">Our Location :</h5>
        <div id="my-map-display" class="h-[100%] w-[100%] max-w-[100%] border border-gray-300">
        <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Politeknik+Negeri+Subang,+Kampus+Utama+Cibogo,+Cibogo,+Subang+Regency,+West+Java,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
      </div>
      <a class="googl-ehtml" href="https://www.bootstrapskins.com/themes" id="grab-map-authorization">premium bootstrap themes</a>
      </div>
      <div class="w-[500px] h-[500px] md:ml-[5rem]">
        <h5 class="font-extrabold text-3xl text-black text-center mb-3">Contact & Support :</h5>
        <div class="flex flex-wrap gap-4 items-center justify-center py-[100px] mx-auto">
          <a href="https://wa.me/+6285793606616?text=Assalamu%27alaikum+wr+wb" class="p-3 text-green-400 bg-white border border-green-400 rounded-lg hover:bg-green-400 hover:text-white" target="_blank">
            <IconBrandWhatsapp :width="96" :height="96" />
          </a>
          <a href="https://instagram.com/difest2024" class="p-3 text-pink-400 bg-white border border-pink-400 rounded-lg hover:bg-pink-400 hover:text-white" target="_blank">
            <IconBrandInstagram :width="96" :height="96" />
          </a>
          <a href="https://www.youtube.com/@mipolsubofficial7516" class="p-3 text-red-600 bg-white border border-red-600 rounded-lg hover:bg-red-600 hover:text-white" target="_blank">
            <IconBrandYoutubeFilled :width="96" :height="96"/>
          </a>
          <a href="https://www.tiktok.com/@difesthimatikompolsub" class="p-3 text-black bg-white border border-black rounded-lg hover:bg-black hover:text-white" target="_blank">
            <IconBrandTiktokFilled :width="96" :height="96"/>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>