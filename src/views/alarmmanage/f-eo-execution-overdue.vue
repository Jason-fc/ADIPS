<template>
  <div class="chart-container">
    <el-table v-loading="loading" style="width: 100%;" :data="tableData" :header-cell-style="setColor">
      <el-table-column label="工程文件编号" align="center" prop="num" />
      <el-table-column label="工程文件截止日期" align="center" prop="date" />
      <el-table-column label="AD编号" align="center" prop="adnum" />
      <el-table-column label="AD段落" align="center" prop="num" />
      <el-table-column label="执行状态" align="center" prop="status" />
      <el-table-column label="已完成" align="center" prop="status" />
      <el-table-column label="执行中" align="center" prop="status" />
      <el-table-column label="未完成" align="center" prop="status" />
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
export default {
  data() {
    return {
      tableData: [{
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '异常',
        enddate: '2023-12-12',
        overdue: '-9',
        alarmstatus: '超过九天'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '异常',
        enddate: '2023-12-12',
        overdue: '3',
        alarmstatus: '6天(包含)以内'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '异常',
        enddate: '2023-12-12',
        overdue: '4',
        alarmstatus: '6天(包含)以内'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '异常',
        enddate: '2023-12-12',
        overdue: '9',
        alarmstatus: '正常'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '异常',
        enddate: '2023-12-12',
        overdue: '9',
        alarmstatus: '正常'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '异常',
        enddate: '2023-12-12',
        overdue: '9',
        alarmstatus: '正常'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '异常',
        enddate: '2023-12-12',
        overdue: '9',
        alarmstatus: '正常'
      }
      ]
    }
  },
  methods: {
    setColor({ rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return { background: 'rgb(221,221,255)', color: '#606266' }
      }
    }
  }
}
</script>

<style>

</style>
