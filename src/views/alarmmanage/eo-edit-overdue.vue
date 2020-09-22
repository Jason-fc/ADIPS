<template>
  <div class="chart-container">
    <el-table v-loading="loading" style="width: 100%;" :data="tableData" :header-cell-style="setColor" :row-style="setRowColor">
      <el-table-column label="工程文件编号" align="center" prop="num" />
      <el-table-column label="AD编号" align="center" prop="adnum" />
      <el-table-column label="预计颁发日期" align="center" prop="date" />
      <el-table-column label="报警状态" align="center" prop="status" />
    </el-table>
  </div>
</template>

<script>
// import Chart from '@/components/Charts/LineMarker'

export default {
  name: 'LineChart',
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
    },
    setRowColor({ rowIndex }) {
      return { background: 'rgb(170,170,170)' }
    }
  }
  // components: { Chart }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

