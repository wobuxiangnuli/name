<template>
  <CusDialog :visible="visible" @on-close="handleClose" width="1000px" form :title="$t('fm.config.widget.Regular')"
    :action="true" @on-submit="handleSubmit">
    <index @get-value="setvalue"></index>
  </CusDialog>
</template>
<script >
import CusDialog from '../CusDialog.vue'
import index from "./index.vue";


export default {
  components: {
    CusDialog,
    index
  },
  props: ['dataAll'],
  emits: ['on-confirm'],
  data: () => ({
    visible: false,
    list: ''
  }),
  methods: {
    open() {
      this.list = ''
      this.visible = true
    },
    setvalue(value) {
      this.list = value
    },
    handleSubmit() {
      this.$emit('on-confirm', this.list)
      this.handleClose()
    },

    
    handleClose(){
      this.visible = false
      if(this.list == ''){
        this.dataAll.pattern = false
        this.dataAll.patternCheck = false
      }else{
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
</style>