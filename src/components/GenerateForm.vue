<template>
  <div :style="{width: data.config && data.config.width}" class="fm-form"
    :class="{
      ['fm-'+formStyleKey]: true,
      'is-print': printRead
    }"
  >
    <el-form :ref="formRef"
      :key="formKey"
      v-if="formShow"
      :class="{
        [data.config && data.config.customClass]:  (data.config && data.config.customClass) ? true : false,
        'no-label-form': data.config && (data.config.labelWidth == 0)
      }"
      :size="data.config && data.config.size"
      :model="models" 
      :rules="rules" 
      :label-position="data.config && data.config.labelPosition" 
      :disabled="!edit"
      :label-width="data.config && data.config.labelWidth + 'px'"
      :validate-on-rule-change="false"
      :label-suffix="data.config?.labelSuffix ? ' : ' : ' '"
      >

      <template v-for="item in data.list">
        <generate-col-item
          v-if="item.type == 'grid'"
          :key="item.key"
          :model="models"
          :rules="rules"
          :element="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          @input-change="onInputChange"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :form-component="$refs[formRef]"
          :group="''"
          :field-node="''"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-col-item>

        <generate-tab-item
          v-else-if="item.type == 'tabs'"
          :key="item.key"
          :model="models"
          :rules="rules"
          :element="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          @input-change="onInputChange"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :form-component="$refs[formRef]"
          :group="''"
          :field-node="''"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-tab-item>

        <generate-collapse
          v-else-if="item.type == 'collapse'"
          :key="item.key"
          :model="models"
          :rules="rules"
          :element="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          @input-change="onInputChange"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :form-component="$refs[formRef]"
          :group="''"
          :field-node="''"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-collapse>

        <generate-report
          v-else-if="item.type == 'report'"
          :key="item.key"
          :model="models"
          :rules="rules"
          :element="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          @input-change="onInputChange"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :form-component="$refs[formRef]"
          :group="''"
          :field-node="''"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-report>

        <generate-inline
          v-else-if="item.type == 'inline'"
          :key="item.key"
          :model="models"
          :rules="rules"
          :element="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          @input-change="onInputChange"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :form-component="$refs[formRef]"
          :group="''"
          :field-node="''"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-inline>

        <generate-dialog
          v-else-if="item.type == 'dialog'"
          :key="item.key"
          v-model:models="models"
          :rules="rules"
          :element="item"
          :remote="remote"
          :blanks="blanks"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :form-component="$refs[formRef]"
          :group="''"
          :field-node="''"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-dialog>

        <generate-card
          v-else-if="item.type == 'card'"
          :key="item.key"
          :model="models"
          :rules="rules"
          :element="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          @input-change="onInputChange"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :form-component="$refs[formRef]"
          :group="''"
          :field-node="''"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-card>

        <generate-form-item
          v-else
          :key="item.key"
          :models="models"
          :rules="rules"
          :widget="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          @input-change="onInputChange"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :form-component="$refs[formRef]"
          :group="''"
          :field-node="''"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
import GenerateFormItem from './GenerateFormItem.vue'
import GenerateColItem from './GenerateColItem.vue'
import GenerateTabItem from './GenerateTabItem.vue'
import GenerateReport from './GenerateReport.vue'
import GenerateInline from './GenerateInline.vue'
import GenerateCollapse from './GenerateCollapse.vue'
import GenerateDialog from './GenerateDialog.vue'
import GenerateCard from './GenerateCard.vue'
import {loadJs, updateStyleSheets, splitStyleSheets, clearStyleSheets, consoleError, getBindModels } from '../util/index.js'
import { updateClassName } from '../util/reuse-methods.js'
import { EventBus } from '../util/event-bus.js'
import _ from 'lodash'
import axios from 'axios'
import { defineAsyncComponent } from 'vue'
import { exportPDF } from '../util/export.js'

