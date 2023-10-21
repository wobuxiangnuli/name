import adress from '../demo/adress'

export const basicComponents = [
  //文本控件
  {
    type: 'input',
    icon: 'icon-input',
    options: {
      descriptioned:'',//功能描述
      minwordNum:'',//最小字数
      maxwordNum:'',//最大字数
      repeat:false,//不允许重复
      wordNum:false,//字数
      Regulared:false,
      RegularMessage:'',
      defaultValue: '',
      description:'',
      wenben_switch:'input',
      required: false,
      requiredMessage: '',
      width: '10',
      dataType: '',
      dataTypeCheck: false,
      dataTypeMessage: '',
      pattern: '',
      patternCheck: false,
      patternMessage: '',
      validatorCheck: false,
      validator: '',
      placeholder: '',
      customClass: '',
      disabled: false,
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      showPassword: false,
      clearable: false,
      maxlength: '',
      showWordLimit: false,
      customProps: {},
      tip: ''
    },
    events: {
      onChange: '',
      onFocus: '',
      onBlur: ''
    }
  },
  {
    type: 'textarea',
    icon: 'icon-diy-com-textarea',
    options: {
      descriptioned:'',//功能描述
      minwordNum:'',//最小字数
      maxwordNum:'',//最大字数
      repeat:false,//不允许重复
      wordNum:false,//字数
      repeat:false,
      wordNum:false,
      width: '',
      defaultValue: '',
      description:'',
      wenben_switch:'textarea',
      required: false,
      requiredMessage: '',
      disabled: false,
      pattern: '',
      patternMessage: '',
      validatorCheck: false,
      validator: '',
      placeholder: '',
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      clearable: false,
      maxlength: '',
      showWordLimit: false,
      rows: 2,
      autosize: false,
      customProps: {},
      tip: ''
    },
    events: {
      onChange: '',
      onFocus: '',
      onBlur: ''
    }
  },
  //数值控件
  {
    type: 'valnum',
    icon: 'icon-number',
    options: {
      unit:'prefix',//单位默认前缀
      unitMessage:'',//前后缀信息
      imputMethod:'valnum',//输入当时默认
      descriptioned:'',//控件功能描述
      width: '',
      required: false,
      requiredMessage: '',
      validatorCheck: false,
      validator: '',
      defaultValue: '',
      min: 0,
      max: 9,
      step: 1,
      disabled: false,
      controls: true,
      controlsPosition: '',
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      precision: 0,
      customProps: {},
      tip: ''
    },
    events: {
      onChange: '',
      onFocus: '',
      onBlur: ''
    }
  },
  {
    type: 'slider',
    icon: 'icon-slider',
    options: {
      descriptioned:'',//功能描述
      imputMethod:'slider',
      defaultValue: 0,
      disabled: false,
      required: false,
      requiredMessage: '',
      validatorCheck: false,
      validator: '',
      min: 0,
      max: 100,
      step: 1,
      showInput: false,
      range: false,
      width: '',
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      customProps: {},
      tip: ''
    },
    events: {
      onChange: ''
    }
  },
   //金额控件
   {
    type: 'amount',
    icon: 'icon-input',
    options: {
      descriptioned:'',//控件功能描述
      repeat:'',//不允许重复
      defaultValue: '',
      description:'',
      required: false,
      requiredMessage: '',
      width: '10',
      dataType: '',
      dataTypeCheck: false,
      dataTypeMessage: '',
      validatorCheck: false,
      validator: '',
      placeholder: '',
      customClass: '',
      disabled: false,
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      showPassword: false,
      clearable: false,
      maxlength: '',
      showWordLimit: false,
      customProps: {},
      tip: ''
    },
    events: {
      onChange: '',
      onFocus: '',
      onBlur: ''
    }
  },
  //邮箱控件
  {
    type: 'email',
    icon: 'icon-input',
    options: {
      descriptioned:'',//控件功能描述
      repeat:'',//不允许重复
      defaultValue: '',
      description:'',
      required: false,
      requiredMessage: '',
      width: '10',
      dataType: 'email',
      dataTypeCheck: true,
      dataTypeMessage: '请输入邮箱',
      validatorCheck: false,
      validator: '',
      placeholder: '',
      customClass: '',
      disabled: false,
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      showPassword: false,
      clearable: false,
      maxlength: '',
      showWordLimit: false,
      customProps: {},
      tip: ''
    },
    events: {
      onChange: '',
      onFocus: '',
      onBlur: ''
    }
  },
  //日期控件
  {
    type: 'date',
    icon: 'icon-date',
    options: {
      descriptioned:'',//字段说明
      defaultValue: '',
      readonly: false,
      disabled: false,
      editable: false,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      type: 'date',
      format: '',
      timestamp: false,
      required: false,
      requiredMessage: '',
      validatorCheck: false,
      validator: '',
      width: '',
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      customProps: {},
      tip: ''
    },
    events: {
      onChange: '',
      onFocus: '',
      onBlur: ''
    }
  },
  //时间控件
  {
    type: 'time',
    icon: 'icon-time',
    options: {
      minuteStep:'1',//分钟间隔数
      setMinute:false,//预设分钟间隔
      descriptioned:'',//字段说明
      defaultValue: '',
      readonly: false,
      disabled: false,
      editable: false,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      isRange: false,
      arrowControl: false,
      format: 'HH:mm:ss',
      required: false,
      requiredMessage: '',
      validatorCheck: false,
      validator: '',
      width: '',
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      customProps: {},
      tip: ''
    },
    events: {
      onChange: '',
      onFocus: '',
      onBlur: ''
    }
  },
  //电话控件
  {
    type: 'phone',
    icon: 'icon-number',
    options: {
      dianhua_switch:'phone',
      descriptioned:'',//控件功能描述
      width: '50%',
      controls:false,
      required: false,
      requiredMessage: '',
      pattern: /^1(3|4|7|5|8)([0-9]{9})/,
      patternCheck: true,
      patternMessage: '请输入正确的电话号码',
      validatorCheck: false,
      validator: '',
      defaultValue: null,
      disabled: false,
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      customProps: {},
      tip: '',
    },
    events: {
      onChange: '',
      onFocus: '',
      onBlur: ''
    }
  },
//座机控件options
{
  type: 'landline',
  icon: 'icon-number',
  options: {
    dianhua_switch:'landline',//
    descriptioned:'',//控件功能描述
    width: '50%',
    controls:false,
    required: false,
    requiredMessage: '',
    pattern: /0\d{2,3}-\d{7,8}/,
    patternCheck: true,
    patternMessage: '请输入正确的座机号码',
    validatorCheck: false,
    validator: '',
    defaultValue: null,
    disabled: false,
    customClass: '',
    labelWidth: 100,
    isLabelWidth: false,
    hidden: false,
    dataBind: true,
    customProps: {},
    tip: '',
  },
  events: {
    onChange: '',
    onFocus: '',
    onBlur: ''
  }
},
//地区控件
{
  type: 'area',
  icon: 'icon-jilianxuanze',
  options: {
    areaType:'1',
    defaultValue: [],
    width: '',
    placeholder: '',
    disabled: false,
    clearable: false,
    options: [
      ...adress.list
    ],
    remote: false,
    remoteType: 'datasource',
    remoteOption: '',
    remoteOptions: [],
    props: {
      value: 'value',
      label: 'label',
      children: 'children'
    },
    remoteFunc: '',
    customClass: '',
    labelWidth: 100,
    isLabelWidth: false,
    hidden: false,
    dataBind: true,
    required: false,
    validatorCheck: false,
    validator: '',
    multiple: false,
    filterable: false,
    checkStrictly: false,
    customProps: {},
    tip: ''
  },
  events: {
    onChange: '',
    onFocus: '',
    onBlur: ''
  }
},
//单选控件
{
  type: 'radio',
  icon: 'icon-radio-active',
  options: {
    showMethod:'radio',
    inline: false,
    defaultValue: '',
    showLabel: false,
    options: [
      {
        value: 'Option 1',
        label: 'Option 1'
      },
      {
        value: 'Option 2',
        label: 'Option 2'
      },
      {
        value: 'Option 3',
        label: 'Option 3'
      }
    ],
    required: true,
    requiredMessage: '',
    validatorCheck: false,
    validator: '',
    width: '',
    remote: false,
    remoteType: 'datasource',
    remoteOption: '',
    remoteOptions: [],
    props: {
      value: 'value',
      label: 'label'
    },
    remoteFunc: '',
    customClass: '',
    labelWidth: 100,
    isLabelWidth: false,
    hidden: false,
    dataBind: true,
    disabled: false,
    customProps: {},
    tip: ''
  },
  events: {
    onChange: ''
  }
},
//多选控件
{
  type: 'checkbox',
  icon: 'icon-check-box',
  options: {
    tagNum:false,
    showMethod:'checkbox',
    inline: false,
    defaultValue: [],
    showLabel: false,
    options: [
      {
        value: 'Option 1'
      },
      {
        value: 'Option 2'
      },
      {
        value: 'Option 3'
      }
    ],
    required: false,
    requiredMessage: '',
    validatorCheck: false,
    validator: '',
    width: '',
    remote: false,
    remoteType: 'datasource',
    remoteOption: '',
    remoteOptions: [],
    props: {
      value: 'value',
      label: 'label'
    },
    remoteFunc: '',
    customClass: '',
    labelWidth: 100,
    isLabelWidth: false,
    hidden: false,
    dataBind: true,
    disabled: false,
    customProps: {},
    tip: ''
  },
  events: {
    onChange: ''
  }
},
//下拉菜单控件
{
  type: 'select',
  icon: 'icon-select',
  options: {
    showMethod:'select',
    defaultValue: '',
    multiple: false,
    disabled: false,
    clearable: false,
    placeholder: '',
    required: false,
    requiredMessage: '',
    validatorCheck: false,
    validator: '',
    showLabel: false,
    width: '',
    options: [
      {
        value: 'Option 1'
      },
      {
        value: 'Option 2'
      },{
        value: 'Option 3'
      }
    ],
    remote: false,
    remoteType: 'datasource',
    remoteOption: '',
    filterable: false,
    remoteOptions: [],
    props: {
      value: 'value',
      label: 'label'
    },
    remoteFunc: '',
    customClass: '',
    labelWidth: 100,
    isLabelWidth: false,
    hidden: false,
    dataBind: true,
    customProps: {},
    tip: ''
  },
  events: {
    onChange: '',
    onFocus: '',
    onBlur: ''
  }
},
//多选下拉菜单控件
{
  type: 'checkselect',
  icon: 'icon-select',
  options: {
    showMethod:'checkselect',
    defaultValue: '',
    multiple: true,
    disabled: false,
    clearable: false,
    placeholder: '',
    required: false,
    requiredMessage: '',
    validatorCheck: false,
    validator: '',
    showLabel: false,
    width: '',
    options: [
      {
        value: 'Option 1'
      },
      {
        value: 'Option 2'
      },{
        value: 'Option 3'
      }
    ],
    remote: false,
    remoteType: 'datasource',
    remoteOption: '',
    filterable: false,
    remoteOptions: [],
    props: {
      value: 'value',
      label: 'label'
    },
    remoteFunc: '',
    customClass: '',
    labelWidth: 100,
    isLabelWidth: false,
    hidden: false,
    dataBind: true,
    customProps: {},
    tip: ''
  },
  events: {
    onChange: '',
    onFocus: '',
    onBlur: ''
  }
},
//附件控件
{
  type: 'annex',
  icon: 'icon-wenjianshangchuan',
  options: {
    acceptType:'all',//接收类型
    defaultValue: [],
    width: '',
    tokenFunc: 'funcGetToken',
    token: '',
    tokenType: 'datasource',
    domain: '',
    disabled: false,
    tip: '',
    action: 'https://tools-server.making.link/api/transfer',
    customClass: '',
    limit: 9,
    multiple: false,
    isQiniu: false,
    labelWidth: 100,
    isLabelWidth: false,
    hidden: false,
    dataBind: true,
    headers: [],
    required: false,
    validatorCheck: false,
    validator: '',
    withCredentials: false
  },
  events: {
    onChange: '',
    onSelect: '',
    onUploadSuccess: '',
    onUploadError: '',
    onRemove: ''
  }
},
  {
    type: 'rate',
    icon: 'icon-pingfen1',
    options: {
      defaultValue: null,
      max: 5,
      disabled: false,
      allowHalf: false,
      required: false,
      requiredMessage: '',
      validatorCheck: false,
      validator: '',
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      showScore: false,
      width: '',
      customProps: {},
      tip: ''
    },
    events: {
      onChange: ''
    }
  },
  {
    type: 'number',
    icon: 'icon-number',
    options: {
      width: '',
      required: false,
      requiredMessage: '',
      validatorCheck: false,
      validator: '',
      defaultValue: 0,
      min: 0,
      max: 9,
      step: 1,
      disabled: false,
      controls: true,
      controlsPosition: '',
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      precision: 0,
      customProps: {},
      tip: ''
    },
    events: {
      onChange: '',
      onFocus: '',
      onBlur: ''
    }
  },
  {
    type: 'color',
    icon: 'icon-color',
    options: {
      defaultValue: '',
      disabled: false,
      showAlpha: false,
      required: false,
      requiredMessage: '',
      validatorCheck: false,
      validator: '',
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      width: '',
      customProps: {},
      tip: ''
    },
    events: {
      onChange: ''
    }
  },
  {
    type: 'switch',
    icon: 'icon-switch',
    options: {
      defaultValue: false,
      required: false,
      requiredMessage: '',
      validatorCheck: false,
      validator: '',
      disabled: false,
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      width: '',
      customProps: {},
      tip: ''
    },
    events: {
      onChange: ''
    }
  },
  {
    type: 'text',
    icon: 'icon-wenzishezhi-',
    options: {
      defaultValue: 'This is a text',
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      required: false,
      width: '',
      tip: ''
    },
    events: {
      onChange: ''
    }
  },
  {
    type: 'html',
    icon: 'icon-html',
    options: {
      defaultValue: '<b style="color: red;">\n\tThis is a HTML5\n</b>',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      required: false,
      width: '',
      tip: ''
    },
    events: {
      onChange: ''
    }
  },
  {
    type: 'button',
    icon: 'icon-button',
    options: {
      customClass: '',
      disabled: false,
      labelWidth: 100,
      isLabelWidth: false,
      hideLabel: true,
      hidden: false,
      buttonSize: 'default',
      buttonType: '',
      buttonPlain: false,
      buttonRound: false,
      buttonCircle: false,
      buttonName: 'Button',
      width: '',
      customProps: {},
      tip: ''
    },
    events: {
      onClick: ''
    }
  },
  {
    type: 'link',
    icon: 'icon-lianjie',
    options: {
      customClass: '',
      disabled: false,
      labelWidth: 100,
      isLabelWidth: false,
      hideLabel: false,
      hidden: false,
      linkType: 'default',
      linkName: 'Link',
      underline: true,
      blank: true,
      href: '',
      customProps: {},
      tip: ''
    },
    events: {
      onClick: ''
    }
  },
  {
    type: 'cascader',
    icon: 'icon-jilianxuanze',
    options: {
      defaultValue: [],
      width: '',
      placeholder: '',
      disabled: false,
      clearable: false,
      options: [
        {
          value: 'Option 1',
          label: 'Option 1',
          children: [
            {value: 'Option 1 - children', label: 'Option 1 - children'}
          ]
        },
        {
          value: 'Option 2',
          label: 'Option 2',
          children: [
            {value: 'Option 2 - children', label: 'Option 2 - children'}
          ]
        },{
          value: 'Option 3',
          label: 'Option 3'
        }
      ],
      remote: false,
      remoteType: 'datasource',
      remoteOption: '',
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label',
        children: 'children'
      },
      remoteFunc: '',
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      required: false,
      validatorCheck: false,
      validator: '',
      multiple: false,
      filterable: false,
      checkStrictly: false,
      customProps: {},
      tip: ''
    },
    events: {
      onChange: '',
      onFocus: '',
      onBlur: ''
    }
  },
  {
    type: 'treeselect',
    icon: 'icon-shuxuanzeqi',
    options: {
      defaultValue: [],
      width: '',
      placeholder: '',
      disabled: false,
      clearable: false,
      options: [
        {
          value: 'Option 1',
          label: 'Option 1',
          children: [
            {value: 'Option 1 - children', label: 'Option 1 - children'}
          ]
        },
        {
          value: 'Option 2',
          label: 'Option 2',
          children: [
            {value: 'Option 2 - children', label: 'Option 2 - children'}
          ]
        },{
          value: 'Option 3',
          label: 'Option 3'
        }
      ],
      remote: false,
      remoteType: 'datasource',
      remoteOption: '',
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'label',
        children: 'children'
      },
      remoteFunc: '',
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      required: false,
      validatorCheck: false,
      validator: '',
      multiple: false,
      filterable: false,
      checkStrictly: false,
      customProps: {},
      tip: ''
    },
    events: {
      onChange: '',
      onFocus: '',
      onBlur: ''
    }
  },
  {
    type: 'steps',
    icon: 'icon-m-buzhou',
    options: {
      defaultValue: 0,
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hideLabel: true,
      hidden: false,
      dataBind: true,
      steps: [
        {
          title: 'Step 1'
        },
        {
          title: 'Step 2'
        },
        {
          title: 'Step 3'
        }
      ],
      props: {
        title: 'title',
        description: 'description'
      },
      remote: false,
      width: '',
      direction: 'horizontal',
      processStatus: 'process',
      finishStatus: 'finish',
      alignCenter: false,
      simple: false,
      remoteType: 'datasource',
      customProps: {},
      tip: ''
    },
    events: {
      onChange: ''
    }
  },
  {
    type: 'transfer',
    icon: 'icon-m-chuansuokuang',
    options: {
      defaultValue: [],
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hideLabel: false,
      hidden: false,
      dataBind: true,
      data: [
        {key: '1', label: 'Option 1'},
        {key: '2', label: 'Option 2'},
        {key: '3', label: 'Option 3'},
      ],
      props: {
        key: 'key',
        label: 'label',
        disabled: 'disabled'
      },
      filterable: false,
      required: false,
      validatorCheck: false,
      validator: '',
      width: '',
      remote: false,
      titles: ['Source', 'Target'],
      disabled: false,
      remoteType: 'datasource',
      customProps: {},
      tip: ''
    },
    events: {
      onChange: ''
    }
  },
  {
    type: 'pagination',
    icon: 'icon-pagination',
    options: {
      defaultValue: 1,
      customClass: '',
      disabled: false,
      labelWidth: 100,
      isLabelWidth: false,
      hideLabel: false,
      hidden: false,
      dataBind: true,
      background: true,
      pageSize: 10,
      pagerCount: 7,
      total: 100,
      customProps: {}
    },
    events: {
      onChange: '',
      
    }
  }
]

