<script setup>
import { onMounted, ref, onBeforeMount } from 'vue'
import Swal from 'sweetalert2'
import axios from 'axios';

const isSubmit = ref(false)
const userSession = ref(JSON.parse(localStorage.getItem('user')))
const formData = ref({
  userid: userSession.value.userid,
  surat_orsinil: null,
  karya: null,
  desc_karya: null
})

const handleSuratOrsinil = (event) => {
  const file = event.target.files[0]
  formData.value.surat_orsinil = file
}

const handleKarya = (event) => {
  const file = event.target.files[0]
  formData.value.karya = file
}

const handleDescKarya = (event) => {
  const file = event.target.files[0]
  formData.value.desc_karya = file
}

const handleSubmit = async () => {
  const newFormData = new FormData()
  newFormData.append('karya', formData.value.karya)
  newFormData.append('desc_karya', formData.value.desc_karya)
  newFormData.append('surat_orsinil', formData.value.surat_orsinil)
  newFormData.append('userid', formData.value.userid)

  try {
    const response = await axios.post(`https://server-difest5-0.himatikom-polsub.com/api/submission/insert`, newFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (response.status == 200) {
      Swal.fire({
        title: 'Berhasil!',
        icon: 'success',
        text: 'Terimakasih telah mengikuti acara DIFEST 5.0 kali ini, harap tunggu untuk hasilnya nanti yah'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload()
        }
      })
    }
  } catch (error) {
    console.error(error)
  }
}

const checkKaryaIsSubmitted = async () => {
  // const dataSend = {
  //   userid: userSession.value.userid
  // }
  const response = await axios.get(`https://server-difest5-0.himatikom-polsub.com/api/submission/check?userid=${userSession.value.userid}`)
  // console.log(response.data)
  if (response.data.length == 0) {
    isSubmit.value = false
  } else {
    isSubmit.value = true
  }
}

onBeforeMount(() => {
  checkKaryaIsSubmitted()
})

</script>
<template>
  <div v-if="isSubmit == false">
    <div class="card bg-kuning-difest shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-neutral">
          Form Pengumpulan Karya
          <!-- <div class="badge badge-secondary">NEW</div> -->
        </h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-5">
            <label for="surat_orsinil" class="mb-3 text-neutral">Upload Surat Orisinil</label>
            <input type="file" class="file-input w-full text-neutral" @change="handleSuratOrsinil" />
          </div>
          <div class="mb-5">
            <label for="desc_karya" class="mb-3 text-neutral">Upload Deskripsi Karya</label>
            <input type="file" class="file-input w-full text-neutral" @change="handleDescKarya" />
          </div>
          <div class="mb-5">
            <label for="karya" class="mb-3 text-neutral">Upload Karya</label>
            <input type="file" class="file-input w-full text-neutral" @change="handleKarya" />
          </div>
          <button class="btn btn-wide float-end bg-hijau-difest text-neutral-100 border-none" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="card bg-kuning-difest shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-neutral text-2xl text-center p-[2rem]">
          Anda Telah Mengumpulkan karya
          <br>
          🥳🥳🥳🎉🎉🎉
        </h2>
      </div>
    </div>
  </div>
</template>