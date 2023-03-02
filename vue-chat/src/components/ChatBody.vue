<script setup lang="ts">
import type { IMessage, ITyping } from '../../../models'
import { inject, ref } from 'vue'
import router from '@/router'

const me = localStorage.getItem('userName')
const socket = inject('socket') as any
const messages = ref([] as IMessage[])

const typingStatus = ref('')
socket.on('messageResponse', (data: IMessage) => (messages.value = [...messages.value, data]))
socket.on('typingResponse', (data: ITyping) => (typingStatus.value = data))

function handleLeaveChat() {
  localStorage.removeItem('userName')
  socket.emit('userLeft', {
    userName: me,
    socketID: socket.id
  })
  router.push('/')
}
</script>

<template>
  <header class="chat__mainHeader">
    <p>Hangout with Colleagues</p>

    <button class="leaveChat__btn" @click="handleLeaveChat">LEAVE CHAT</button>
  </header>

  <div class="message__container">
    <div v-for="message in messages" :key="message.text">
      <div class="message__chats" v-if="message.name === me">
        <p class="sender__name">You</p>
        <div class="message__sender">
          <p>{{ message.text }}</p>
        </div>
      </div>

      <div class="message__chats" :key="message.id" v-if="message.name !== me">
        <p>{{ message.name }}</p>
        <div class="message__recipient">
          <p>{{ message.text }}</p>
        </div>
      </div>
    </div>

    <div class="message__status">
      <p>{{ typingStatus }}</p>
    </div>
    <div></div>
  </div>
</template>
