export default {
  fm: {
    components: {
      fields: {
        input: '单行文本',
        textarea: '多行文本',
        number: '计数器',
        radio: '单选框组',
        checkbox: '多选框组',
        time: '时间选择器',
        date: '日期选择器',
        rate: '评分',
        color: '颜色选择器',
        select: '下拉选择框',
        switch: '开关',
        slider: '滑块',
        text: '文字',
        blank: '自定义区域',
        fileupload: '文件',
        imgupload: '图片',
        editor: '编辑器',
        cascader: '级联选择器',
        table: '子表单',
        grid: '栅格布局',
        tabs: '标签页',
        divider: '分割线',
        html: 'HTML',
        component: '自定义组件',
        report: '表格布局',
        button: '按钮',
        link: '文字链接',
        inline: '行内布局',
        steps: '步骤条',
        transfer: '穿梭框',
        treeselect: '树选择',
        alert: '提示',
        subform: '子表单+',
        custom: '自定义',
        col: '栅格列',
        td: '单元格',
        collapse: '折叠面板',
        pagination: '分页',
        dialog: '对话框',
        card: '卡片',
        group: '分组',
        th: '表头'
      },
      basic: {
        title: '基础字段',
      },
      advance: {
        title: '高级字段',
      },
      layout: {
        title: '布局字段',
      },
      custom: {
        title: '自定义字段'
      },
      collection: {
        title: '容器字段'
      }
    },
    description: {
      containerEmpty: '从左侧拖拽或点击来添加字段',
      configEmpty: '请添加字段',
      tableEmpty: '将字段拖拽到此处',
      uploadJsonInfo: 'JSON格式如下，直接复制生成的json覆盖此处代码点击确定即可',
      deleteConfirm: '你确定删除该行数据吗？',
      qrcodePreview: '手机预览二维码'
    },
    message: {
      minnumTip:'最小字数',
      maxnumTip:'最大字数',
      copySuccess: '复制成功',
      validError: '表单数据校验失败',
      noPut: '不支持添加此字段',
      errorTip: '请输入内容',
      notSupport: '当前浏览器不支持'
      
    },
    actions: {
      import: '导入模板',
      clear: '清空',
      preview: '预览',
      json: '生成JSON',
      code: '生成代码',
      getData: '获取数据',
      reset: '重置',
      copyData: '复制',
      cancel: '取 消',
      confirm: '确 定',
      addOption: '添加选项',
      addColumn: '添加列',
      addTab: '添加标签',
      addCollapse: '添加面板',
      upload: '点击上传',
      add: '添加',
      undo: '撤销',
      redo: '重做',
      enabledEdit: '启用编辑',
      disabledEdit: '禁用编辑',
      clearSelect: '重置选择',
      close: '关闭',
      export: '导出',
      print: '打印',
      printReadMode: '打印阅读模式',
      editMode: '编辑模式',
      components: '组件库',
      outline: '大纲树',
      importFile: '导入文件',
      fullScreen: '全屏',
      exitFullScreen: '退出全屏',
      exportPDF: '导出 PDF',
      pdfPreview: 'PDF 预览'
    },
    config: {
      form: {
        title: '表单属性',
        labelPosition: {
          title: '标签对齐方式',
          left: '左对齐',
          right: '右对齐',
          top: '顶部对齐'
        },
        description:'表单描述',
        labelWidth: '表单标签宽度',
        size: '组件尺寸',
        customClass: '自定义Class',
        width: '表单宽度',
        styleSheets: '表单样式表',
        labelSuffix: '表单标签后缀'
      },
      widget: {
        descriptioned:'功能描述',
        repeat:'不允许重复',
        wordnum:'限定字数',
        widgetType: '类型',
        title: '字段属性',
        model: '字段标识',
        Regular:'限定输入格式',
        name: '标题',
        width: '宽度',
        height: '高度',
        size: '大小',
        labelWidth: '标签宽度',
        labelWrap: '标签换行',
        custom: '自定义',
        placeholder: '占位内容',
        layout: '布局方式',
        block: '块级',
        inline: '行内',
        contentPosition: '文案位置',
        center: '居中',
        showInput: '显示输入框',
        min: '最小值',
        max: '最大值',
        step: '步长',
        precision: '精度',
        controls: '是否使用控制按钮',
        controlsPosition: '控制按钮位置	',
        multiple: '是否多选',
        filterable: '是否可搜索',
        allowHalf: '允许半选',
        showAlpha: '支持透明度选择',
        showLabel: '是否显示标签',
        option: '选项',
        staticData: '静态数据',
        remoteData: '动态数据',
        remoteFunc: '方法函数',
        remoteAssigned: '赋值变量',
        value: '值',
        label: '标签',
        childrenOption: '子选项',
        defaultValue: '默认值',
        showType: '显示类型',
        isRange: '是否为范围选择',
        isTimestamp: '是否获取时间戳',
        startPlaceholder: '开始时间占位内容',
        endPlaceholder: '结束时间占位内容',
        format: '格式',
        limit: '最大上传数',
        isQiniu: '使用七牛上传',
        tokenFunc: '获取七牛Token',
        imageAction: '图片上传地址',
        tip: '提示说明文字',
        action: '上传地址',
        headers: '设置上传的请求头部',
        defaultType: '绑定数据类型',
        string: '字符串',
        object: '对象',
        array: '数组',
        number: '数字',
        boolean: '布尔值',
        integer: '整数',
        float: '浮点数',
        url: 'URL地址',
        email: '邮箱地址',
        hex: '十六进制',
        flex: 'Flex布局',
        responsive: '响应式布局',
        gutter: '栅格间隔',
        columnOption: '列配置项',
        span: '栅格占据的列数',
        responsiveSpan: '响应式栅格数',
        offset: '栅格左侧的间隔格数',
        push: '栅格向右移动格数',
        pull: '栅格向左移动格数',
        justify: '水平排列方式',
        justifyStart: '左对齐',
        justifyEnd: '右对齐',
        justifyCenter: '居中',
        justifySpaceAround: '两侧间隔相等',
        justifySpaceBetween: '两端对齐',
        align: '垂直排列方式',
        alignTop: '顶部对齐',
        alignMiddle: '居中',
        alignBottom: '底部对齐',
        type: '风格类型',
        default: '默认',
        card: '选项卡',
        borderCard: '卡片化',
        tabPosition: '选项卡位置',
        top: '顶部',
        left: '左侧',
        right: '右侧',
        bottom: '底部',
        tabOption: '标签配置项',
        tabName: '标签名称',
        collapseOptions: '面板选项',
        collapseTitle: '面板标题',
        accordion: '手风琴模式',
        customClass: '自定义Class',
        attribute: '操作属性',
        dataBind: '数据绑定',
        hidden: '隐藏',
        readonly: '完全只读',
        disabled: '禁用',
        editable: '文本框可输入',
        clearable: '显示清除按钮',
        arrowControl: '使用箭头进行时间选择',
        isDelete: '可删除',
        isEdit: '可编辑',
        isAdd: '可添加',
        showPassword: '显示密码',
        showScore: '显示分数',
        validate: '校验',
        required: '必填',
        patternPlaceholder: '填写正则表达式',
        newOption: '新选项',
        tab: '标签页',
        collapse: '折叠面板',
        validatorRequired: '必须填写',
        validatorType: '格式不正确',
        validatorPattern: '格式不匹配',
        customTemplates: '自定义模板',
        setting: '设置',
        hideLabel: '隐藏标签',
        borderWidth: '表格边框宽度',
        borderColor: '表格边框颜色',
        buttonName: '按钮名称',
        buttonSize: '尺寸',
        buttonType: '按钮类型',
        buttonPlain: '是否朴素按钮',
        buttonRound: '是否圆角按钮',
        buttonCircle: '是否圆形按钮',
        linkType: '链接类型',
        linkName: '链接名称',
        underline: '是否下划线',
        isBlank: '是否在新窗口中打开',
        withCredentials: '跨域请求是否提供凭据信息',
        customValidation: '自定义校验规则',
        paging: '是否分页',
        pageSize: '每页显示数目',
        checkStrictly: '可选任意节点',
        extendPropsConfig: '扩展属性配置',
        space: 'Step间距',
        direction: '显示方向',
        processStatus: '当前步骤的状态',
        finishStatus: '结束步骤状态',
        alignCenter: '居中对齐',
        simple: '简洁风格',
        titles: '列表标题',
        otitle: '标题',
        description: '描述',
        effect: '主题样式',
        closable: '可关闭',
        showIcon: '显示类型图片',
        spaceSize: '间隔大小',
        showControl: '展示控制按钮',
        pagerCount: '页码按钮数量',
        total: '总条目数',
        background: '按钮背景色',
        fixedColumn: '固定列',
        fixedColumnSelect: '选择固定位置',
        showDialog: '显示对话框',
        showClose: '显示关闭按钮',
        showCancel: '显示取消按钮',
        cancelText: '取消按钮文字',
        showOk: '显示确认按钮',
        okText: '确认按钮文字',
        confirmLoading: 'loading',
        marginTop: '顶部距离',
        maxlength: '最大输入长度',
        showWordLimit: '显示输入字数统计',
        rows: '输入框行数',
        autosize: '高度自适应',
        padding: '内边距',
        showHeader: '显示标题区域',
        bordered: '是否有边框',
        shadow: '阴影显示',
        virtualTable: '虚拟表格'
      }
    },
    upload: {
      preview: '预览',
      edit: '替换',
      delete: '删除'
    },
    tooltip: {
      trash: '删除',
      clone: '复制',
      addrow: '插入行',
      addcolumn: '插入列',
      mergedown: '向下合并',
      mergeright: '向右合并',
      deleterow: '删除当前行',
      deletecolumn: '删除当前列',
      cellsetting: '表格设置',
      insertcolumnleft: '左插入列',
      insertcolumnright: '右插入列',
      insertrowbefore: '上插入行',
      insertrowafter: '下插入行',
      splitcolumns: '拆分成列',
      splitrows: '拆分成行',
      setcolwidth: '设置列宽'
    },
    datasource: {
      name: '数据源',
      config: {
        title: '数据源设置',
        add: '添加数据源',
        save: '保存',
        cancel: '取消',
        test: '请求测试'
      },
      edit: {
        name: '名称',
        url: '请求地址',
        method: '请求方法',
        headers: '请求头部',
        params: '请求参数',
        auto: '是否表单初始化发送请求',
        response: '数据处理',
        annotation: '默认直接返回响应数据 res，可以在下方对数据进行处理',
        add: '添加',
        willRequest: '请求发送前：',
        responseSuccess: '请求返回响应数据时：',
        requestError: '请求发生错误时：',
      },
      message: {
        repeat: '数据源名称不能重复',
        settingError: '数据源设置错误',
        saveSuccess: '保存成功',
        saveError: '存在未保存的数据，请先保存',
        confirmRemove: '确定要删除数据源'
      }
    },
    eventscript: {
      name: '动作面板',
      config: {
        title: '动作设置',
        add: '添加动作',
        save: '保存',
        confirm: '确定',
        cancel: '取消',
        create: '新建动作',
        code: '编辑代码'
      },
      message: {
        repeat: '方法名称不能重复',
        saveSuccess: '保存成功',
        saveError: '存在未保存的数据，请先保存',
        confirmRemove: '确定要删除该方法'
      }
    },
    importjson: {
      name: '模板库',
      noimage: '暂无预览图',
      loadjson: '加载模板',
      nojson: '暂无模板'
    }
  }
}