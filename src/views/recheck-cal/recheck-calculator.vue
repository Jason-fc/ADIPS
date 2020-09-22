<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-button type="primary" size="small">导入数据记录</el-button>
      <el-button type="primary" size="small">重检计算</el-button>
      <el-button type="primary" size="small">导出数据记录</el-button>
    </el-form>
    <br>
    <el-table v-loading="loading" style="width: 100%;" :header-cell-style="setColor">
      <el-table-column label="适航指令" align="center">
        <el-table-column label="类型" align="center" />
        <el-table-column label="编号" align="center" />
      </el-table-column>

      <el-table-column label="文件" align="center">
        <el-table-column label="类型" align="center" />
        <el-table-column label="编号" align="center" />
      </el-table-column>

      <el-table-column label="重检间隔" align="center" />
      <el-table-column label="适用机型" align="center" />
      <el-table-column label="机号" align="center" />
      <el-table-column label="本次执行" align="center">
        <el-table-column label="日期" align="center" />
        <el-table-column label="小时" align="center" />
        <el-table-column label="循环" align="center" />
      </el-table-column>

      <el-table-column label="计算差值" align="center">
        <el-table-column label="日期" align="center" />
        <el-table-column label="小时" align="center" />
        <el-table-column label="循环" align="center" />
      </el-table-column>
      <el-table-column label="执行间隔" align="center" />
      <el-table-column label="结论" align="center" />

      <el-table-column label="预计下次时间" align="center">
        <el-table-column label="类型" align="center" />
        <el-table-column label="数值" align="center" />
      </el-table-column>
      <el-table-column label="状态" align="center" />
      <el-table-column label="上次执行" align="center">
        <el-table-column label="日期" align="center" />
        <el-table-column label="小时" align="center" />
        <el-table-column label="循环" align="center" />
      </el-table-column>
      <el-table-column label="备注" align="center" />
      <el-table-column label="报告月份" align="center" />

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
import { parseTime } from '@/utils'
// options components
// import FilenameOption from './components/FilenameOption'
// import AutoWidthOption from './components/AutoWidthOption'
// import BookTypeOption from './components/BookTypeOption'

export default {
  name: 'ExportExcel',
  // components: { FilenameOption, AutoWidthOption, BookTypeOption },
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: '',
      autoWidth: true,
      bookType: 'xlsx'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    setColor({ rowIndex, columnIndex }) {
      if (rowIndex === 0 && columnIndex <= 5 || rowIndex === 0 && columnIndex > 8 || rowIndex === 1 && columnIndex < 7 || rowIndex === 1 && columnIndex > 9) {
        return { background: 'rgb(255,255,221)', color: '#606266' }
      } else {
        return { background: 'rgb(221,255,221)', color: '#606266' }
      }
    },
    fetchData() {
      this.listLoading = true
      fetchList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
        const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>

<style>
.radio-label {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 30px;
}
</style>
