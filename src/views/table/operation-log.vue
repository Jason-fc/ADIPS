<template>
  <div class="app-container">
    <el-table v-loading="loading" style="width: 100%;" :data="tableData" :header-cell-style="setColor">
      <el-table-column label="编号" align="center" prop="num" />
      <el-table-column label="用户名" align="center" prop="user" />
      <el-table-column label="姓名" align="center" prop="name" />
      <el-table-column label="操作时间" align="center" prop="time" />
      <el-table-column label="IP地址" align="center" prop="ip" />
      <el-table-column label="操作模块" align="center" prop="op" />
      <el-table-column label="操作功能" align="center" prop="fun" />
    </el-table>
    <el-pagination
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      style="margin-left:300px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { fetchList } from '@/api/article'

export default {
  name: 'InlineEditTable',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      tableData: [
        {
          num: '1080',
          user: 'admin',
          name: '超级管理员',
          time: '2020-09-22 11:00',
          ip: '192.192.949.01',
          op: '报警管理',
          fun: 'EO执行超期报警'
        }, {
          num: '1080',
          user: 'admin',
          name: '超级管理员',
          time: '2020-09-22 11:00',
          ip: '192.192.949.01',
          op: '报警管理',
          fun: 'EO执行超期报警'
        }, {
          num: '1080',
          user: 'admin',
          name: '超级管理员',
          time: '2020-09-22 11:00',
          ip: '192.192.949.01',
          op: '报警管理',
          fun: 'EO执行超期报警'
        }, {
          num: '1080',
          user: 'admin',
          name: '超级管理员',
          time: '2020-09-22 11:00',
          ip: '192.192.949.01',
          op: '报警管理',
          fun: 'EO执行超期报警'
        }, {
          num: '1080',
          user: 'admin',
          name: '超级管理员',
          time: '2020-09-22 11:00',
          ip: '192.192.949.01',
          op: '报警管理',
          fun: 'EO执行超期报警'
        }]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      this.listLoading = true
      const { data } = await fetchList(this.listQuery)
      const items = data.items
      this.list = items.map(v => {
        this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
        v.originalTitle = v.title //  will be used when user click the cancel botton
        return v
      })
      this.listLoading = false
    },
    cancelEdit(row) {
      row.title = row.originalTitle
      row.edit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      row.edit = false
      row.originalTitle = row.title
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
