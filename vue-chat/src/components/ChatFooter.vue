<script setup lang="ts">
import { inject } from 'vue'
const socket = inject('socket') as any

let message = ''
const me = localStorage.getItem('userName')

function handleSendMessage(e: any) {
  e.preventDefault()
  if (me !== null) {
    socket.emit('message', {
      text: message,
      name: me,
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id
    })
  }
  message = ''
}
function handleTyping() {
  if (me !== null) {
    socket.emit('typing', me + ' is typing')
  }
}
</script>
<template>
  <div class="chat__footer">
    <form class="form" @submit="handleSendMessage">
      <input
        type="text"
        placeholder="Write message"
        class="message"
        name="message"
        v-model="message"
        @input="handleTyping"
      />
      <button class="sendBtn" type="submit">SEND</button>
    </form>
  </div>
</template>
