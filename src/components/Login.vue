<template>
  <el-container class="body">
    <el-header>创建宠物助手</el-header>
    <el-main>
      <el-card shadow="hover">
        <el-row type="flex" justify="center" align="middle" class="image2">
          <img src="@/assets/image/head.png" />
        </el-row>
        <el-row type="flex" justify="center" align="middle" class="row-bg">
          <el-col><label>昵称设置：</label></el-col>
          <el-col>
            <el-input v-model="formData.name" size="small" placeholder="请输入昵称" />
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" class="row-bg">
          <el-col><label>链接设置：</label></el-col>
          <el-col>
            <el-input v-model="formData.link" size="small" placeholder="请输入链接" />
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" class="row-bg">
          <el-col><label>性格设置：</label></el-col>
          <el-col>
            <el-radio v-model="formData.character" label="1" border size="medium">活泼女生</el-radio>
            <el-radio v-model="formData.character" label="2" border size="medium">幽默风趣</el-radio>
            <el-radio v-model="formData.character" label="3" border size="medium">沉稳大叔</el-radio>
            <el-radio v-model="formData.character" label="4" border size="medium">温柔暖男</el-radio>
          </el-col>
        </el-row>
        <el-row type="flex" align="middle" justify="center" class="row-bg">
          <el-button type="danger" @click="goToAnotherPage">设置为宠物助手</el-button>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data: function() {
    return {
      formData: {
        name: '',
        link: '',
        character: '1'
      }
    }
  },
  methods: {
    //登录验证
    submitForm() {
      // let data = {
      //     username : this.ruleForm.username,
      //     password : this.ruleForm.password
      // }
      this.$http.admin.verifyPassword(JSON.stringify(this.ruleForm)).then(res => {
        if (res.code === 0) {
          localStorage.setItem('username', this.ruleForm.username)
          this.$router.push('/dashboard/home')
          this.notify('登陆成功', 'success')
        } else {
          this.notify('登陆失败', 'error')
        }
      })
    },
    goToAnotherPage() {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.row-bg {
  padding: 8px 8px;
  background-color: #fbfbfb85;
  border-radius: 4px;
}

.el-row {
  margin-bottom: 10px;
}

.el-col {
  border-radius: 4px;
}

.body {
  text-align: center;
  height: 100%;
}
.header {
  font-weight: bold;
  font-size: large;
}
.el-radio-group {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  text-align: center; /* 文本居中对齐 */
}

.image2 img {
  display: block;
  width: 50%;
  height: 50%;
  margin-right: 5px;
}

.el-header,
.el-footer {
  text-align: center;
  line-height: 60px;
  font-weight: bold;
  font-size: 24px;
}

.el-radio.is-bordered + .el-radio.is-bordered {
  margin-left: 0px;
}
.el-radio {
  margin-right: 30px;
}
</style>
