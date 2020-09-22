<template>
  <div class="app-container">
    <el-button type="info">新增用户</el-button>
    <el-table v-loading="loading" style="width: 100%;" :data="tableData" :header-cell-style="setColor">
      <el-table-column label="编号" align="center" prop="zip" />
      <el-table-column label="用户" align="center" prop="user" />
      <el-table-column label="真实姓名" align="center" prop="name" />
      <el-table-column label="角色" align="center" prop="role" />
      <el-table-column label="更新时间" align="center" prop="date" />
      <el-table-column label="状态" align="center" prop="status" />
      <el-table-column label="操作" align="center" min-width="150">
        <template slot-scope="scope">
          <el-button type="text" @click="handleClick(scope.row)">编辑</el-button>
          <el-button type="text">修改密码</el-button>
          <el-button type="text">停用</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
// import ArticleDetail from './components/ArticleDetail'

export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        user: 'admin',
        role: '信息查询',
        name: '王小虎',
        status: '已启用',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 1
      }, {
        date: '2016-05-04',
        user: 'admin',
        role: '信息查询',
        name: '王小虎',
        status: '已启用',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 2
      }, {
        date: '2016-05-01',
        user: 'admin',
        role: '信息查询',
        name: '王小虎',
        status: '已启用',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 3
      }, {
        date: '2016-05-03',
        user: 'admin',
        role: '信息查询',
        name: '王小虎',
        status: '已启用',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 4
      }]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
    }
  }
  // name: 'CreateArticle',
  // components: { ArticleDetail }
}
</script>

