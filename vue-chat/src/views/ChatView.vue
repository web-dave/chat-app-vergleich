<script setup lang="ts">
import ChatBody from '../components/ChatBody.vue'
import ChatFooter from '../components/ChatFooter.vue'
import ChatBar from '../components/ChatBar.vue'
</script>

<template>
  <div class="chat">
    <ChatBar />

    <div class="chat__main">
      <ChatBody />
      <ChatFooter />
    </div>
  </div>
</template>
