<template>
  <div class="components-container">
    <el-form :inline="true">
      <el-form-item label="执管基地" />
      <el-select placeholder="全部" style="width:80px">
        <el-option
          v-for="item in authorityInfo"
          :key="item.abbreviation"
          :label="item.abbreviation"
          :value="item.abbreviation"
        />
      </el-select>
      <el-form-item label="完成日期" style="margin-left:10px">
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

        <el-button type="primary" size="small" style="margin-left:10px">查询</el-button>
        <el-button type="primary" size="small">清除</el-button>
        <el-button size="small" style="margin-left:20px">导出记录</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="loading" style="width: 100%;" :header-cell-style="setColor">
      <el-table-column label="项次" align="center" />
      <el-table-column label="执管基地" align="center" />
      <el-table-column label="机号" align="center" />
      <el-table-column label="通知单类型" align="center" />
      <el-table-column label="CAMP号" align="center" />
      <el-table-column label="完成级别" align="center" />
      <el-table-column label="标题内容" align="center" />
      <el-table-column label="执行基地" align="center" />
      <el-table-column label="完成情况" align="center" />
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
// import splitPane from 'vue-splitpane'

export default {
  name: 'SplitpaneDemo',
  // components: { splitPane },
  methods: {
    resize() {
      console.log('resize')
    },
    setColor({ rowIndex, columnIndex }) {
      return { background: 'rgb(221,221,255)', color: '#606266' }
    }
  }
}
</script>

<style  scoped>
  .components-container {
    position: relative;
    height: 100vh;
  }

  .left-container {
    background-color: #F38181;
    height: 100%;
  }

  .right-container {
    background-color: #FCE38A;
    height: 200px;
  }

  .top-container {
    background-color: #FCE38A;
    width: 100%;
    height: 100%;
  }

  .bottom-container {
    width: 100%;
    background-color: #95E1D3;
    height: 100%;
  }
</style>
