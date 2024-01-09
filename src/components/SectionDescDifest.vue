<script setup>
import { ref, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

const typeValue = ref('');
const typeStatus = ref(false);
const typeArray = ['DIFEST 5.0', 'DIFEST 2024', 'DIFEST HIMATIKOM'];
const typingSpeed = 200;
const erasingSpeed = 100;
const newTextDelay = 2000;
let typeArrayIndex = 0;
let charIndex = 0;

const typeText = () => {
  if (charIndex < typeArray[typeArrayIndex].length) {
    if (!typeStatus.value) typeStatus.value = true;

    typeValue.value += typeArray[typeArrayIndex].charAt(charIndex);
    charIndex += 1;

    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay);
  }
};

const eraseText = () => {
  if (charIndex > 0) {
    if (!typeStatus.value) typeStatus.value = true;

    typeValue.value = typeArray[typeArrayIndex].substring(0, charIndex - 1);
    charIndex -= 1;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    typeArrayIndex += 1;
    if (typeArrayIndex >= typeArray.length) typeArrayIndex = 0;

    setTimeout(typeText, typingSpeed + 1000);
  }
};

onMounted(() => {
  initFlowbite()
  setTimeout(typeText, newTextDelay + 200);
});
</script>


<template>
  <section class="flex bg-kuning-difest py-[5rem] items-center justify-center px-3 md:px-3" id="sambutan-direktur" aria-label="Sambutan Direktur">
    <div class="flex flex-wrap rounded-lg p-[3rem] gap-[3rem]">
      <div class="w-[30rem] mx-auto bg-transparent rounded-[100%] object-cover">
        <div id="default-carousel" class="relative z-0 h-[35rem] w-[25rem] sm:h-[27rem] sm:pt-[5rem] mx-auto" data-carousel="slide">
        <!-- Carousel wrapper -->
          <div class="relative overflow-hidden rounded-lg h-[30rem] sm:h-[20rem]">
              <!-- Item 1 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/maskot/maskot-2.png" class="absolute block object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[20rem] h-[20rem] mx-auto bg-white rounded-[100%]" alt="...">
              </div>
              <!-- Item 2 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/maskot/maskot-3.png" class="absolute block object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[20rem] h-[20rem] mx-auto bg-white rounded-[100%]" alt="...">
              </div>
              <!-- Item 3 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/maskot/maskot-5.png" class="absolute block object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[20rem] h-[20rem] mx-auto bg-white rounded-[100%]" alt="...">
              </div>
          </div>
        </div>
        <!-- <img src="/maskot/maskot-2.png" class="w-[15rem] h-[15rem] mx-auto bg-white rounded-[100%] object-cover" alt="Foto Direktur"> -->
      </div>
      <div class="grid rounded-lg md:w-[40rem]">
        <div class="flex my-auto">
          <span class="text-5xl font-bold font-mono text-hijau-difest">{{ typeValue }}</span>
          <span class="cursor" :class="{'typing':typeStatus}"></span>
        </div>
        <h3 class="font-serif font-bold text-justify mt-[2rem] md:mt-0">
          Nama kegiatan ini yaitu Digital Festival Nasional
          (DIFEST) merupakan sebuah kegiatan yang
          diselenggarakan oleh Himpunan Mahasiswa Teknologi
          Informasi dan Komputer Politeknik Negeri Subang
          (HIMATIKOM POLSUB) dimana di dalamnya berisi
          lomba-lomba bidang IT, webinar nasional dan showcase.
        </h3>
    </div>
    </div>
  </section>
</template>

<style scoped>
  span.typed-text {
    color: #000;
  }

  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    height: 2.4rem;
    background-color: #20C2C2;
    animation: cursorBlink 1s infinite;
  }

  span.cursor.typing {
    animation: none;
  }

  @keyframes cursorBlink {
    49% { background-color: #20C2C2; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }
</style>
