<template>
  <el-dialog
    v-model="visible"
    :title="element.options.title"
    :width="element.options.width || '50%'"
    :top="element.options.top || '15vh'"
    :close-on-click-modal='false'
    :show-close="element.options.showClose"
    :center="element.options.center"
    destroy-on-close
    :ref="`generate-dialog-${element.model}`"
    class="fm-generate-dialog"
  >
    <div >
      <template v-for="item in element.list">
        <generate-col-item
          v-if="item.type == 'grid'"
          :key="item.key"
          :model="dialogModel"
          :rules="rules"
          :element="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :is-dialog="true"
          :dialog-name="element.model"
          :group="element.model"
          :field-node="element.model"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-col-item>

        <generate-tab-item
          v-else-if="item.type == 'tabs'"
          :key="item.key"
          :model="dialogModel"
          :rules="rules"
          :element="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :is-dialog="true"
          :dialog-name="element.model"
          :group="element.model"
          :field-node="element.model"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-tab-item>

        <generate-collapse
          v-else-if="item.type == 'collapse'"
          :key="item.key"
          :model="dialogModel"
          :rules="rules"
          :element="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :is-dialog="true"
          :dialog-name="element.model"
          :group="element.model"
          :field-node="element.model"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-collapse>

        <generate-report
          v-else-if="item.type == 'report'"
          :key="item.key"
          :model="dialogModel"
          :rules="rules"
          :element="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :is-dialog="true"
          :dialog-name="element.model"
          :group="element.model"
          :field-node="element.model"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-report>

        <generate-card
          v-else-if="item.type == 'card'"
          :key="item.key"
          :model="dialogModel"
          :rules="rules"
          :element="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :is-dialog="true"
          :dialog-name="element.model"
          :group="element.model"
          :field-node="element.model"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-card>

        <generate-inline
          v-else-if="item.type == 'inline'"
          :key="item.key"
          :model="dialogModel"
          :rules="rules"
          :element="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :is-dialog="true"
          :dialog-name="element.model"
          :group="element.model"
          :field-node="element.model"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-inline>

        <generate-form-item
          v-else
          :key="item.key"
          :models="dialogModel"
          :rules="rules"
          :widget="item"
          :remote="remote"
          :blanks="blanks"
          :display="displayFields"
          :edit="edit"
          :remote-option="remoteOption"
          :platform="platform"
          :preview="preview"
          :container-key="containerKey"
          :data-source-value="dataSourceValue"
          :event-function="eventFunction"
          :print-read="printRead"
          :is-dialog="true"
          :dialog-name="element.model"
          :group="element.model"
          :field-node="element.model"
        >
          <template v-slot:[blank.name]="scope" v-for="blank in blanks">
            <slot :name="blank.name" :model="scope.model"></slot>
          </template>
        </generate-form-item>
      </template>
    </div>
    <template #footer v-if="element.options.showCancel || element.options.showOk">
      <div>
        <el-button v-if="element.options.showCancel" @click="handleCancel">{{element.options.cancelText}}</el-button>
        <el-button type="primary" v-if="element.options.showOk" :loading="element.options.confirmLoading" @click="handleConfirm">{{element.options.okText}}</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import GenerateFormItem from './GenerateFormItem.vue'
import GenerateColItem from './GenerateColItem.vue'
import GenerateTabItem from './GenerateTabItem.vue'
import GenerateReport from './GenerateReport.vue'
import GenerateInline from './GenerateInline.vue'
import GenerateCollapse from './GenerateCollapse.vue'
import GenerateCard from './GenerateCard.vue'
import { updateClassName } from '../util/reuse-methods'
import _ from 'lodash'

