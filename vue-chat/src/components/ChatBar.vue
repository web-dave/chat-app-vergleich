<script setup lang="ts">
import { inject, ref } from 'vue'
import type { IUser } from '../../../models'
const socket = inject('socket') as any

let users = ref([] as IUser[])
socket.on('newUserResponse', (data: IUser[]) => (users.value = data))
</script>
<template>
  <div className="chat__sidebar">
    <h2>Open Chat</h2>
    <div>
      <h4 className="chat__header">ACTIVE USERS</h4>
      <div className="chat__users">
        <p v-for="user in users" :key="user.socketID">{{ user.userName }}</p>
      </div>
    </div>
  </div>
</template>
