<template>
  <div class="components-container">
    <el-form>
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
        <el-button type="primary" size="small">查询</el-button>
        <el-button type="primary" size="small">清除</el-button>
        <el-button size="small">导出记录</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="loading" style="width: 100%;" :header-cell-style="setColor">
      <!-- <el-table-column type="index" width="50" label="序号">
          <template slot-scope="scope">{{ scope.$index+1+index }}</template>
        </el-table-column> -->
      <el-table-column label="适航指令编号" align="center" min-width="120px" />
      <el-table-column label="适航指令标题" align="center" min-width="120px" />
      <el-table-column label="适用机型" align="center" />
      <el-table-column label="截止日期" align="center" />
      <el-table-column label="颁发日期" align="center" />
      <el-table-column label="生效日期" align="center" />
      <el-table-column label="接收/下载" align="center" />
      <el-table-column label="分发日期" align="center" />
      <el-table-column label="反馈截止" align="center" />
      <el-table-column label="评估日期" align="center" />
      <el-table-column label="工程文件编号" align="center" min-width="120px" />
      <el-table-column label="预计下发" align="center" />
      <el-table-column label="下发日期" align="center" />
      <el-table-column label="截止日期" align="center" />
      <el-table-column label="文件流转状态" align="center" min-width="120px" />
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
// import Tinymce from '@/components/Tinymce'
export default {
  name: 'TinymceDemo',
  // components: { Tinymce },
  data() {
    return {
      content:
      `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>
      </ul>`
    }
  },
  methods: {
    setColor({ columnIndex }) {
      if (columnIndex < 10) {
        return { background: 'rgb(221,221,255)', color: '#606266' }
      } else if (columnIndex === 14) {
        return { background: 'rgb(254,220,220)', color: '#606266' }
      } else {
        return { background: 'rgb(221,255,221)', color: '#606266' }
      }
    }
  }
}
</script>

<style scoped>
.editor-content{
  margin-top: 20px;
}
</style>

