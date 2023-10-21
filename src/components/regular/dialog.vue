<template>
  <CusDialog :visible="visible" @on-close="handleClose" width="1000px" form :title="$t('fm.config.widget.Regular')"
    :action="true" @on-submit="handleSubmit" >
    <div class="content">
      <el-row>
        <el-col :span="8">
          <div class="left">
            <ul>
              <li>选择下方常用表达式或自定义输入</li>
              <li v-for="(item, index) in list" :key="index" @click="setel(index)">{{ item.label }}</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="right">
            <div class="top">
              正则表达式：<span>{{ el.label }}</span>
              <el-input type="textarea" class="input-style" resize="none" rows="3" v-model='el.value'></el-input>
            </div>
            <div class="mid">
              错误时提示
              <el-input class="input-style" v-model='el.tip'></el-input>
            </div>
            <div class="bott">
              测试
              <el-input v-model="text" class="input-style" placeholder="测试" input-style=""
                @input="check(text)"></el-input>
            </div>
            <el-alert v-if="text && el.tip" class="alert" :title='title' :type='type' />
          </div>
        </el-col>
      </el-row>
    </div>
  </CusDialog>
</template>
<script >
import CusDialog from '../CusDialog.vue'
export default {
  components: {
    CusDialog,
  },
  props: ['dataAll'],
  emits: ['on-confirm'],
  data: () => ({
    list: [
      {
        label: '字母',
        value: /^[A-Za-z]*$/,
        tip: '请输入字母'
      },
      {
        label: '字母数字',
        value: /^[A-Za-z0-9]*$/,
        tip: '请输入字母数字'
      },
      {
        label: '数字',
        value: /^\d*$/,
        tip: '请输入数字'
      },
      {
        label: '大写字母',
        value: /^[A-Z]*$/,
        tip: '请输入大写字母'
      },
      {
        label: '小写字母',
        value: /^[a-z]*$/,
        tip: '请输入小写字母'
      },
      {
        label: '6个字母',
        value: /^\w{6}$/,
        tip: '请输入6个字母'
      },
      {
        label: '6个数字',
        value: /^\d{6}$/,
        tip: '请输入6个数字'
      },
      {
        label: '邮政编码',
        value: /^\d{4,6}$/,
        tip: '请输入邮政编码'
      },
      {
        label: 'IP地址',
        value: /^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/,
        tip: '请输入IP地址'
      },
      {
        label: '链接',
        value: /^https?:\/\/\w+\.\w+\.\w+.*$/,
        tip: '请输入链接'
      },
      {
        label: '车牌号',
        value: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]\w{4,9}$/,
        tip: '请输入车牌号'
      },
      {
        label: '身份证号',
        value: /^\d{17}[\dX]$/,
        tip: '请输入身份证号'
      },
      {
        label: '中国护照',
        value: /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,
        tip: '请输入中国护照'
      }
    ],
    visible: false,
    el: '',
    text: '',
    title: '',
    type: '',
  }),
  methods: {
    open() {
      this.visible = true
    },
    setel(index) {
      this.el = this.list[index]
    },
    handleSubmit() {
      this.$emit('on-confirm', this.el)
      this.handleClose()
    },
    check(text) {
      let alert = document.getElementsByClassName('alert')
      let ex = this.el.value
      if (this.el == '') {
      } else {
        if (ex.test(this.text)) {
          this.title = '测试通过'
          this.type = 'success'
        } else {
          this.title = this.el.tip
          this.type = 'error'
        }
      }
    },
    handleClose() {
      this.visible = false
      if (this.el == '') {
        this.dataAll.pattern = false
        this.dataAll.patternCheck = false
      } else {
        this.dataAll.pattern = true
        this.dataAll.patternCheck = true
      }
    }
  }
}
</script>
<style lang="scss">
.el-dialog__title {
  color: black;
  font-size: 16px;
  font-weight: bolder;
  float: left;
  margin-left: 20px;
}

.input-style {
  margin-top: 10px;
}

.el-textarea__inner {
  margin-top: 10px;
}

.el-dialog__header {
  height: 6vh;
  border-bottom: 1px solid rgb(197, 197, 197);
}

.el-dialog__title {
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif !important;
  margin-top: 10px;
}



.content {
  margin-top: -20px;
  padding: 0px;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif !important;
}

.left {

  border-right: 1px solid rgb(197, 197, 197);
  margin-left: 10px;
}

ul {
  padding-top: 20px;
}

li {
  margin-bottom: 10px;
  cursor: pointer;
}

.right {
  padding-top: 20px;
  padding-left: 20px;

}

.top {
  font-weight: bold;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 30px;
}

.mid {
  font-weight: bold;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 30px;
}

.bott {
  font-weight: bold;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5px;
}

.alert {
  width: 90%;
  height: 5vh;
  margin: 0 auto;
}
</style>