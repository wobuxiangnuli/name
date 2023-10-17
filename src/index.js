import 'normalize.css/normalize.css'
import { createI18n } from 'vue-i18n'

import MakingForm from './components/Container.vue'
import GenerateAntdForm from './components/AntdvGenerator/GenerateForm.vue'

import enUS from './lang/en-us.js'
import zhCN from './lang/zh-cn.js'

import './iconfont/iconfont.css'
import './styles/cover.scss'
import './styles/index.scss'
import './styles/editor.scss'
import './styles/scrollbar.scss'
import './styles/vars.scss'
import './styles/print.scss'

const expire = 253402271999000
const version = '3.5.8'

const displayVersion = () => {
  Function(`
    window.console && console.log('%cFormMaking %cV${version}  https://form.making.link', 'color: #1890ff;font-weight: 500;font-size: 20px;font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;', 'color: #ccc;');
  `)()
}

const loadLang = function (app, locale, i18n) {
  
  if (i18n) {
    i18n.global.setLocaleMessage('zh-cn', {...i18n.global.getLocaleMessage('zh-cn'), ...zhCN})
    i18n.global.setLocaleMessage('en', {...i18n.global.getLocaleMessage('en'), ...enUS})
    if (i18n.mode === 'legacy') {
      i18n.global.locale = locale
    } else {
      i18n.global.locale.value = locale
    }
  } else {
    const i18n = createI18n({
      locale: locale,
      fallbackLocale: locale,
      messages: {
        'en': enUS,
        'zh-cn': zhCN
      }
    })

    app.use(i18n)
  }
}

const loadOptions = (opts) => {
  window.FormMaking_OPTIONS = {
    ...opts,
    aceurl: opts.aceurl || 'https://form.making.link/public/lib/ace',
    key: '03202309250096M',
    version
  }
}

MakingForm.install = function (app, opts = {
  locale: 'zh-cn',
}) {
  loadLang(app, opts.locale, opts.i18n)
  if (expire >= new Date().getTime()) {
    app.component(MakingForm.name, MakingForm)
  }

  displayVersion()
  loadOptions(opts)

  return app
}



GenerateAntdForm.install = function (app, opts = {
  locale: 'zh-cn'
}) {
  loadLang(app, opts.locale, opts.i18n)
  if (expire >= new Date().getTime()) {
    app.component(GenerateForm.name, GenerateForm)
  }
  
  displayVersion()
  loadOptions(opts)
}

const components = [
  MakingForm,
  GenerateAntdForm
]

const install = function (app, opts = {
  locale: 'zh-cn',
  i18n: null,
  components: []
}) {
  
  opts = {
    key: '03202309250096M',
    locale: 'zh-cn',
    i18n: null,
    components: [],
    ...opts
  }

  loadLang(app, opts.locale, opts.i18n)

  if (expire >= new Date().getTime()) {
    components.forEach(component => {
      app.component(component.name, component)
    })

    opts.components && opts.components.forEach(item => {
      app.component(item.name, item.component)
    })
  }
  displayVersion()
  loadOptions(opts)
}

export {
  install,
  MakingForm,
  GenerateAntdForm
}

export default {
  install,
  MakingForm,
  GenerateAntdForm
}
