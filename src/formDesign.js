import FormDesign from './views/index/Home.vue'

const components = [FormDesign]

const install = Vue => {
  // 全局注册组件
  components.forEach(component => {
    Vue.component('FormDesign', component)
  })
}

export {
  FormDesign
}

export default {
  install,
  ...components
}
