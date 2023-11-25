<template>
  <div class="body">
    <el-main>
      <div v-for="(step, index) in steps" :key="index" class="chat-step" v-show="currentStepIndex === index">
        <el-card class="box-card">
          <div class="option-buttons">
            <el-row type="flex" align="middle" class="row-bg">
              <el-col :span="4" :offset="3">
                <el-button v-if="step.option1.text == '开源'" type="primary" @click="goToNextStep(index, step.option1)">{{
                  step.option1.text
                }}</el-button>
                <el-button type="primary" @click="goToNextStep(index, step.option2)">{{ step.option2.text }}</el-button></el-col
              >
              <el-col :span="10" v-if="index > 0">
                <el-button type="text" @click="goToPreviousStep(index)">Back</el-button>
              </el-col>
            </el-row>
          </div>
          <div style="width:1200px;height:600px">
            <img :src="step.imageUrl" alt="Step Image" style="width:100%;height:100%" />
          </div>
        </el-card>
      </div>
    </el-main>
  </div>
</template>

<script>
const images = [
  '@/assets/image/1.png',
  '@/assets/image/2.png',
  '@/assets/image/3.png',
  '@/assets/image/4.png',
  '@/assets/image/5.png',
  '@/assets/image/开闭.png',
  '@/assets/image/选择.png'
]
export default {
  created() {
    this.images = images
  },
  data() {
    return {
      images: [],
      close: [
        {
          imageUrl: require('@/assets/image/闭源1.png'), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require('@/assets/image/闭源2.png'), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require('@/assets/image/闭源3.png'), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require('@/assets/image/闭源4.png'), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require('@/assets/image/闭源5.png'), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        }
      ],
      open: [
        {
          imageUrl: require('@/assets/image/开源1.png'), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require('@/assets/image/开源2.png'), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        }
      ],
      select: ['@/assets/image/6.png', '@/assets/image/9.png', '@/assets/image/10.png'],
      steps: [
        {
          imageUrl: require(`@/assets/image/1.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require(`@/assets/image/2.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require(`@/assets/image/3.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require(`@/assets/image/4.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require(`@/assets/image/5.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require(`@/assets/image/开闭.png`), // 修改为实际的图片路径
          option1: {
            text: '开源'
          },
          option2: {
            text: '闭源'
          }
        },
        {
          imageUrl: require(`@/assets/image/选择.png`), // 修改为实际的图片路径
          option1: {
            text: 'llya'
          },
          option2: {
            text: 'Altman'
          }
        }
      ],
      currentStepIndex: 0
    }
  },
  methods: {
    goToNextStep(stepIndex, option) {
      // 逻辑处理用户选择的选项，例如更新状态或记录选择
      // ...
      console.log(`当前步骤: ${stepIndex}, 选择: ${option.text}`)
      if (option.text == '开源') {
        this.steps = this.open
        this.currentStepIndex = 0
        console.log(this.step)
      } else if (option.text == '闭源') {
        this.steps = this.close
        this.currentStepIndex = 0
        console.log(this.step)
      }
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
  align-items: center;
  justify-content: center;
  display: flex;
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
