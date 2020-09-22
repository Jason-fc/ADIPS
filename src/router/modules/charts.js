/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/alarm-manage',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '报警管理',
    icon: 'bell'
  },
  children: [
    {
      path: 'ad-evaluation-overdue',
      component: () => import('@/views/alarmmanage/ad-evaluation-overdue'),
      name: 'KeyboardChart',
      meta: { title: 'AD评估超期' }
    },
    {
      path: 'eo-edit-overdue',
      component: () => import('@/views/alarmmanage/eo-edit-overdue'),
      name: 'LineChart',
      meta: { title: 'EO编写超期' }
    },
    {
      path: 'd-eo-execution-overdue',
      component: () => import('@/views/alarmmanage/d-eo-execution-overdue'),
      name: 'MixChart',
      meta: { title: 'EO执行超期(日期型)' }
    },
    {
      path: 'f-eo-execution-overdue',
      component: () => import('@/views/alarmmanage/f-eo-execution-overdue'),
      name: 'MixChart',
      meta: { title: 'EO执行超期(文件型)' }
    }
  ]
}

export default chartsRouter
