<template>
  <div class="components-container">
    <el-form :inline="true">
      <el-form-item label="生效日期" style="margin:0">
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
        <el-form-item label="单机号" style="margin-left:10px">
          <el-input placeholder="输入完整单机号" style="width:150px" />
        </el-form-item>
        <el-button type="primary" size="small">查询</el-button>
        <el-button type="primary" size="small">清除</el-button>
        <el-button size="small">导出记录</el-button>
        <el-button size="small">栏目设定</el-button>
      </el-form-item>
      <p style="color:red">注意：单机(飞机/发动机)编号，请输入完整编号，作为查询条件</p>
    </el-form>
    <el-table v-loading="loading" style="width: 100%;" :header-cell-style="setColor">
      <el-table-column label="适航指令编号" align="center" min-width="120px" />
      <el-table-column label="适航指令标题" align="center" min-width="120px" />
      <el-table-column label="单机编号" align="center" />
      <el-table-column label="单机状态" align="center" />
      <el-table-column label="生效日期" align="center" />
      <el-table-column label="处理单编号" align="center" min-width="120px" />
      <el-table-column label="分处理单编号" align="center" min-width="120px" />
      <el-table-column label="段落序号" align="center" />
      <el-table-column label="段落编号" align="center" />
      <el-table-column label="执行文件编号" align="center" min-width="120px" />
      <el-table-column label="执行文件状态" align="center" min-width="120px" />
      <el-table-column label="段落适用性" align="center">
        <el-table-column label="飞机" align="center" />
        <el-table-column label="发动机" align="center" />
        <el-table-column label="附件" align="center" />
        <el-table-column label="APU" align="center" />
        <el-table-column label="起落架" align="center" />
      </el-table-column>
      <el-table-column label="评估结论" align="center" />
      <el-table-column label="完成期限" align="center" />
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
// import JsonEditor from '@/components/JsonEditor'

const jsonData = '[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]'

export default {
  name: 'JsonEditorDemo',
  // components: { JsonEditor },
  data() {
    return {
      value: JSON.parse(jsonData)
    }
  },
  methods: {
    setColor({ rowIndex, columnIndex }) {
      if (columnIndex === 5 && rowIndex === 0 || columnIndex === 6 && rowIndex === 0) {
        return { background: 'rgb(221,255,221)', color: '#606266' }
      } else if (columnIndex === 10) {
        return { background: 'rgb(220,220,220)', color: '#606266' }
      } else {
        return { background: 'rgb(221,221,255)', color: '#606266' }
      }
    }
  }
}
</script>

<style scoped>
.editor-container{
  position: relative;
  height: 100%;
}
</style>

