/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/system-log',
  component: Layout,
  redirect: '/table/drag-table',
  name: 'Table',
  meta: {
    title: '系统日志',
    icon: 'education'
  },
  children: [
    {
      path: 'signin-log',
      component: () => import('@/views/table/signin-log'),
      name: 'DragTable',
      meta: { title: '登入日志' }
    },
    {
      path: 'operation-log',
      component: () => import('@/views/table/operation-log'),
      name: 'InlineEditTable',
      meta: { title: '操作日志' }
    }
  ]
}
export default tableRouter
