<template>
  <div class="chat-container">
    <!-- 消息展示区域 -->
    <el-main class="chat-display">
      <div v-for="(message, index) in messages" :key="index" class="chat-message">
        <el-card :class="['message-card', message.isSentByUser ? 'user-message' : 'bot-message']">
          <div v-if="message.type === 'text'" class="message-content">{{ message.content }}</div>
          <div v-if="message.type === 'image'" class="message-content">
            <img :src="message.content" alt="Chat Image" class="chat-image" />
          </div>
        </el-card>
      </div>
    </el-main>

    <!-- 输入和发送区域 -->
    <el-footer class="chat-input">
      <el-input type="textarea" v-model="newMessage" placeholder="输入消息" @keyup.enter.native="sendMessage" class="input-message">
      </el-input>
      <el-button type="primary" icon="el-icon-send" @click="sendMessage"></el-button>
      <el-button type="primary" icon="el-icon-picture" @click="sendImage"></el-button>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: '',
      messages: [],
      imageToSend: 'https://via.placeholder.com/150' // 静态图片链接
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage) {
        this.messages.push({
          type: 'text',
          content: this.newMessage,
          isSentByUser: true
        })
        this.newMessage = ''
      }
    },
    sendImage() {
      this.messages.push({
        type: 'image',
        content: this.imageToSend,
        isSentByUser: true
      })

      // 模拟接收图片回复
      setTimeout(() => {
        this.messages.push({
          type: 'image',
          content: this.imageToSend, // 模拟接收相同的图片
          isSentByUser: false
        })
      }, 1000)
    }
  }
}
</script>

<style>
/* 样式代码，根据需要调整 */
.chat-container {
  /* 容器样式 */
}
.chat-display {
  /* 消息展示区域样式 */
}
.chat-input {
  /* 输入区域样式 */
}
.message-card {
  /* 消息卡片样式 */
}
.message-content {
  /* 消息内容样式 */
}
.chat-image {
  max-width: 100%;
  height: auto;
}
</style>
