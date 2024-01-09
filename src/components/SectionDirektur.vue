<script setup>
import { ref, onMounted } from 'vue';

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
  setTimeout(typeText, newTextDelay + 200);
});
</script>


<template>
  <section class="flex bg-gray-100 py-[3rem] items-center justify-center px-3 md:px-3" id="sambutan-direktur" aria-label="Sambutan Direktur">
    <div class="flex flex-col items-center rounded-lg shadow md:flex-row md:w-auto bg-hijau-difest dark:bg-hijau-difest">
        <img class="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-auto md:rounded-none md:rounded-s-lg bg-dark-mode-difest" src="/direktur-tanpa-bg.png" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <div class="grid bg-dark-mode-difest p-3 text-center rounded-lg mb-[2rem]">
              <h5 class="mb-2 text-3xl font-bold tracking-tight text-kuning-difest dark:text-kuning-difest">Oyok Yudianto, S. T., M. T</h5>
              <h5 class="mb-2 text-3xl font-bold tracking-tight text-kuning-difest dark:text-kuning-difest">Direktur Politeknik Negeri Subang</h5>
            </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-kuning-difest dark:text-kuning-difest">Sambutan Direktur</h5>
            <p class="mb-3 font-normal text-black dark:text-black md:w-[30rem] text-justify font-serif">
              Assalamu'alaikum wr.wb.<br>
              Selamat datang dan salam sejahtera kepada seluruh peserta, dan tamu undangan dalam event luar biasa ini!<br>
              Hari ini, kita berkumpul dalam semangat persatuan untuk merayakan keberagaman, keunggulan, dan kolaborasi. Event ini bukan hanya sekadar pertemuan, tetapi sebuah peristiwa yang akan membentuk arah masa depan.<br>
              Kita semua adalah bagian dari cerita besar ini, yang tidak hanya menghubungkan kita di tingkat nasional, tetapi juga mengukir jejak prestasi di kancah internasional. Keberhasilan event ini tergantung pada kerjasama, dedikasi, dan semangat bersama.<br>
              Mari kita sambut tantangan dengan antusiasme, dan mari berkomitmen untuk memberikan yang terbaik. Bersama, kita bisa menciptakan momen-momen berharga, merangkul inovasi, dan menorehkan prestasi yang akan dikenang oleh generasi mendatang.<br>
              Terima kasih kepada seluruh tim penyelenggara, sponsor, dan setiap individu yang telah berkontribusi untuk menjadikan event ini. Marilah kita tunjukkan pada dunia bahwa kita bersatu untuk mencapai keberhasilan.<br>
              Selamat mengikuti event ini dengan semangat, semoga kita semua dapat membawa pulang inspirasi, koneksi baru, dan kenangan tak terlupakan.<br>
              Terima kasih.<br>
              Wassalamu'alaikum wr.wb.
            </p>
        </div>
    </div>
    <!-- <div class="flex flex-wrap bg-hijau-difest-hover rounded-lg p-[3rem] gap-[3rem]">
      <div class="md:w-[30rem] mx-auto bg-dark-mode-difest rounded-lg mb-[3rem]">
        <img src="/direktur-tanpa-bg.png" class="h-[80%] mx-auto" alt="Foto Direktur">
        <div class="grid gap-[2rem] p-5 bg-hijau-difest rounded-lg text-kuning-difest text-3xl font-bold text-center">
          <h3>Oyok Yudianto, S. T., M. T</h3>
          <h3>Direktur Politeknik Negeri Subang</h3>
        </div>
      </div>
      <div class="grid rounded-lg md:w-[40rem]">
        <div class="flex">
          <h3 class="text-5xl font-bold text-kuning-difest my-auto">Sambutan Direktur</h3>
        </div>
        <h3 class="font-serif font-bold text-justify">
          Assalamu'alaikum wr.wb.<br>
          Selamat datang dan salam sejahtera kepada seluruh peserta, dan tamu undangan dalam event luar biasa ini!<br>
          Hari ini, kita berkumpul dalam semangat persatuan untuk merayakan keberagaman, keunggulan, dan kolaborasi. Event ini bukan hanya sekadar pertemuan, tetapi sebuah peristiwa yang akan membentuk arah masa depan.<br>
          Kita semua adalah bagian dari cerita besar ini, yang tidak hanya menghubungkan kita di tingkat nasional, tetapi juga mengukir jejak prestasi di kancah internasional. Keberhasilan event ini tergantung pada kerjasama, dedikasi, dan semangat bersama.<br>
          Mari kita sambut tantangan dengan antusiasme, dan mari berkomitmen untuk memberikan yang terbaik. Bersama, kita bisa menciptakan momen-momen berharga, merangkul inovasi, dan menorehkan prestasi yang akan dikenang oleh generasi mendatang.<br>
          Terima kasih kepada seluruh tim penyelenggara, sponsor, dan setiap individu yang telah berkontribusi untuk menjadikan event ini. Marilah kita tunjukkan pada dunia bahwa kita bersatu untuk mencapai keberhasilan.<br>
          Selamat mengikuti event ini dengan semangat, semoga kita semua dapat membawa pulang inspirasi, koneksi baru, dan kenangan tak terlupakan.<br>
          Terima kasih.<br>
          Wassalamu'alaikum wr.wb.
        </h3>
    </div>
    </div> -->
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
    background-color: #000;
    animation: cursorBlink 1s infinite;
  }

  span.cursor.typing {
    animation: none;
  }

  @keyframes cursorBlink {
    49% { background-color: #000; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }
</style>
