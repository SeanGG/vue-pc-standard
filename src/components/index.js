// 引用项目私有组件
import Header from './header' // 头部
import LeftMenu from './leftMenu' // 左侧导航
import Footer from './footer' // 底部

const filters = {
  // 引用项目自有组件
  Header,
  LeftMenu,
  Footer
}

// 引用外部组件
Object.assign(filters)

const install = Vue => {
  Object.keys(filters).forEach((key) => {
    Vue.component(key, filters[key])
  })
}

export default {
  install
}