export default {
  name: 'generate-dialog',
  components: {
    GenerateColItem,
    GenerateFormItem,
    GenerateInline,
    GenerateReport,
    GenerateTabItem,
    GenerateCollapse,
    GenerateCard
  },
  props: ['models', 'rules', 'element', 'remote', 'blanks', 'edit', 'remoteOption', 'platform', 'preview', 'containerKey', 'dataSourceValue', 'eventFunction', 'printRead', 'group', 'fieldNode'],
  data () {
    return {
      visible: this.element.options.visible,
      displayFields: {},
      dialogModel: this.models[this.element.model] ?? {},
      dialogDisabled: {}
    }
  },
  emits: ['update:models'],
  inject: ['generateComponentInstance', 'deleteComponentInstance', 'getFormComponent'],
  mounted () {
    this._generateModel(this.element.list)

    this.generateComponentInstance && this.generateComponentInstance(this.element.model, this.$refs[`generate-dialog-${this.element.model}`].$parent)
  },
  beforeUnmount () {
    this.deleteComponentInstance && this.deleteComponentInstance(this.element.model)
  },
  provide () {
    return {
      'setDialogData': this.setDialogData
    }
  },
  methods: {
    setDialogData (value, field) {
      this.dialogModel[field] = value
    },
    _generateModel (genList) {
      for (let i = 0; i < genList.length; i++) {
        if (genList[i].type == 'grid') {
          this.displayFields[genList[i].model] = !genList[i].options.hidden

          genList[i].columns.forEach(item => {
            this._generateModel(item.list)
          })
        } else if (genList[i].type === 'tabs') {
          genList[i].tabs.forEach(item => {
            this._generateModel(item.list)
          })

          this.displayFields[genList[i].model] = !genList[i].options.hidden
        } else if (genList[i].type === 'collapse') {
          genList[i].tabs.forEach(item => {
            this._generateModel(item.list)
          })

          this.displayFields[genList[i].model] = !genList[i].options.hidden
        } else if (genList[i].type === 'report') {
          genList[i].rows.forEach(row => {
            row.columns.forEach(column => {
              this._generateModel(column.list)
            })
          })

          this.displayFields[genList[i].model] = !genList[i].options.hidden
        } else if (genList[i].type === 'inline') {
          this._generateModel(genList[i].list)

          this.displayFields[genList[i].model] = !genList[i].options.hidden
        } else if (genList[i].type === 'card') {
          this._generateModel(genList[i].list)

          this.displayFields[genList[i].model] = !genList[i].options.hidden
        } else {
          if (genList[i].type == 'blank') {
            this.dialogModel[genList[i].model] = genList[i].options.defaultType === 'String' ? '' : (genList[i].options.defaultType === 'Object' ? {} : [])
          } else {
            this.dialogModel[genList[i].model] = _.cloneDeep(genList[i].options.defaultValue)
          }

          this.displayFields[genList[i].model] = !genList[i].options.hidden
          this.dialogDisabled[genList[i].model] = !genList[i].options.disabled
        }
      }
    },
    open () {
      this.visible = true
    },
    close () {
      this.visible = false
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
    disabled (fields, disabled) {
      if (typeof fields === 'string') {
        fields = [fields]
      }
      this._setDisabled(this.element.list, fields, disabled)
    },
    validate () {
      return new Promise((resolve, reject) => {
        let realFields = this._getAllRuleFields()

        this.getFormComponent().validateField(realFields, (valid, error) => {
          if (valid) {
            resolve()
          } else {
            reject(error)
          }
        })
      })
    },
    handleCancel () {
      if (this.element && this.element.events && this.element.events.onCancel) {
        let funcKey = this.element.events.onCancel

        this.eventFunction[funcKey]({
          field: this.element.model,
          currentRef: this
        })
      }
    },
    handleConfirm () {
      if (this.element && this.element.events && this.element.events.onConfirm) {
        let funcKey = this.element.events.onConfirm

        this.eventFunction[funcKey]({
          field: this.element.model,
          currentRef: this
        })
      }
    },
    confirmLoading (status) {
      this.element.options.confirmLoading = status
    },
    setOptions (fields, options) {
      if (typeof fields === 'string') {
        fields = [fields]
      }
      this._setOptions(this.element.list, fields, options)
    },
    setData (value) {
      this.$nextTick(() => {
        Object.keys(value).forEach(item => {
          this.dialogModel[item] = value[item]
        })
      })
    },
    getValues () {
      return this.dialogModel
    },
    getValue (fieldName) {
      return this.dialogModel[fieldName]
    },
    addClassName (fields, className) {
      if (typeof fields === 'string') {
        fields = [fields]
      }
      updateClassName(this.element.list, fields, className, 'add')
    },
    removeClassName (fields, className) {
      if (typeof fields === 'string') {
        fields = [fields]
      }
      updateClassName(this.element.list, fields, className, 'remove')
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
    _getAllRuleFields () {
      let realFields = []

      Object.keys(this.dialogModel).forEach((v) => {
        if (Array.isArray(this.dialogModel[v])) {
          const currentArray = this.dialogModel[v]

          currentArray.forEach((o, i) => {
            Object.keys(o).forEach((key) => {
              realFields.push(`${this.element.model}.${v}.${i}.${key}`)
            })
          })
        } else {
          realFields.push(`${this.element.model}.${v}`)
        }
      })

      return realFields
    }
  },
  watch: {
    dialogModel: {
      deep: true,
      handler (val) {
        this.$emit('update:models', {
          ...this.models,
          [this.element.model]: val
        })
      }
    },
    models: {
      deep: true,
      handler (val) {
        this.dialogModel = this.models[this.element.model]
      }
    }
  }
}
</script>

<style lang="scss">
.fm-generate-dialog{
  .el-dialog__footer{
    text-align: right;
  }

  &.el-dialog--center{
    .el-dialog__footer{
      text-align: center;
    }
  }
}
</style>