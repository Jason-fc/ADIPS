<template>
  <div class="app-container">
    <el-form label-width="115px" size="small">
      <el-form-item label="EO编号">
        <el-input placeholder="请输入EO编号" style="width:120px;" />
        <el-form-item label="飞机/发动机编号" style="display:inline-block">
          <el-input placeholder="请输入飞机/发动机编号" style="width:170px" />
          <el-button type="primary" size="small" icon="el-icon-search" style="margin-left:5px">查询</el-button>
          <el-button type="primary" size="small" icon="el-icon-refresh-right">清除</el-button>
          <el-button size="small" icon="el-icon-refresh-right">导出记录</el-button>
        </el-form-item>
      </el-form-item>
    </el-form>
    <p style="color:red">注意：本页的功能查询为精确查询，需要输入完整且精确的EO编号/飞机/发动机编号，作为查询条件</p>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      :header-cell-style="setColor"
    >
      <el-table-column prop="num" label="EO编号" />
      <el-table-column prop="num" label="EO标题" />
      <el-table-column prop="enddate" label="EO截止日期" />
      <el-table-column prop="num" label="所属AD编号" />
      <el-table-column prop="num" label="单机编号" />
      <el-table-column prop="date" label="执行日期" />
      <el-table-column prop="status" label="执行状态" />
    </el-table>
  </div>
</template>

<script>
import path from 'path'
import { deepClone } from '@/utils'
import { getRoutes, getRoles, addRole, deleteRole, updateRole } from '@/api/role'

const defaultRole = {
  key: '',
  name: '',
  description: '',
  routes: []
}

export default {
  data() {
    return {
      role: Object.assign({}, defaultRole),
      routes: [],
      rolesList: [],
      dialogVisible: false,
      dialogType: 'new',
      checkStrictly: false,
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      tableData: [{
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: 'tdms未生效',
        enddate: '2023-12-12',
        overdue: '-9',
        alarmstatus: '超过九天'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: 'tdms未生效',
        enddate: '2023-12-12',
        overdue: '3',
        alarmstatus: '6天(包含)以内'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: 'tdms未生效',
        enddate: '2023-12-12',
        overdue: '4',
        alarmstatus: '6天(包含)以内'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: 'tdms未生效',
        enddate: '2023-12-12',
        overdue: '9',
        alarmstatus: '正常'
      }
      ]
    }
  },
  computed: {
    routesData() {
      return this.routes
    }
  },
  created() {
    // Mock: get all routes and roles list from server
    this.getRoutes()
    this.getRoles()
  },
  methods: {
    async getRoutes() {
      const res = await getRoutes()
      this.serviceRoutes = res.data
      this.routes = this.generateRoutes(res.data)
    },
    async getRoles() {
      const res = await getRoles()
      this.rolesList = res.data
    },
    setColor({ columnIndex }) {
      if (columnIndex < 4) {
        // return 'background:rgb(221,255,221)'
        return { background: 'rgb(221,255,221)', color: '#606266' }
      } else {
        return { background: 'rgb(221,221,255)', color: '#606266' }
      }
    },

    // Reshape the routes structure so that it looks the same as the sidebar
    generateRoutes(routes, basePath = '/') {
      const res = []

      for (let route of routes) {
        // skip some route
        if (route.hidden) { continue }

        const onlyOneShowingChild = this.onlyOneShowingChild(route.children, route)

        if (route.children && onlyOneShowingChild && !route.alwaysShow) {
          route = onlyOneShowingChild
        }

        const data = {
          path: path.resolve(basePath, route.path),
          title: route.meta && route.meta.title

        }

        // recursive child routes
        if (route.children) {
          data.children = this.generateRoutes(route.children, data.path)
        }
        res.push(data)
      }
      return res
    },
    generateArr(routes) {
      let data = []
      routes.forEach(route => {
        data.push(route)
        if (route.children) {
          const temp = this.generateArr(route.children)
          if (temp.length > 0) {
            data = [...data, ...temp]
          }
        }
      })
      return data
    },
    handleAddRole() {
      this.role = Object.assign({}, defaultRole)
      if (this.$refs.tree) {
        this.$refs.tree.setCheckedNodes([])
      }
      this.dialogType = 'new'
      this.dialogVisible = true
    },
    handleEdit(scope) {
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.checkStrictly = true
      this.role = deepClone(scope.row)
      this.$nextTick(() => {
        const routes = this.generateRoutes(this.role.routes)
        this.$refs.tree.setCheckedNodes(this.generateArr(routes))
        // set checked state of a node not affects its father and child nodes
        this.checkStrictly = false
      })
    },
    handleDelete({ $index, row }) {
      this.$confirm('Confirm to remove the role?', 'Warning', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(async() => {
          await deleteRole(row.key)
          this.rolesList.splice($index, 1)
          this.$message({
            type: 'success',
            message: 'Delete succed!'
          })
        })
        .catch(err => { console.error(err) })
    },
    generateTree(routes, basePath = '/', checkedKeys) {
      const res = []

      for (const route of routes) {
        const routePath = path.resolve(basePath, route.path)

        // recursive child routes
        if (route.children) {
          route.children = this.generateTree(route.children, routePath, checkedKeys)
        }

        if (checkedKeys.includes(routePath) || (route.children && route.children.length >= 1)) {
          res.push(route)
        }
      }
      return res
    },
    async confirmRole() {
      const isEdit = this.dialogType === 'edit'

      const checkedKeys = this.$refs.tree.getCheckedKeys()
      this.role.routes = this.generateTree(deepClone(this.serviceRoutes), '/', checkedKeys)

      if (isEdit) {
        await updateRole(this.role.key, this.role)
        for (let index = 0; index < this.rolesList.length; index++) {
          if (this.rolesList[index].key === this.role.key) {
            this.rolesList.splice(index, 1, Object.assign({}, this.role))
            break
          }
        }
      } else {
        const { data } = await addRole(this.role)
        this.role.key = data.key
        this.rolesList.push(this.role)
      }

      const { description, key, name } = this.role
      this.dialogVisible = false
      this.$notify({
        title: 'Success',
        dangerouslyUseHTMLString: true,
        message: `
            <div>Role Key: ${key}</div>
            <div>Role Name: ${name}</div>
            <div>Description: ${description}</div>
          `,
        type: 'success'
      })
    },
    // reference: src/view/layout/components/Sidebar/SidebarItem.vue
    onlyOneShowingChild(children = [], parent) {
      let onlyOneChild = null
      const showingChildren = children.filter(item => !item.hidden)

      // When there is only one child route, the child route is displayed by default
      if (showingChildren.length === 1) {
        onlyOneChild = showingChildren[0]
        onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path)
        return onlyOneChild
      }

      // Show parent if there are no child route to display
      if (showingChildren.length === 0) {
        onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return onlyOneChild
      }

      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>
