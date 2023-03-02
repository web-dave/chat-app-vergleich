<script setup lang="ts">
import router from '@/router'
import { inject } from 'vue'
let userName = ''
const socket = inject('socket') as any

function handleSubmit(e: any) {
  e.preventDefault()
  localStorage.setItem('userName', userName)
  socket.emit('newUser', { userName, socketID: socket.id })
  console.log(userName)
  router.push('/chat')
}
</script>

<template>
  <form class="home__container" novalidate @submit="handleSubmit">
    <h2 class="home__header">Sign in to Open Chat</h2>
    <label for="username">Username</label>
    <input class="username__input" type="text" minLength="6" name="username" v-model="userName" />
    <button class="home__cta">SIGN IN</button>
  </form>
</template>
