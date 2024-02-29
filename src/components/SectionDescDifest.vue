<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { initFlowbite } from 'flowbite'

const typeValue = ref('');
const typeStatus = ref(false);
const typeArray = ['DIFEST 5.0', 'DIFEST 2024', 'DIFEST HIMATIKOM'];
const typingSpeed = 200;
const erasingSpeed = 100;
const newTextDelay = 2000;
let typeArrayIndex = 0;
let charIndex = 0;
const carouselItems = ref([
  { imageSrc: "/maskot/maskot-3.png" },
  { imageSrc: "/maskot/maskot-5.png" },
  { imageSrc: "/maskot/maskot-2.png" },
])

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
}
onMounted(() => {
  initFlowbite()
  setTimeout(typeText, newTextDelay + 200);
})
</script>


<template>
  <section class="flex bg-kuning-difest py-[5rem] items-center justify-center" id="sambutan-direktur" aria-label="Sambutan Direktur">
    <div class="hero-content flex-col lg:flex-row gap-[2rem]">
    <div class="max-w-sm carousel rounded-box shadow-2xl bg-neutral-50 object-cover overflow-hidden relative">
      <div class="carousel-track">
        <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item">
          <img :src="item.imageSrc" class="w-full" :alt="'Carousel Image ' + (index)" />
        </div> 
      </div>
    </div>
    <div>
      <h1 class="text-5xl font-bold">
        <span class="text-5xl font-bold font-mono text-hijau-difest-hover">{{ typeValue }}</span>
        <span class="cursor" :class="{'typing':typeStatus}"></span>
      </h1>
      <p class="py-6 text-neutral-950">Nama kegiatan ini yaitu Digital Festival Nasional (DIFEST) merupakan sebuah kegiatan yang diselenggarakan oleh Himpunan Mahasiswa Teknologi Informasi dan Komputer Politeknik Negeri Subang (HIMATIKOM POLSUB) dimana di dalamnya berisi lomba-lomba bidang IT, webinar nasional dan showcase.</p>
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

  .carousel {
  overflow: hidden;
  }

  .carousel-track {
  display: flex;
  animation: slide 10s infinite alternate; /* Adjust duration and timing as needed */
  }

  .carousel-item {
  flex: 0 0 100%; /* Ensure each item takes up the full width */
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-200%);
    }
  }
</style>