export const advanceComponents = [
  {
    type: 'blank',
    icon: 'icon-zidingyishuju',
    options: {
      defaultType: 'String',
      customClass: '',
      width: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      required: false,
      pattern: '',
      validator: '',
      tip: ''
    },
    events: {
      onChange: ''
    }
  },
  {
    type: 'component',
    icon: 'icon-component',
    options: {
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      template: '<div>自定义内容</div>',
      required: false,
      pattern: '',
      validator: '',
      width: '',
      tip: ''
    },
    events: {
      onChange: ''
    }
  },
  {
    type: 'fileupload',
    icon: 'icon-wenjianshangchuan',
    options: {
      defaultValue: [],
      width: '',
      tokenFunc: 'funcGetToken',
      token: '',
      tokenType: 'datasource',
      domain: '',
      disabled: false,
      tip: '',
      action: '',
      customClass: '',
      limit: 9,
      multiple: false,
      isQiniu: false,
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      headers: [],
      required: false,
      validatorCheck: false,
      validator: '',
      withCredentials: false
    },
    events: {
      onChange: '',
      onSelect: '',
      onUploadSuccess: '',
      onUploadError: '',
      onRemove: ''
    }
  },
  {
    type: 'imgupload',
    icon: 'icon-tupian',
    options: {
      defaultValue: [],
      size: {
        width: 100,
        height: 100,
      },
      width: '',
      tokenFunc: 'funcGetToken',
      token: '',
      tokenType: 'datasource',
      domain: '',
      disabled: false,
      readonly: false,
      limit: 8,
      multiple: false,
      isQiniu: false,
      isDelete: true,
      min: 0,
      isEdit: true,
      action: '',
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      headers: [],
      required: false,
      validatorCheck: false,
      validator: '',
      withCredentials: false,
      tip: ''
    },
    events: {
      onChange: '',
      onSelect: '',
      onUploadSuccess: '',
      onUploadError: '',
      onRemove: ''
    }
  },
  {
    type: 'editor',
    icon: 'icon-fuwenbenkuang',
    options: {
      defaultValue: '',
      width: '',
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      customToolbar: [
        [ 'bold', 'italic', 'underline', 'strike', 
          { 'color': [] }, 
          { 'background': [] }, 
          { 'align': [] },
          { 'list': 'ordered'}, 
          { 'list': 'bullet' },
          { 'indent': '-1'}, 
          { 'indent': '+1' }
        ], 
        [{ 'font': [] },{ 'header': [1, 2, 3, 4, 5, 6, false] }],               
        [{ 'script': 'sub'}, { 'script': 'super' }],  
        ['link', 'image','blockquote', 'code-block'],
        [{ 'direction': 'rtl' }], 
        ['clean'] 
      ],
      disabled: false,
      required: false,
      validatorCheck: false,
      validator: '',
      tip: ''
    },
    events: {
      onChange: ''
    }
  },
  
]

