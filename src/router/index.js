import Vue from 'vue'
import Router from 'vue-router'

// 加载样例目录
import temp from '@/pages/templateModules/route.js'

// 加载基础功能目录
import basics from '@/pages/basics/route.js'

Vue.use(Router)

const routes = [
  // 公共路由配置
  // {
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld'),
  //   meta: {
  //     title: '首页'
  //   }
  // }
  // 默认加载页面
  {
    path: '/',
    redirect: temp[0].path
  },
  // 未知页面重定向
  {
    path: '*',
    name: '*',
    redirect: '/noFound'
  }
].concat(temp, basics)

const router = new Router({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    const title = to.meta.title
    window.document.title = title
  }
  next()
})

export default router
