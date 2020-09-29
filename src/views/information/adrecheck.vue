<template>
  <div class="app-container">
    <el-form :inline="true" label-width="100px" size="small">
      <el-form-item label="CAMP号">
        <el-input placeholder="请输入camp号" style="width:130px" />
      </el-form-item>
      <el-form-item label="执管基地">
        <el-select placeholder="全部" style="width:80px">
          <el-option
            v-for="item in authorityInfo"
            :key="item.abbreviation"
            :label="item.abbreviation"
            :value="item.abbreviation"
          />
        </el-select>
        <el-form-item label="飞机/发动机号">
          <el-input placeholder="请输入飞机/发动机号" style="width:200px" />
        </el-form-item>
      </el-form-item>
      <el-form-item label="生效日期">
        <el-date-picker
          type="daterange"
          align="right"
          size="small"
          unlink-panels
          range-separator=""
          start-placeholder="从"
          end-placeholder="到"
          value-format="yyyy-MM-dd"
          style="width:300px"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small">查询</el-button>
        <el-button type="primary" size="small">清除</el-button>
        <el-button size="small">导出记录</el-button>
        <el-button size="small">Excel数据比对</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      :header-cell-style="setColor"
    >
      <el-table-column prop="date" label="执管基地" align="center" />
      <el-table-column prop="num" label="机型" align="center" />
      <el-table-column prop="address" label="飞机号" align="center" />
      <el-table-column prop="adnum" label="AD号" align="center" />
      <el-table-column prop="num" label="FAD号" align="center" />
      <el-table-column prop="adnum" label="CAD号" align="center" />
      <el-table-column prop="adnum" label="EAD号" align="center" />
      <el-table-column prop="num" label="CAMP条目号" align="center" />

      <el-table-column prop="address" label="本次完成" align="center">
        <el-table-column prop="date" label="日期" align="center" />
        <el-table-column prop="status" label="飞行小时" align="center" />
        <el-table-column prop="overdue" label="飞行循环" />
      </el-table-column>

      <el-table-column prop="address" label="本次执行间隔" align="center">
        <el-table-column prop="status" label="飞行小时" align="center" />
        <el-table-column prop="overdue" label="飞行循环" align="center" />
        <el-table-column prop="overdue" label="日历日" align="center" />
      </el-table-column>

      <el-table-column prop="address" label="CAMP执行问题" align="center">
        <el-table-column prop="status" label="飞行小时" align="center" />
        <el-table-column prop="overdue" label="飞行循环" align="center" />
        <el-table-column prop="overdue" label="日历日" align="center" />
      </el-table-column>
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
      key: 1, // 为了能每次切换权限的时候重新初始化指令
      tableData: [{
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '300400',
        enddate: '2023-12-12',
        overdue: '99999',
        alarmstatus: '超过九天'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '300400',
        enddate: '2023-12-12',
        overdue: '99999',
        alarmstatus: '6天(包含)以内'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '300400',
        enddate: '2023-12-12',
        overdue: '99999',
        alarmstatus: '6天(包含)以内'
      }, {
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: '300400',
        enddate: '2023-12-12',
        overdue: '99999',
        alarmstatus: '正常'
      }
      ]
    }
  },
  methods: {
    setColor({ rowIndex, columnIndex }) {
      if (columnIndex < 8 && rowIndex === 0 || columnIndex === 9 && rowIndex === 0 || columnIndex >= 3 && columnIndex <= 5) {
        return { background: 'rgb(221,221,255)', color: '#606266' }
      } else {
        return { background: 'rgb(221,255,221)', color: '#606266' }
      }
    }
  }
}
</script>

<style>

</style>
