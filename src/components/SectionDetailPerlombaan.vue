<script setup>
import supabase from '@/supabase'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const comp = ref([])
const slug = ref(route.params.slug)
// console.log(paramsId.values)
onMounted(async() => {
  let login = await supabase.auth.signInWithPassword({
  email: 'ahmadfadilah202003@gmail.com',
  password: '@Qwerty1234567'
  })
  
  let { data: competitions, error } = await supabase
  .from('competitions')
  .select('*')
  .eq('comp_slug', slug.value)
  // console.log(competitions)
  comp.value = competitions
  })

</script>

<template>
  <section class="flex flex-wrap bg-kuning-difest justify-center p-3 md:px-[10rem] md:pt-[3rem]" v-for="c in comp">
      <div class="grid bg-hijau-difest p-3 rounded-lg">
        <div class="flex flex-wrap gap-3 mb-[3rem]">
          <div class="mx-auto">
            <img class="rounded-lg w-[20rem] bg-white" :src="c.comp_image" :alt="'Image for '+c.name" />
          </div>
          <div class="text-justify md:w-[30rem]">
            <h5 class="text-4xl text-black font-bold py-[1rem]">{{ c.comp_name }}</h5>
            <p class="text-md font-serif font-bold" v-html="c.comp_desc"></p>
          </div>
        </div>
        <div class="grid bg-white rounded-lg p-[1.5rem] text-justify md:w-[45rem] mx-auto">
          <h5 class="text-3xl font-serif font-extrabold text-center mb-3">Ketentuan Umum</h5>
          <p class="font-serif">
            Lomba ini merupakan kegiatan yang diselenggarakan oleh
            Himpunan Mahasiswa Jurusan Teknologi Informasi Dan Komputer
            Politeknik Negeri Subang. Tema lomba Sinematografi Difest 2024
            adalah “Pengaruh Teknologi Dan Budaya Di Era Digital” Dengan
            subtema:
          </p>     
          <ul class="space-y-5 text-black list-disc list-inside dark:text-black">
              <li class="font-serif">
                  Pengaruh AI Terhadap Kehidupan Di Era Digital
                  <ol class="ps-5 mt-2 space-y-1 list-none list-inside">
                      <li class="font-serif">
                        Subtema ini menggambarkan tertuju pada dampak kecerdasan
                        buatan (AI) terhadap kehidupan manusia. AI tidak hanya mengubah
                        cara kerja dan produktivitas, tetapi juga memunculkan pertanyaan
                        etika terkait pekerjaan manusia, transformasi ekonomi, dan
                        perubahan paradigma dalam berbagai sektor dalam kehidupan.
                      </li>
                  </ol>
              </li>
              <li class="font-serif">
                  Teknologi Sebagai Media Ekspresi Budaya Indonesia Di Era
                  <ol class="ps-5 mt-2 space-y-1 list-none list-outside">
                      <li class="font-serif">
                        Digital Subtema ini menggambarkan bagaiman teknologi menjadi
                        media untuk mengekspresikan dan melestarikan kebudayaan
                        Indonesia. Dalam era digital, budaya dapat disebarkan dan diakses
                        lebih luas melalui teknologi, sementara masyarakat dapat
                        menggunakan teknologi untuk mempertahankan dan
                        mempromosikan warisan budaya mereka.
                      </li>
                  </ol>
              </li>
              <li class="font-serif">
                  Dampak Teknologi Terhadap Interaksi Sosial Di Era Digital
                  <ol class="ps-5 mt-2 space-y-1 list-none list-outside">
                      <li class="font-serif">
                        Subtema ini menggambarkan dampak yang terjadi akibat teknologi
                        dalam perubahan pola komunikasi, dinamika hubungan sosial, serta
                        tantangan dan peluang yang muncul seiring dengan pergeseran ke era
                        digital.
                      </li>
                  </ol>
              </li>
          </ul>
        </div>
      </div>
  </section>
</template>