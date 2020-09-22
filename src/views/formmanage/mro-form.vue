<template>
  <div class="components-container">
    <el-form :inline="true">
      <el-form-item label="颁发日期">
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
        <el-form-item label="MRO编号">
          <el-input placeholder="请输入MRO编号" style="width:150px" />
        </el-form-item>
        <el-button type="primary" size="small">查询</el-button>
        <el-button type="primary" size="small">清除</el-button>
        <el-button size="small">导出记录</el-button>
      </el-form-item>
    </el-form>

    <el-table v-loading="loading" style="width: 100%;" :header-cell-style="setColor">
      <el-table-column label="EB/MRO编号" align="center" />
      <el-table-column label="涉及AD" align="center" />
      <el-table-column label="颁发日期" align="center" />
      <el-table-column label="预计生效日期" align="center" />
      <el-table-column label="解读时间" align="center" />
      <el-table-column label="解读记录类别" align="center" />
      <el-table-column label="备注" align="center" />
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
// import MarkdownEditor from '@/components/MarkdownEditor'

// const content = `
// **This is test**

// * vue
// * element
// * webpack

// `
export default {
  name: 'MarkdownDemo',
  // components: { MarkdownEditor },
  // data() {
  //   return {
  //     content1: content,
  //     content2: content,
  //     content3: content,
  //     content4: content,
  //     html: '',
  //     languageTypeList: {
  //       'en': 'en_US',
  //       'zh': 'zh_CN',
  //       'es': 'es_ES'
  //     }
  //   }
  // },
  computed: {
    language() {
      return this.languageTypeList['en']
    }
  },
  methods: {
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml()
      console.log(this.html)
    },
    setColor({ rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return { background: 'rgb(221,221,255)', color: '#606266' }
      }
    }
  }
}
</script>

<style scoped>
.editor-container{
  margin-bottom: 30px;
}
.tag-title{
  margin-bottom: 5px;
}
</style>
