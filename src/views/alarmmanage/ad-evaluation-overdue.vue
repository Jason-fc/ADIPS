<template>
  <div class="chart-container">
    <el-table v-loading="loading" style="width: 100%;" :data="tableData" :header-cell-style="setColor" :row-style="setRowColor">
      <el-table-column label="AD编号" align="center" prop="num" />
      <el-table-column label="AD生效日期" align="center" prop="date" />
      <el-table-column label="AD处理单编号" align="center" prop="adnum" />
      <el-table-column label="AD处理单状态" align="center" prop="status" />
      <el-table-column label="评估截止日期" align="center" prop="enddate" />
      <el-table-column label="到期天数" align="center" prop="overdue" />
      <el-table-column label="报警状态" align="center" prop="alarmstatus" />
    </el-table>
  </div>
</template>

<script>
// import Chart from '@/components/Charts/Keyboard'

export default {
  name: 'KeyboardChart',
  data() {
    return {
      tableData: [{
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '汇总中',
        enddate: '2023-12-12',
        overdue: '-9',
        alarmstatus: '超过九天'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '评估中',
        enddate: '2023-12-12',
        overdue: '3',
        alarmstatus: '6天(包含)以内'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '评估中',
        enddate: '2023-12-12',
        overdue: '4',
        alarmstatus: '6天(包含)以内'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '评估中',
        enddate: '2023-12-12',
        overdue: '9',
        alarmstatus: '正常'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '评估中',
        enddate: '2023-12-12',
        overdue: '5',
        alarmstatus: '正常'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '评估中',
        enddate: '2023-12-12',
        overdue: '12',
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
    setRowColor({ row }) {
    // 此处应根据到期天数的设置不同颜色
      if (row.overdue < 0) {
        return { background: 'rgb(170,170,170)' }
      } else if (row.overdue < 7) {
        return { background: 'rgb(255,255,136)' }
      } else {
        return { background: 'rgb(220,254,220)' }
      }
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

