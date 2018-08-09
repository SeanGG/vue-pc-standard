const route = [
  // 样例模块路由
  {
    path: '/noFound',
    name: 'noFound',
    component: r => require.ensure([], () => r(require('@/pages/basics/noFound/index.js')), 'noFound'),
    meta: {
      title: '页面未找到'
    }
  }
]

export default route
