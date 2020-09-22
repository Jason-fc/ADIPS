<template>
  <div class="app-container">
    <el-form :inline="true" label-width="100px" size="small">
      <el-form-item label="AD号">
        <el-input placeholder="输入匹配关键字" style="width:130px" />
      </el-form-item>
      <el-form-item label="处理单适用性">
        <el-select placeholder="" style="width:60px">
          <el-option
            v-for="item in authorityInfo"
            :key="item.abbreviation"
            :label="item.abbreviation"
            :value="item.abbreviation"
          />
        </el-select>
        <el-input placeholder="输入数值" style="width:90px" />
      </el-form-item>
      <el-form-item label="段落单适用性">
        <el-select placeholder="" style="width:60px">
          <el-option
            v-for="item in authorityInfo"
            :key="item.abbreviation"
            :label="item.abbreviation"
            :value="item.abbreviation"
          />
        </el-select>
        <el-input placeholder="输入数值" style="width:90px" />
      </el-form-item>
      <el-button type="primary" size="small">查询</el-button>
      <el-button type="primary" size="small">清除</el-button>
      <el-button size="small">导出记录</el-button>
      <el-button size="small">栏目设定</el-button>
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
        />
      </el-form-item>
      <el-form-item>
        <el-checkbox>处理单附件非空</el-checkbox>
        <el-checkbox>段落附件非空</el-checkbox>
      </el-form-item>
    </el-form>
    <div class="table-main">
      <el-table style="width: 100%;" :data="tableData" :header-cell-style="setColor">
        <!-- <el-table-column type="index" width="50" label="序号">
          <template slot-scope="scope">{{ scope.$index+1+index }}</template>
        </el-table-column> -->
        <el-table-column label="适航指令编号" prop="num" align="center" />
        <el-table-column label="适航指令标题" prop="adnum" align="center" />
        <el-table-column label="生效日期" prop="date" align="center">
          <!-- <template slot-scope="scope">
            {{ new Date(scope.row.createTime).format('yyyy-MM-dd hh:mm:ss') }}
          </template> -->
        </el-table-column>
        <el-table-column label="处理单编号" prop="num" align="center" />
        <el-table-column label="分处理单编号" prop="adnum" align="center" />
        <el-table-column label="处理单适用性" prop="adnum" align="center">
          <el-table-column label="飞机型号" prop="num" align="center" />
          <el-table-column label="发动机" prop="num" align="center" />
          <el-table-column label="附件" prop="num" align="center" />
          <el-table-column label="APU" prop="num" align="center" />
          <el-table-column label="起落架" prop="num" align="center" />
        </el-table-column>
        <el-table-column label="段落序号" prop="adnum" align="center" />
        <el-table-column label="段落编号" prop="num" align="center" />
        <el-table-column label="执行文件编号" prop="num" align="center" />
        <el-table-column label="执行文件状态" prop="num" align="center" />
        <el-table-column label="段落适用性" prop="num" align="center">
          <el-table-column label="飞机" prop="num" align="center" />
          <el-table-column label="发动机" prop="num" align="center" />
          <el-table-column label="附件" prop="num" align="center" />
          <el-table-column label="APU" prop="num" align="center" />
          <el-table-column label="起落架" prop="num" align="center" />
        </el-table-column>
        <el-table-column label="参考文件编号" prop="num" align="center" />
        <el-table-column label="重检" prop="num" align="center" />
        <!-- <el-table-column prop="status" label="申请状态">
          <template slot-scope="scope">
            <span>{{ scope.row.status| filterStatus }}</span>
          </template>
        </el-table-column> -->
        <!-- <el-table-column label="操作" align="center" fixed="right" width="150">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              title="修改"
              @click="edit(scope.row)"
            />
            <el-button size="mini" type="danger" icon="el-icon-delete" title="删除" @click="subDelete(scope.row)" />
          </template>
        </el-table-column> -->
      </el-table>
      <div class="block">
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
  </div>
</template>

<script>
// import SwitchRoles from './components/SwitchRoles'

export default {
  name: 'PagePermission',
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
  // components: { SwitchRoles },
  methods: {
    handleRolesChange() {
      this.$router.push({ path: '/permission/index?' + +new Date() })
    },
    setColor({ rowIndex, columnIndex }) {
      if (columnIndex === 9 && rowIndex === 0) {
        return { background: 'rgb(220,220,220)', color: '#606266' }
      } else if (columnIndex < 3 && rowIndex === 0 || columnIndex >= 6 && rowIndex === 0 || columnIndex > 4 && rowIndex === 1) {
        return { background: 'rgb(221,221,255)', color: '#606266' }
      } else {
        return { background: 'rgb(221,255,221)', color: '#606266' }
      }
    }
  }
}
</script>
