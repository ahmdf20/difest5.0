<script setup>
import router from '@/router';
import axios from 'axios'
import Swal from 'sweetalert2'
import { onMounted, ref } from 'vue'

const user = ref(JSON.parse(localStorage.getItem('user')))

const formData = ref({
  oldPassword: '',
  newPassword: '',
  repeatPassword: '',
})

const handleSubmit = async() => {
  // const newFormData = new FormData()
  const newData = {
    userid: user.value.userid,
    oldPassword: formData.value.oldPassword,
    newPassword: formData.value.newPassword,
  }
  try {
    const checkOldPassword = await axios.post(`http://localhost:3030/api/participant/check-password`, newData)
    // Jika password lama tidak sesuai
    if (checkOldPassword.status == 202) {
      Swal.fire({
        title: 'Gagal',
        icon: 'error',
        text: 'Password lama yang diinputkan tidak sama'
      }).then((res) => {
        if (res.isConfirmed) {
          window.location.reload()
        }
      })
    } 
    // Jika Repeat password tidak sama
    if (formData.value.newPassword != formData.value.repeatPassword) {
      Swal.fire({
        title: 'Gagal',
        icon: 'error',
        text: 'Harap perhatikan pengulangan password'
      }).then((res) => {
        if(res.isConfirmed) {
          window.location.reload()
        }
      })
    }

    const updateNewPassword = await axios.post(`http://localhost:3030/api/participant/update-password`, newData)
    if (updateNewPassword.status == 201) {
      Swal.fire({
        title: 'Berhasil',
        icon: 'success',
        text: 'Berhasil mengubah password, demi keamanan harap login ulang'
      }).then((res) => {
        if (res.isConfirmed) {
          localStorage.clear()
          router.push('/login')
        }
      })
    } else {
      console.error(`Error : ${updateNewPassword.statusText}`)
    }

  } catch (error) {
    console.error(error)
  }
}

// onMounted(() => {
  // getAllCompetition()
// })
</script>

<template>
  <div class="card w-96 bg-kuning-difest shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-neutral">
        Form Ubah Password
        <!-- <div class="badge badge-secondary">NEW</div> -->
      </h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-5">
          <label for="oldPassword" class="mb-3 text-neutral">Password Lama</label>
          <input type="password" class="file-input w-full text-neutral bg-neutral-100" v-model="formData.oldPassword" required />
        </div>
        <div class="mb-5">
          <label for="newPassword" class="mb-3 text-neutral">Password Baru</label>
          <input type="password" class="file-input w-full text-neutral bg-neutral-100" v-model="formData.newPassword" required/>
        </div>
        <div class="mb-5">
          <label for="repeatPassword" class="mb-3 text-neutral">Ulangi Password</label>
          <input type="password" class="file-input w-full text-neutral bg-neutral-100" v-model="formData.repeatPassword" required/>
        </div>
        <button class="btn btn-wide float-end bg-hijau-difest text-neutral-100 border-none" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>