<template>
  <div class="body">
    <el-main>
      <div v-for="(step, index) in steps" :key="index" class="chat-step" v-show="currentStepIndex === index">
        <el-card class="box-card">
          <img :src="step.imageUrl" alt="Step Image" class="step-image" />
          <div class="option-buttons">
            <el-row type="flex" align="middle" class="row-bg">
              <el-col :span="4" :offset="3">
                <el-button type="primary" @click="goToNextStep(index, 'option1')">{{ step.option1.text }}</el-button>
                <el-button type="primary" @click="goToNextStep(index, 'option2')">{{ step.option2.text }}</el-button></el-col
              >
              <el-col :span="10" v-if="index > 0">
                <el-button type="text" @click="goToPreviousStep(index)">返回上一页</el-button>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: Array.from({ length: 3 }, (_, i) => ({
        path: '@/assets/image/image' + i + '.jpg',
        imageUrl: require(`@/assets/image/image${i + 1}.jpg`), // 修改为实际的图片路径
        option1: {
          text: '喜欢'
        },
        option2: {
          text: '不喜欢'
        }
      })),
      currentStepIndex: 0
    }
  },
  methods: {
    goToNextStep(stepIndex, option) {
      // 逻辑处理用户选择的选项，例如更新状态或记录选择
      // ...
      console.log(`当前步骤: ${stepIndex}, 选择: ${option}`)
      // 进入下一个步骤
      if (stepIndex < this.steps.length - 1) {
        this.currentStepIndex++
        console.log(`进入下一步骤: ${this.currentStepIndex}`)
      } else {
        // 最后一个步骤完成后的逻辑，例如显示完成消息
        // ...
        console.log('完成所有步骤')
      }
    },
    goToPreviousStep(stepIndex) {
      if (stepIndex > 0) {
        this.currentStepIndex--
      }
    }
  }
}
</script>

<style>
.chat-container {
  padding: 5px;
}

.box-card {
  margin-bottom: 20px;
}

.step-image,
.result-image {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.option-buttons {
  align-items: center;
  justify-content: space-between;
}

.row-bg {
  padding: 8px 8px;
  background-color: #fbfbfb85;
  border-radius: 4px;
}
</style>