export const layoutComponents = [
  {
    type: 'grid',
    icon: 'icon-RectangleCopy',
    columns: [
      {
        type: 'col',
        options: {
          span: 12,
          offset: 0,
          push: 0,
          pull: 0,
          xs: 24,
          sm: 12,
          md: 12,
          lg: 12,
          xl: 12,
          customClass: ''
        },
        list: []
      },
    ],
    options: {
      gutter: 0,
      justify: 'start',
      align: 'top',
      customClass: '',
      hidden: false,
      flex: true,
      responsive: true
    }
  },
  {
    type: 'report',
    icon: 'icon-table1',
    options: {
      customClass: '',
      hidden: false,
      borderWidth: 1,
      borderColor: '#999',
      width: '100%'
    },
    headerRow: [
      {
        type: 'th',
        options: {
          width: ''
        }
      }
    ],
    rows: [
      {
        columns: [
          {
            type: 'td',
            options: {
              customClass: '',
              colspan: 1,
              rowspan: 1,
              align: 'left',
              valign: 'top',
              width: '',
              height: ''
            },
            list: []
          }
        ]
      }
    ]
  },
  {
    type: 'tabs',
    icon: 'icon-tabs',
    tabs: [
      {
        label: 'Tab 1',
        name: 'tab_1',
        list: []
      }
    ],
    options: {
      type: '',
      tabPosition: 'top',
      customClass: '',
      hidden: false,
    }
  },
  {
    type: 'collapse',
    icon: 'icon-zhediemianban',
    tabs: [
      {
        title: 'Collapse 1',
        name: 'collapse_1',
        list: []
      }
    ],
    options: {
      type: '',
      accordion: false,
      customClass: '',
      hidden: false,
    }
  },
  {
    type: 'inline',
    icon: 'icon-inlineview',
    options: {
      customClass: '',
      hidden: false,
      spaceSize: 10
    },
    list: []
  },
  {
    type: 'card',
    icon: 'icon-kapian',
    list: [],
    options: {
      title: 'Card name',
      showHeader: true,
      bordered: true,
      customClass: '',
      shadow: 'always',
      width: '',
      padding: '10px',
      hidden: false
    }
  },
  {
    type: 'divider',
    icon: 'icon-fengexian',
    options: {
      hidden: false,
      contentPosition: 'left',
      customProps: {}
    }
  },
  {
    type: 'alert',
    icon: 'icon-jinggaotishi',
    options: {
      hidden: false,
      title: 'Info alert',
      type: 'info',
      description: '',
      closable: true,
      center: false,
      showIcon: false,
      effect: 'light',
      width: '',
      customProps: {}
    }
  }
]

