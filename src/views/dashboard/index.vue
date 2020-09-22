<template>
  <div class="dashboard-container" style="margin-left:250px">
    <h1 style="margin-left:300px">欢迎</h1>
    <h3 style="color:red;text-decoration:underline;margin-left:290px">超级管理员</h3>
    <h3 style="margin-left:260px">进入后台管理中心</h3>
    <h3 style="margin-left:220px">请根据左侧菜单指引进行操作</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import adminDashboard from './admin'
// import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  // components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
