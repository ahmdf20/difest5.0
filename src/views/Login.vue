<script setup>
import router from '@/router';
// import { redis } from 'redis'
import axios from 'axios';
import { ref } from 'vue';

const userID = ref('');
const password = ref('');


const handleLogin = async () => {
  try {
    const response = await axios.post(`http://localhost:3030/api/login`, {
      userID: userID.value,
      password: password.value,
    })
    if (response.status == 201) {
      const data = {
        userid: response.data.data.user.userid,
        role: response.data.data.user.role,
        token: response.data.data.token
      }
      localStorage.setItem('user', JSON.stringify(data))
      if (data.role == 'admin') {
        router.push('/admin/dashboard')
      }
      if (data.role == 'participant') {
        router.push('/user/profile')
      }
    } else {
      console.error(response.statusText)
    }
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>
  <div class="flex h-screen items-center justify-center bg-kuning-difest">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title mx-auto">Login</h2>

        <form @submit.prevent="handleLogin">
          <div class="form-control">
            <label class="label">
              <span class="label-text">ID Peserta</span>
            </label>
            <input type="text" v-model="userID" placeholder="ID Peserta" class="input input-bordered" />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" v-model="password" placeholder="password" class="input input-bordered" />
          </div>

          <div class="form-control mt-6">
            <button type="submit" class="btn bg-hijau-difest text-neutral-100" @click="handleLogin">Login</button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>


