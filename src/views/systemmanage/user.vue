<template>
  <div class="app-container">
    <el-button type="info">新增用户</el-button>
    <el-table v-loading="loading" style="width: 100%;" :data="tableData" :header-cell-style="setColor">
      <el-table-column label="编号" align="center" prop="zip" />
      <el-table-column label="用户" align="center" />
      <el-table-column label="真实姓名" align="center" prop="name" />
      <el-table-column label="角色" align="center" />
      <el-table-column label="更新时间" align="center" prop="date" />
      <el-table-column label="状态" align="center" />
      <el-table-column label="操作" align="center" />
      <!-- <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template> -->
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
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
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

