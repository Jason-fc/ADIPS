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
        <el-checkbox>isLatest=1</el-checkbox>
      </el-form-item>
    </el-form>
    <el-table v-loading="loading" style="width: 100%;" :data="tableData" :header-cell-style="setColor">
      <!-- <el-table-column type="index" width="50" label="序号">
          <template slot-scope="scope">{{ scope.$index+1+index }}</template>
        </el-table-column> -->
      <el-table-column label="AD处理单IsLatest" prop="isLatest" align="center" min-width="150px" />

      <el-table-column label="适航指令AD文档" prop="isLatest" align="center">
        <el-table-column label="来源" prop="from" align="center" />
        <el-table-column label="适航指令编号" prop="num" align="center" min-width="120px" />
        <el-table-column label="AD文档标题" prop="adnum" align="center" min-width="120px" />
        <el-table-column label="颁发日期" prop="date" align="center" />
        <!-- <template slot-scope="scope">
            {{ new Date(scope.row.createTime).format('yyyy-MM-dd hh:mm:ss') }}
          </template> -->
        <!-- </el-table-column> -->
        <el-table-column label="生效日期" prop="date" align="center">
          <!-- <template slot-scope="scope">
            {{ new Date(scope.row.createTime).format('yyyy-MM-dd hh:mm:ss') }}
          </template> -->
        </el-table-column>
        <el-table-column label="创建日期" prop="date" align="center">
          <!-- <template slot-scope="scope">
            {{ new Date(scope.row.createTime).format('yyyy-MM-dd hh:mm:ss') }}
          </template> -->
        </el-table-column>
        <el-table-column label="状态" prop="status" align="center" />
        <el-table-column label="受影响的机型" align="center" min-width="120px" />
        <el-table-column label="受影响的发动机类型" align="center" min-width="150px" />
        <el-table-column label="受影响的附件" align="center" min-width="120px" />
        <el-table-column label="受影响的APU类型" align="center" min-width="150px" />
        <el-table-column label="受影响的起落架" align="center" min-width="120px" />
      </el-table-column>

      <el-table-column label="适航指令AD处理单" align="center">
        <el-table-column label="处理单编号" align="center" min-width="120px" />
        <el-table-column label="创建时间" align="center" />
        <el-table-column label="用户" align="center" />
        <el-table-column label="ATA章节" align="center" />
        <el-table-column label="评估截止日期" prop="enddate" align="center" min-width="120px">
          <!-- <template slot-scope="scope">
            {{ new Date(scope.row.createTime).format('yyyy-MM-dd hh:mm:ss') }}
          </template> -->
        </el-table-column>
        <el-table-column label="状态" />
      </el-table-column>

      <el-table-column label="适航指令AD分处理单" align="center">
        <el-table-column label="IsLatest" align="center" />
        <el-table-column label="分处理单编号" align="center" min-width="120px" />
        <el-table-column label="创建时间" align="center" />
        <el-table-column label="状态" align="center" />
      </el-table-column>

      <el-table-column label="" align="center">
        <el-table-column label="AD段落索引" align="center" min-width="120px" />
        <el-table-column label="AD段落号" align="center" min-width="120px" />
        <el-table-column label="是否适用" align="center" />
        <el-table-column label="受影响的飞机" align="center" min-width="120px" />
        <el-table-column label="受影响的发动机" align="center" min-width="120px" />
        <el-table-column label="受影响的附件" align="center" min-width="120px" />
        <el-table-column label="受影响的APU" align="center" min-width="120px" />
        <el-table-column label="受影响的起落架" align="center" min-width="120px" />
        <el-table-column label="适航指令要求" align="center" min-width="120px" />
        <el-table-column label="评估意见" align="center" />
        <el-table-column label="是否重检" align="center" />
        <el-table-column label="完成期限" align="center" />
        <el-table-column label="非结构完成期限" align="center" min-width="120px" />
        <el-table-column label="首检时限" align="center" />
        <el-table-column label="非结构化首检时限" align="center" min-width="150px" />
        <el-table-column label="重检间隔" align="center" />
        <el-table-column label="非结构化重检间隔" align="center" min-width="150px" />
        <el-table-column label="终止措施截止期限" align="center" min-width="150px" />
        <el-table-column label="非结构化终止措施截止" align="center" min-width="170px" />
        <el-table-column label="评估人" align="center" />
      </el-table-column>

      <el-table-column label="com.airchina.tdms.relate.TDMSEFRDocument" align="center">
        <el-table-column label="工程文件标题" align="center" min-width="120px" />
        <el-table-column label="操作类型" align="center" />
        <el-table-column label="工程文件类型" align="center" min-width="120px" />
        <el-table-column label="工程文件编号" align="center" min-width="120px" />
        <el-table-column label="工程文件状态" align="center" min-width="120px" />
        <el-table-column label="执行结果编号" align="center" min-width="120px" />
        <el-table-column label="执行结果状态" align="center" min-width="120px" />
        <el-table-column label="预计颁发时间" align="center" min-width="120px" />
      </el-table-column>
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
        isLatest: '1',
        from: 'FAA',
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: 'tdms未生效',
        enddate: '2023-12-12',
        overdue: '-9',
        alarmstatus: '超过九天'
      }, {
        isLatest: '1',
        from: 'FAA',
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: 'tdms未生效',
        enddate: '2023-12-12',
        overdue: '3',
        alarmstatus: '6天(包含)以内'
      }, {
        isLatest: '0',
        from: 'FAA',
        num: 'A180',
        date: '2020-12-12',
        adnum: 'XPS13-A190',
        status: 'tdms未生效',
        enddate: '2023-12-12',
        overdue: '4',
        alarmstatus: '6天(包含)以内'
      }, {
        isLatest: '0',
        from: 'FAA',
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
    setColor({ rowIndex, columnIndex }) {
      console.log(columnIndex)
      if (columnIndex === 0 && rowIndex === 0) {
        return { background: ' white', color: ' #606266' }
      } else if (columnIndex === 1 && rowIndex === 0 || columnIndex < 12 && rowIndex === 1) {
        return { background: 'lightgray', color: '#606266' }
      } else if (columnIndex === 2 && rowIndex === 0 || columnIndex >= 12 && columnIndex < 18 && rowIndex === 1) {
        return { background: 'rgb(221,221,238)', color: '#606266' }
      } else if (columnIndex === 3 && rowIndex === 0 || columnIndex >= 18 && columnIndex < 22 && rowIndex === 1) {
        return { background: 'rgb(221,221,255)', color: '#606266' }
      } else if (columnIndex === 4 && rowIndex === 0 || columnIndex >= 22 && columnIndex < 25 && rowIndex === 1 || columnIndex >= 30 && columnIndex < 42 && rowIndex === 1) {
        return { background: 'rgb(221,221,204)', color: '#606266' }
      } else if (columnIndex >= 25 && columnIndex < 30 && rowIndex === 1) {
        return { background: 'rgb(238,238,221)', color: '#606266' }
      } else {
        return { background: 'rgb(221,221,221)', color: '#606266' }
      }
    }
  }

}
</script>

<style>

</style>
