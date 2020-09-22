/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const logRouter = {
  path: '/system-log',
  component: Layout,
  redirect: '/system-log/signin-log',
  name: 'Table',
  meta: {
    title: '系统日志',
    icon: 'education'
  },
  children: [
    {
      path: 'signin-log',
      component: () => import('@/views/system-log/signin-log'),
      name: 'DragTable',
      meta: { title: '登入日志' }
    },
    {
      path: 'operation-log',
      component: () => import('@/views/system-log/operation-log'),
      name: 'InlineEditTable',
      meta: { title: '操作日志' }
    }
  ]
}
export default logRouter
