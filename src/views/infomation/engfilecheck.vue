<template>
  <div class="app-container">
    <el-form label-width="120px" size="small">
      <el-form-item label="工程文件编号">
        <el-input placeholder="全部" style="width:150px" />
        <el-button type="primary" size="small" icon="el-icon-search" style="margin-left:10px">查询</el-button>
        <el-button type="primary" size="small" icon="el-icon-refresh-right">清除</el-button>
        <el-button size="small" icon="el-icon-refresh-right">导出记录</el-button>

      </el-form-item>
    </el-form>
    <div class="table-main">
      <el-table
        v-loading="loading"
        :data="tableData"
        :highlight-current-row="true"
        style="width: 100%;"
        :header-cell-style="setColor"
        @selection-change="selectionChange"
      >
        <el-table-column label="工程文件编号" prop="num" />
        <el-table-column label="工程文件标题" prop="adnum" />
        <el-table-column label="生效日期" prop="date" />
        <el-table-column label="截止日期" prop="enddate" />
        <el-table-column label="截止期限" prop="enddate" />
        <el-table-column label="关联AD号" prop="" />
        <el-table-column label="参考AD号" prop="" />
        <el-table-column label="执行状态" prop="status" />
        <el-table-column label="已完成单机" prop="" />
        <el-table-column label="执行中单机" prop="" />
        <el-table-column label="未完成单机" prop="" />
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
  </div>
</template>

<script>
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数
// import SwitchRoles from './components/SwitchRoles'

export default {
  name: 'DirectivePermission',
  // components: { SwitchRoles },
  directives: { permission },
  data() {
    return {
      key: 1, // 为了能每次切换权限的时候重新初始化指令
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
  methods: {
    checkPermission,
    handleRolesChange() {
      this.key++
    },
    setColor(columnIndex) {
      // return 'background:rgb(221,255,221)'
      return { background: 'rgb(221,221,255)', color: '#606266' }
    }

  }
}
</script>

<style lang="scss" scoped>
.app-container {
  ::v-deep .permission-alert {
    width: 320px;
    margin-top: 15px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;
  }
  ::v-deep .permission-sourceCode {
    margin-left: 15px;
  }
  ::v-deep .permission-tag {
    background-color: #ecf5ff;
  }
}
</style>