export default {
  name: 'fm-generate-form',
  components: {
    GenerateFormItem,
    GenerateColItem,
    GenerateTabItem,
    GenerateReport,
    GenerateInline,
    GenerateCollapse,
    GenerateDialog,
    GenerateCard
  },
  props: {
    data: {
      type: Object,
      default: () => ({
        "list": [],
        "config": {
          "labelWidth": 100,
          "labelPosition": "right",
          "size": "small",
          "customClass": "",
          "ui": "element",
          "layout": "horizontal",
        }
      })
    },
    remote: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: Object,
      default: () => ({})
    },
    edit: {
      type: Boolean,
      default: true
    },
    printRead: {
      type: Boolean,
      default: false
    },
    remoteOption: {
      type: Object,
      default: () => ({})
    },
    preview: {
      type: Boolean,
      default: false
    },
    platform: {
      type: String,
      default: 'pc'
    }
  },
  emits: ['on-change'],
  data () {
    return {
      models: {},
      rules: {},
      blanks: [],
      displayFields: {},
      dataBindFields: {},
      generateShow: false,
      resetModels: {},
      formKey: Math.random().toString(36).slice(-8),
      formStyleKey: Math.random().toString(36).slice(-8),
      formValue: this.value,
      formShow: false,
      formRef: Math.random().toString(36).slice(-8) + 'Form',
      containerKey: Math.random().toString(36).slice(-8),
      dataSourceValue: [],
      eventFunction: {},
      instanceObject: {},
      dataSourceInterface: []
    }
  },
  created () {

    this._initForm()
  },
  mounted () {
    
    const _this = this

    this.$nextTick(() => {
      this.eventFunction['mounted'] && this.eventFunction['mounted']()
      
    })
  },
  beforeUnmount () {
    
    let head = '.fm-' + this.formStyleKey + ' '
    clearStyleSheets(head)
  },
  provide() {
    return {
      'generateComponentInstance': this.generateComponentInstance,
      'deleteComponentInstance': this.deleteComponentInstance,
      'eventScriptConfig': this.getEventScriptConfig,
      'getFormComponent': this.getFormComponent,
      'onChange': this._changeFormValue
    }
  },
  methods: {
    getFormComponent () {
      return this.$refs[this.formRef]
    },
    _changeFormValue (value, field) {
      this.models[field] = value

      this.$emit('on-change', field, value, this.models)
    },
    _initForm () {
      this.formShow = false

      this.models = {}
      this.rules = {}
      this.blanks = []
      this.displayFields = {}
      this.dataBindFields = {}
      this.resetModels = {}
      this.dataSourceValue = []
      this.eventFunction = []
      this.dataSourceInterface = []

      if (Object.keys(this.data).length) {
        this.generateModel(this.data.list)
      } else {
        this.generateModel([])
      }

      this.resetModels = _.cloneDeep(this.models)

      this.models = {...this.models}
      

      this.$nextTick(() => {
        this.formShow = true

        if (this.data.config && this.data.config.styleSheets) {
          let head = '.fm-' + this.formStyleKey + ' '

          updateStyleSheets(splitStyleSheets(this.data.config.styleSheets), head)
        }

        this.loadDataSource()

        this.loadEvents()

        this.$nextTick(() => {
          this.eventFunction['refresh'] && this.eventFunction['refresh']()
        })
      })
    },
    getEventScriptConfig () {
      return this.data?.config?.eventScript ?? []
    },
    loadEvents () {
      if (this.data.config && this.data.config.eventScript) {
        for (let i = 0; i < this.data.config.eventScript.length; i++) {
          let currentScript = this.data.config.eventScript[i]

          this.eventFunction[currentScript.key] = Function(currentScript.func).bind(this)
        }
      }
    },
    triggerEvent (eventName, args) {
      if (this.data.config && this.data.config.eventScript) {
        let eventScript = this.data.config.eventScript.find(item => item.name == eventName)

        if (eventScript) {
          return this.eventFunction[eventScript.key](args)
        }
      }
    },
    loadDataSource () {
      for (let i = 0; i < this.dataSourceInterface.length; i++) {
        let curRequest = this.dataSourceInterface[i]
        let requestObj = this.data.config.dataSource.find(item => item.key == curRequest.key)
        if (requestObj && requestObj.auto)
        requestObj.name && this.sendRequest(requestObj.name, curRequest.args).then(data => {
          curRequest.fields.forEach(field => {
            let curKey = field + '.' + curRequest.key
            let sourceValue = this.dataSourceValue.find(item => item.key === curKey)

            if (sourceValue) {
              sourceValue.value = data
            } else {
              this.dataSourceValue.push({
                key: curKey, 
                value: data
              })
            }
          })
        })
      }
      // 处理需要初始化请求但没有进行绑定的数据源
      if (this.data.config?.dataSource?.length > 0) {
        for (let i = 0; i < this.data.config.dataSource.length; i++) {
          let currentDataSource = this.data.config.dataSource[i]

          if (currentDataSource.auto && this.dataSourceInterface.findIndex(item => item.key == currentDataSource.key) < 0) {
            this.sendRequest(currentDataSource.name, {})
          }
        }
      }
    },

    refreshFieldDataSource (field, args) {
      let curRequest = this.dataSourceInterface.find(item => item.fields.includes(field))

      if (curRequest) {
        let requestName = this.data.config.dataSource.find(item => item.key == curRequest.key)?.name
        requestName && this.sendRequest(requestName, {...curRequest.args, ...args}).then(data => {
          let curKey = field + '.' + curRequest.key
          let sourceValue = this.dataSourceValue.find(item => item.key === curKey)

          if (sourceValue) {
            sourceValue.value = data
          } else {
            this.dataSourceValue.push({
              key: curKey, 
              value: data
            })
          }
        })
      }
    },

    getFieldDataSource (field) {
      let curRequest = this.dataSourceInterface.find(item => item.fields.includes(field))

      if (curRequest) {
        let curKey = field + '.' + curRequest.key

        let sourceValue = this.dataSourceValue.find(item => item.key === curKey)

        if (sourceValue) {
          return sourceValue.value
        }
      }

      return null
    },
    
    sendRequest(name, args = {}) {
      return new Promise((resolve, reject) => {
        let currentDataSource = this.data.config.dataSource.find(item => item.name === name)

        if (currentDataSource) {
          let options = {
            method: currentDataSource.method,
            url: currentDataSource.url,
            headers: currentDataSource.headers,
            params: currentDataSource.params
          }

          //请求发送前处理函数
          if (currentDataSource.requestFunc) {
            const requestDynamicFunc = Function('config, args', currentDataSource.requestFunc).bind(this)

            options = requestDynamicFunc(options, args)
          }

          axios(options).then(res => {

            let data = res

            if (currentDataSource.responseFunc) {
              const dynamicFunc = Function('res, args', currentDataSource.responseFunc).bind(this)

              data = dynamicFunc(res.data, args)

              resolve(data)
            } else {
              resolve(res.data)
            }
          }).catch((error) => {
            //请求错误处理函数
            if (currentDataSource.errorFunc) {
              const errorDynamicFunc = Function('error', currentDataSource.errorFunc).bind(this)

              errorDynamicFunc(error)
            }

            reject(error)
          })
        }
      })
    },
    generateSubformModel (subName, genList, dataBindFields) {
      for (let i = 0; i < genList.length; i++) {
        if (genList[i].type === 'grid') {
          genList[i].columns.forEach(item => {
            this.generateSubformModel(subName, item.list, dataBindFields)
          })
        } else if (genList[i].type === 'tabs') {
          genList[i].tabs.forEach(item => {
            this.generateSubformModel(subName, item.list, dataBindFields)
          })
        } else if (genList[i].type === 'collapse') {
          genList[i].tabs.forEach(item => {
            this.generateSubformModel(subName, item.list, dataBindFields)
          })
        } else if (genList[i].type === 'report') {
          genList[i].rows.forEach(row => {
            row.columns.forEach(column => {
              this.generateSubformModel(subName, column.list, dataBindFields)
            })
          })
        } else if (genList[i].type === 'inline') {
          this.generateSubformModel(subName, genList[i].list, dataBindFields)
        } else if (genList[i].type === 'card') {
          this.generateSubformModel(subName, genList[i].list, dataBindFields)
        } else {

          if (genList[i].type === 'blank') {
            this.blanks.push({
              name: genList[i].model
            })
          }

          if (genList[i].options.dataBind) {
            if (['subform', 'group', 'table'].includes(genList[i].type)) {
              dataBindFields[genList[i].model] = {}
            } else {
              dataBindFields[genList[i].model] = true
            }
          }

          genList[i].tableColumns && genList[i].tableColumns.length && genList[i].tableColumns.forEach(item => {
            if (item.type === 'blank') {
              this.blanks.push({
                name: item.model
              })
            }

            if (item.options.dataBind && genList[i].options.dataBind) {
              dataBindFields[genList[i].model][item.model] = true
            }

            // 处理 rules
            this._generateRules(`${subName}.${genList[i].model}.${item.model}`, item.rules)

            // 处理子表单中的DataSource
            this._generateDataSource(item, `${subName}.${genList[i].model}.${item.model}`)
          })

          if (genList[i].type == 'subform') {
            this.generateSubformModel(`${subName}.${genList[i].model}`, genList[i].list, dataBindFields[genList[i].model] || {})
          }

          if (genList[i].type == 'group') {
            this.generateGroupModel(`${subName}.${genList[i].model}`, genList[i].list, dataBindFields[genList[i].model] || {})
          }

          this._generateRules(`${subName}.${genList[i].model}`, genList[i].rules)

          // 处理子表单中的DataSource
          this._generateDataSource(genList[i], `${subName}.${genList[i].model}`)
        }
      }
    },
    generateDialogModel (dialogName, genList, dataBindFields) {
      for (let i = 0; i < genList.length; i++) {
        if (genList[i].type === 'grid') {
          genList[i].columns.forEach(item => {
            this.generateDialogModel(dialogName, item.list, dataBindFields)
          })
        } else if (genList[i].type === 'tabs') {
          genList[i].tabs.forEach(item => {
            this.generateDialogModel(dialogName, item.list, dataBindFields)
          })
        } else if (genList[i].type === 'collapse') {
          genList[i].tabs.forEach(item => {
            this.generateDialogModel(dialogName, item.list, dataBindFields)
          })
        } else if (genList[i].type === 'report') {
          genList[i].rows.forEach(row => {
            row.columns.forEach(column => {
              this.generateDialogModel(dialogName, column.list, dataBindFields)
            })
          })
        } else if (genList[i].type === 'inline') {
          this.generateDialogModel(dialogName, genList[i].list, dataBindFields)
        } else if (genList[i].type === 'card') {
          this.generateDialogModel(dialogName, genList[i].list, dataBindFields)
        } else {

          if (genList[i].type === 'blank') {
            this.blanks.push({
              name: genList[i].model
            })
          }

          if (genList[i].options.dataBind) {
            if (['subform', 'group', 'table'].includes(genList[i].type)) {
              dataBindFields[genList[i].model] = {}
            } else {
              dataBindFields[genList[i].model] = true
            }
          }

          if (genList[i].type == 'subform') {
            this.generateSubformModel(`${dialogName}.${genList[i].model}`, genList[i].list, dataBindFields[genList[i].model] || {})
          }

          if (genList[i].type == 'group') {
            this.generateGroupModel(`${dialogName}.${genList[i].model}`, genList[i].list, dataBindFields[genList[i].model] || {})
          }

          genList[i].tableColumns && genList[i].tableColumns.length && genList[i].tableColumns.forEach(item => {
            if (item.type === 'blank') {
              this.blanks.push({
                name: item.model
              })
            }

            if (item.options.dataBind && genList[i].options.dataBind) {
              dataBindFields[genList[i].model][item.model] = true
            }

            // 处理 rules
            this._generateRules(`${dialogName}.${genList[i].model}.${item.model}`, item.rules)

            // 处理子表单中的DataSource
            this._generateDataSource(item, `${dialogName}.${genList[i].model}.${item.model}`)
          })

          this._generateRules(`${dialogName}.${genList[i].model}`, genList[i].rules)

          // 处理弹框中的DataSource
          this._generateDataSource(genList[i], `${dialogName}.${genList[i].model}`)
        }
      }
    },
    generateGroupModel (groupName, genList, dataBindFields) {
      for (let i = 0; i < genList.length; i++) {
        if (genList[i].type === 'grid') {
          genList[i].columns.forEach(item => {
            this.generateGroupModel(groupName, item.list, dataBindFields)
          })
        } else if (genList[i].type === 'tabs') {
          genList[i].tabs.forEach(item => {
            this.generateGroupModel(groupName, item.list, dataBindFields)
          })
        } else if (genList[i].type === 'collapse') {
          genList[i].tabs.forEach(item => {
            this.generateGroupModel(groupName, item.list, dataBindFields)
          })
        } else if (genList[i].type === 'report') {
          genList[i].rows.forEach(row => {
            row.columns.forEach(column => {
              this.generateGroupModel(groupName, column.list, dataBindFields)
            })
          })
        } else if (genList[i].type === 'inline') {
          this.generateGroupModel(groupName, genList[i].list, dataBindFields)
        } else if (genList[i].type === 'card') {
          this.generateGroupModel(groupName, genList[i].list, dataBindFields)
        } else {

          if (genList[i].type === 'blank') {
            this.blanks.push({
              name: genList[i].model
            })
          }

          if (genList[i].options.dataBind) {
            if (['subform', 'group', 'table'].includes(genList[i].type)) {
              dataBindFields[genList[i].model] = {}
            } else {
              dataBindFields[genList[i].model] = true
            }
          }

          if (genList[i].type == 'subform') {
            this.generateSubformModel(`${groupName}.${genList[i].model}`, genList[i].list, dataBindFields[genList[i].model] || {})
          }

          if (genList[i].type == 'group') {
            this.generateGroupModel(`${groupName}.${genList[i].model}`, genList[i].list, dataBindFields[genList[i].model] || {})
          }

          genList[i].tableColumns && genList[i].tableColumns.length && genList[i].tableColumns.forEach(item => {
            if (item.type === 'blank') {
              this.blanks.push({
                name: item.model
              })
            }

            if (item.options.dataBind && genList[i].options.dataBind) {
              dataBindFields[genList[i].model][item.model] = true
            }

            // 处理 rules
            this._generateRules(`${groupName}.${genList[i].model}.${item.model}`, item.rules)

            // 处理子表单中的DataSource
            this._generateDataSource(item, `${groupName}.${genList[i].model}.${item.model}`)
          })

          this._generateRules(`${groupName}.${genList[i].model}`, genList[i].rules)

          // 处理弹框中的DataSource
          this._generateDataSource(genList[i], `${groupName}.${genList[i].model}`)
        }
      }
    },
    generateModel (genList) {
      for (let i = 0; i < genList.length; i++) {
        if (genList[i].type === 'grid') {
          this.displayFields[genList[i].model] = !genList[i].options.hidden

          genList[i].columns.forEach(item => {
            this.generateModel(item.list)
          })
        } else if (genList[i].type === 'tabs') {
          genList[i].tabs.forEach(item => {
            this.generateModel(item.list)
          })

          this.displayFields[genList[i].model] = !genList[i].options.hidden
        } else if (genList[i].type === 'collapse') {
          genList[i].tabs.forEach(item => {
            this.generateModel(item.list)
          })

          this.displayFields[genList[i].model] = !genList[i].options.hidden
        } else if (genList[i].type === 'report') {
          genList[i].rows.forEach(row => {
            row.columns.forEach(column => {
              this.generateModel(column.list)
            })
          })

          this.displayFields[genList[i].model] = !genList[i].options.hidden
        } else if (genList[i].type === 'inline') {
          this.generateModel(genList[i].list)

          this.displayFields[genList[i].model] = !genList[i].options.hidden
        } else if (genList[i].type === 'card') {
          this.generateModel(genList[i].list)

          this.displayFields[genList[i].model] = !genList[i].options.hidden
        } else {
          if (Object.keys(this.formValue).indexOf(genList[i].model) >= 0) {
            this.models[genList[i].model] = this.formValue[genList[i].model]
            
            this.displayFields[genList[i].model] = !genList[i].options.hidden

            if (genList[i].type === 'blank') {
              this.blanks.push({
                name: genList[i].model
              })
            }

          } else {
            if (genList[i].type === 'blank') {
              // bound the default value
              this.models[genList[i].model] = genList[i].options.defaultType === 'String' ? '' : (genList[i].options.defaultType === 'Object' ? {} : [])
              this.displayFields[genList[i].model] = !genList[i].options.hidden

              this.blanks.push({
                name: genList[i].model
              })
            } else {
              this.models[genList[i].model] = _.cloneDeep(genList[i].options.defaultValue)
              this.displayFields[genList[i].model] = !genList[i].options.hidden
            }
          }

          if ((Object.keys(genList[i].options).indexOf('dataBind') < 0 || genList[i].options.dataBind) && genList[i].key && genList[i].model) {
            
            if (['subform', 'table', 'dialog', 'group'].includes(genList[i].type)) {
              this.dataBindFields[genList[i].model] = {}
            } else {
              this.dataBindFields[genList[i].model] = true
            }
          }

          if (genList[i].type == 'subform') {
            this.generateSubformModel(genList[i].model, genList[i].list, this.dataBindFields[genList[i].model] || {})
          }

          if (genList[i].type == 'dialog') {
            this.generateDialogModel(genList[i].model, genList[i].list, this.dataBindFields[genList[i].model] || {})
          }

          if (genList[i].type == 'group') {
            this.generateGroupModel(genList[i].model, genList[i].list, this.dataBindFields[genList[i].model] || {})
          }

          genList[i].tableColumns && genList[i].tableColumns.length && genList[i].tableColumns.forEach(item => {
            if (item.type === 'blank') {
              this.blanks.push({
                name: item.model
              })
            }

            if (item.options.dataBind && genList[i].options.dataBind) {
              this.dataBindFields[genList[i].model][item.model] = true
            }

            // 处理 rules
            this._generateRules(`${genList[i].model}.${item.model}`, item.rules)

            // 处理子表单中的DataSource
            this._generateDataSource(item, `${genList[i].model}.${item.model}`)
          })

          this._generateRules(genList[i].model, genList[i].rules)

          // 处理DataSource
          this._generateDataSource(genList[i], genList[i].model)
        }
      }
    },
    _generateDataSource (element, model) {
      if (element.options.remoteType === 'datasource' && element.options.remoteDataSource) {
        this._setDataSourceInterface(model, element.options.remoteArgs, element.options.remoteDataSource)
      }
      if ((element.type == 'imgupload' || element.type == 'fileupload')
        && element.options.tokenType == 'datasource' && element.options.tokenDataSource
      ) {
        this._setDataSourceInterface(model, element.options.remoteArgs, element.options.tokenDataSource)
      }
    },
    _generateRules (model, rules) {
      if (this.rules[model]) {
        this.rules[model] = [
          ...this.rules[model],
          ...(rules ? rules.map(im => {
            if (im.pattern) {
              return {...im, pattern: eval(im.pattern)}
            } else if (im.func) {

              const validatorFunc = Function('rule', 'value', 'callback', im.func).bind(this)

              return {...im, validator: validatorFunc}
            } else {
              return {...im}
            }
          }) : [])
        ]
      } else {
        
        this.rules[model] = [
          ...(rules ? rules.map(im => {
            if (im.pattern) {
              return {...im, pattern: eval(im.pattern)}
            } else if (im.func) {
              const validatorFunc = Function('rule', 'value', 'callback', im.func).bind(this)

              return {...im, validator: validatorFunc}
            } else {
              return {...im}
            }
          }) : [])
        ]
      }
    },
    _setDataSourceInterface (field, args, key) {
      let argsObj
      if (typeof args == 'string') {
        argsObj =  (new Function('"use strict";return (' + (args || '{}') + ')').bind(this))()
      } else {
        argsObj =  args
      }

      let findCurInterfaceIndex = this.dataSourceInterface.findIndex(item => item.key == key && _.isEqual(item.args, argsObj))

      if (findCurInterfaceIndex >= 0) {
        this.dataSourceInterface[findCurInterfaceIndex].fields.push(field)
      } else {
        this.dataSourceInterface.push({
          key: key,
          args: argsObj,
          fields: [field]
        })
      }
    },
    _setDisabled (genList, fields, disabled) {
      for (let i = 0; i < genList.length; i++) {
        if (genList[i].type === 'grid') {
          genList[i].columns.forEach(item => {
            this._setDisabled(item.list, fields, disabled)
          })
        } else if (genList[i].type === 'tabs') {
          genList[i].tabs.forEach(item => {
            this._setDisabled(item.list, fields, disabled)
          })
        } else if (genList[i].type === 'collapse') {
          genList[i].tabs.forEach(item => {
            this._setDisabled(item.list, fields, disabled)
          })
        } else if (genList[i].type === 'report') {
          genList[i].rows.forEach(row => {
            row.columns.forEach(column => {
              this._setDisabled(column.list, fields, disabled)
            })
          })
        } else if (genList[i].type === 'inline') {
          this._setDisabled(genList[i].list, fields, disabled)
        } else if (genList[i].type === 'card') {
          this._setDisabled(genList[i].list, fields, disabled)
        } else {
          if (fields.indexOf(genList[i].model) >= 0) {

            genList[i].options.disabled = disabled
          }
        }
      }
    },
    _setOptions (genList, fields, opts) {
      for (let i = 0; i < genList.length; i++) {
        if (genList[i].type === 'grid') {
          genList[i].columns.forEach(item => {
            this._setOptions(item.list, fields, opts)
          })
        } else if (genList[i].type === 'tabs') {
          genList[i].tabs.forEach(item => {
            this._setOptions(item.list, fields, opts)
          })
        } else if (genList[i].type === 'collapse') {
          genList[i].tabs.forEach(item => {
            this._setOptions(item.list, fields, opts)
          })
        } else if (genList[i].type === 'report') {
          genList[i].rows.forEach(row => {
            row.columns.forEach(column => {
              this._setOptions(column.list, fields, opts)
            })
          })
        } else if (genList[i].type === 'inline') {
          this._setOptions(genList[i].list, fields, opts)
        } else if (genList[i].type === 'card') {
          this._setOptions(genList[i].list, fields, opts)
        }
        if (fields.indexOf(genList[i].model) >= 0) {

          Object.keys(opts).forEach(key => {
            genList[i].options[key] = opts[key]
          })
        }
      }
    },
    validate (fields) {
      if (typeof fields === 'string') {
        fields = [fields]
      }
      return new Promise((resolve, reject) => {
        if (fields) {
          this.$refs[this.formRef].validateField(fields, (valid, error) => {
            if (valid) {
              resolve()
            } else {
              reject(error)
            }
          })
        } else {
          this.$refs[this.formRef].validate((valid, error) => {
            if (valid) {
              resolve()
            } else {
              reject(error)
            }
          })
        }
      })
    },
    getData (isValidate = true) {
      
      return new Promise((resolve, reject) => {
        if (isValidate) {
          this.$refs[this.formRef].validate(valid => {
            if (valid) {
              resolve(getBindModels(this.models, this.dataBindFields))
            } else {
              reject(new Error(this.$t('fm.message.validError')).message)
            }
          })
        } else {
          resolve(getBindModels(this.models, this.dataBindFields))
        }
      })
    },
    reset () {

      this.setData(_.cloneDeep(this.resetModels))

      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs[this.formRef].clearValidate()
        })
      })
    },
    onInputChange (value, field) {
      this.$emit('on-change', field, value, this.models)
      this.$emit(`on-${field}-change`, value)
    },
    display (fields) {
      if (typeof fields === 'string') {
        fields = [fields]
      }
      Object.keys(this.displayFields).forEach(key => {
        if (fields.indexOf(key) >= 0) {
          this.displayFields[key] = true
        }
      })

      this.displayFields = {...this.displayFields}
    },
    hide (fields) {
      if (typeof fields === 'string') {
        fields = [fields]
      }
      Object.keys(this.displayFields).forEach(key => {
        
        if (fields.indexOf(key) >= 0) {
          this.displayFields[key] = false
        }
      })

      this.displayFields = {...this.displayFields}
    },
    disabled (fields, disabled) {
      if (typeof fields === 'string') {
        fields = [fields]
      }
      this._setDisabled(this.data.list, fields, disabled)
    },
    addClassName (fields, className) {
      if (typeof fields === 'string') {
        fields = [fields]
      }
      updateClassName(this.data.list, fields, className, 'add')
    },
    removeClassName (fields, className) {
      if (typeof fields === 'string') {
        fields = [fields]
      }
      updateClassName(this.data.list, fields, className, 'remove')
    },
    refresh () {

      this._initForm()
    },
    setData (value) {
      this.$nextTick(() => {
        Object.keys(value).forEach(item => {
          this.models[item] = value[item]
        })
      })
    },
    getComponent (name) {
      if (this.instanceObject[name]) {
        return this.instanceObject[name]
      } else {
        consoleError('No component instance found with ' + name)
        return {}
      }
    },
    getValues () {
      return _.cloneDeep(this.models)
    },
    getValue (fieldName) {
      const resModels = _.cloneDeep(this.models)
      return resModels[fieldName]
    },
    setRules (field, rules) {

      this.rules[field] = [...rules]

      this.$nextTick(() => {
        if (field?.split('.').length > 1) {
          const tableRowLength = this.getValue(field.split('.')[0])?.length
          if (tableRowLength) {
            for (let i= 0; i < tableRowLength; i++) {
              this.$refs[this.formRef].validateField([`${field.split('.')[0]}.${i}.${field.split('.')[1]}`])
            }
          }
        } else {
          this.$refs[this.formRef].validateField([field])
        }
      })
    },
    setOptions (fields, options) {
      if (typeof fields === 'string') {
        fields = [fields]
      }
      this._setOptions(this.data.list, fields, options)
    },
    generateComponentInstance (key, instance) {
      if (this.instanceObject[key]) {
        if (Array.isArray(this.instanceObject[key])) {
          this.instanceObject[key] = [...this.instanceObject[key], instance]
        } else {
          this.instanceObject[key] = [this.instanceObject[key], instance]
        }
      } else {
        this.instanceObject[key] = instance
      }
    },
    deleteComponentInstance (key) {
      if (this.instanceObject[key]) {
        delete this.instanceObject[key]
      }
    },
    setOptionData (fields, data) {
      if (typeof fields === 'string') {
        fields = [fields]
      }
      fields.forEach(field => {
        const curRef = this.instanceObject[field]
        curRef?.$parent?.loadOptions(data)
      })
    },
    exportPDF () {
      if (this.printRead) {
        return exportPDF(document.querySelector('.fm-'+this.formStyleKey))
      } else {
        return Promise.reject()
      }
    }
  }
}
</script>

<style lang="scss">
</style>
