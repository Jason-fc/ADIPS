/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const formRouter = {
  path: '/form-manage',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: '报表管理',
    icon: 'form'
  },
  children: [
    {
      path: 'ad-monitor-form',
      component: () => import('@/views/formmanage/ad-monitor-form'),
      name: 'TinymceDemo',
      meta: { title: 'AD监控报表' }
    },
    {
      path: 'mro-form',
      component: () => import('@/views/formmanage/mro-form'),
      name: 'MarkdownDemo',
      meta: { title: 'MRO报表' }
    },
    {
      path: 'ad-status',
      component: () => import('@/views/formmanage/ad-status'),
      name: 'JsonEditorDemo',
      meta: { title: 'AD单机状态' }
    },
    {
      path: 'ad-recheck-form',
      component: () => import('@/views/formmanage/ad-recheck-form'),
      name: 'SplitpaneDemo',
      meta: { title: '重检AD工作清单' }
    }
    // {
    //   path: 'avatar-upload',
    //   component: () => import('@/views/formmanage/avatar-upload'),
    //   name: 'AvatarUploadDemo',
    //   meta: { title: 'Upload' }
    // },
    // {
    //   path: 'dropzone',
    //   component: () => import('@/views/formmanage/dropzone'),
    //   name: 'DropzoneDemo',
    //   meta: { title: 'Dropzone' }
    // },
    // {
    //   path: 'sticky',
    //   component: () => import('@/views/formmanage/sticky'),
    //   name: 'StickyDemo',
    //   meta: { title: 'Sticky' }
    // },
    // {
    //   path: 'count-to',
    //   component: () => import('@/views/formmanage/count-to'),
    //   name: 'CountToDemo',
    //   meta: { title: 'Count To' }
    // },
    // {
    //   path: 'mixin',
    //   component: () => import('@/views/formmanage/mixin'),
    //   name: 'ComponentMixinDemo',
    //   meta: { title: 'Component Mixin' }
    // },
    // {
    //   path: 'back-to-top',
    //   component: () => import('@/views/formmanage/back-to-top'),
    //   name: 'BackToTopDemo',
    //   meta: { title: 'Back To Top' }
    // },
    // {
    //   path: 'drag-dialog',
    //   component: () => import('@/views/formmanage/drag-dialog'),
    //   name: 'DragDialogDemo',
    //   meta: { title: 'Drag Dialog' }
    // },
    // {
    //   path: 'drag-select',
    //   component: () => import('@/views/formmanage/drag-select'),
    //   name: 'DragSelectDemo',
    //   meta: { title: 'Drag Select' }
    // },
    // {
    //   path: 'dnd-list',
    //   component: () => import('@/views/formmanage/dnd-list'),
    //   name: 'DndListDemo',
    //   meta: { title: 'Dnd List' }
    // },
    // {
    //   path: 'drag-kanban',
    //   component: () => import('@/views/formmanage/drag-kanban'),
    //   name: 'DragKanbanDemo',
    //   meta: { title: 'Drag Kanban' }
    // }
  ]
}

export default formRouter
