const route = [
  // 样例模块路由
  {
    path: '/temp',
    name: 'temp',
    component: r => require.ensure([], () => r(require('@/pages/templateModules/temp/index.js')), 'temp'),
    meta: {
      title: '样例页面'
    }
  },
  // form样例模块路由
  {
    path: '/tempForm',
    name: 'tempForm',
    component: r => require.ensure([], () => r(require('@/pages/templateModules/tempForm/index.js')), 'tempForm'),
    meta: {
      title: 'form样例'
    }
  },
  // Data样例模块路由
  {
    path: '/tempData',
    name: 'tempData',
    component: r => require.ensure([], () => r(require('@/pages/templateModules/tempData/index.js')), 'tempData'),
    meta: {
      title: 'Data样例'
    }
  },
  // Notice样例模块路由
  {
    path: '/tempNotice',
    name: 'tempNotice',
    component: r => require.ensure([], () => r(require('@/pages/templateModules/tempNotice/index.js')), 'tempNotice'),
    meta: {
      title: 'Notice样例'
    }
  }
]

export default route