export const collectionComponents = [
  {
    type: 'table',
    icon: 'icon-table',
    options: {
      defaultValue: [],
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      disabled: false,
      required: false,
      validatorCheck: false,
      validator: '',
      paging: false,
      pageSize: 5,
      isAdd: true,
      isDelete: true,
      showControl: true,
      virtualTable: true,
      tip: ''
    },
    events: {
      onChange: '',
      onRowAdd: '',
      onRowRemove: '',
      onPageChange: ''
    },
    tableColumns: []
  },
  {
    type: 'subform',
    icon: 'icon-a-ziyuan25',
    options: {
      defaultValue: [],
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      disabled: false,
      required: false,
      validatorCheck: false,
      validator: '',
      paging: false,
      pageSize: 5,
      showControl: true,
      isAdd: true,
      isDelete: true,
      tip: ''
    },
    events: {
      onChange: '',
      onRowAdd: '',
      onRowRemove: '',
      onPageChange: ''
    },
    list: []
  },
  {
    type: 'dialog',
    icon: 'icon-Dialog',
    options: {
      defaultValue: {},
      visible: false,
      customClass: '',
      title: 'Dialog Title',
      width: '',
      top: '15vh',
      center: false,
      cancelText: 'Cancel',
      showClose: true,
      okText: 'Confirm',
      showCancel: true,
      showOk: true,
      confirmLoading: false,
      dataBind: true,
    },
    list: [],
    events: {
      onCancel: '',
      onConfirm: ''
    }
  },
  {
    type: 'group',
    icon: 'icon-fenzu',
    options: {
      defaultValue: {},
      customClass: '',
      labelWidth: 100,
      isLabelWidth: false,
      hidden: false,
      dataBind: true,
      width: '',
      validatorCheck: false,
      validator: '',
      tip: ''
    },
    list: [],
  }
]
