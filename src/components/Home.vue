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
export default {
  data() {
    return {
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
          imageUrl: require(`@/assets/image/开源1.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require(`@/assets/image/开源2.png`), // 修改为实际的图片路径
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
          imageUrl: require(`@/assets/image/闭源1.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require(`@/assets/image/闭源2.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require(`@/assets/image/闭源3.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require(`@/assets/image/闭源4.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require(`@/assets/image/闭源5.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
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
        },
        {
          imageUrl: require(`@/assets/image/6.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require(`@/assets/image/9.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        },
        {
          imageUrl: require(`@/assets/image/10.png`), // 修改为实际的图片路径
          option1: {
            text: 'Pre'
          },
          option2: {
            text: 'Next'
          }
        }
      ],
      currentStepIndex: 0
    }
  },
  methods: {
    goToNextStep(stepIndex) {
      // 逻辑处理用户选择的选项，例如更新状态或记录选择
      // ...
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
