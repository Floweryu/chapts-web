<template>
  <div class="chat-container">
    <!-- 消息展示区域 -->
    <el-main class="chat-display">
      <div v-for="(message, index) in messages" :key="index" class="chat-message">
        <el-card :class="['message-card', message.isSentByUser ? 'user-message' : 'bot-message']">
          <div class="message-content">{{ message.content }}</div>
        </el-card>
      </div>
    </el-main>

    <!-- 输入和发送区域 -->
    <el-footer class="chat-input">
      <el-input type="textarea" v-model="newMessage" placeholder="输入消息" @keyup.enter.native="sendMessage" class="input-message">
      </el-input>
      <el-button type="primary" icon="el-icon-send" @click="sendMessage"></el-button>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: '',
      messages: []
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage) {
        this.messages.push({
          content: this.newMessage,
          isSentByUser: true
        })
        this.newMessage = ''

        // 模拟接收来自 ChatGPT 的回复
        setTimeout(() => {
          this.messages.push({
            content: '这是一个模拟的回复。',
            isSentByUser: false
          })
        }, 1000)
      }
    }
  }
}
</script>

<style>
.chat-container {
  max-width: 800px;
  margin: 20px auto;
  height: 80vh;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

.chat-display {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.chat-input {
  padding: 10px;
  background-color: #f7f7f7;
  border-top: 1px solid #eaeaea;
  display: flex;
  align-items: center;
}

.input-message {
  flex-grow: 1;
  margin-right: 10px;
  border-radius: 15px;
  border: 1px solid #dcdfe6;
  transition: all 0.3s ease;
}

.input-message:focus {
  border-color: #409eff; /* Element UI 主题蓝色 */
}

.send-button {
  padding: 0 20px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.send-button i {
  font-size: 24px;
}
</style>
