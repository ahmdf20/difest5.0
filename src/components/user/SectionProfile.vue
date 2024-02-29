<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'

const user = ref([])
const userSession = ref(JSON.parse(localStorage.getItem('user')))

const getUserLogin = async() => {
  const response = await axios.get(`http://localhost:3030/api/user/row/get?userid=${userSession.value.userid}`)
  if (response.status == 200) {
    user.value = response.data.data
    // console.log(user.value.name)
  } else {
    console.error(`Error : ${response.statusText}`)
  }
}

onMounted(() => {
  getUserLogin()
})

</script>

<template>
  <div class="container p-1">
    <div class="card card-compact w-[30rem] bg-kuning-difest shadow-xl p-3 mx-auto mb-3">
      <div class="card-body">
        <div class="avatar mb-3">
          <div class="w-24 rounded-xl border border-base-100 shadow-md mx-auto">
            <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" />
          </div>
        </div>
        <h2 class="card-title text-2xl text-neutral-950">Hallo, Peserta DIFEST 5.0!</h2>
        <h2 class="text-lg text-neutral-950">Participant ID : {{ user.userid }}</h2>
        <h2 class="text-lg text-neutral-950">Nama : {{ user.name }}</h2>
        <h2 class="text-lg text-neutral-950">Email : {{ user.email }}</h2>
        <h2 class="text-lg text-neutral-950">No HP : {{ user.phone }}</h2>
      </div>
    </div>
    <div class="flex justify-between w-[30rem] mx-auto">
      <!-- <router-link to="/" class="btn btn-warning">Edit Profile</router-link> -->
      <router-link :to="{ name: 'Ubah Password Participant' }" class="btn btn-warning">Ubah Password</router-link>
    </div>
  </div>
</template>