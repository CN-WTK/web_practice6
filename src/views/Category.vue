<template>
  <Table
    :tableHeader="tableHeader"
    :tableData="tableData"
    :page="page"
    @currentChange="handleCurrentChange"
  >
    <template #header-buttons>
      <el-button type="primary" size="small">
        <el-icon class="el-icon-plus"></el-icon>
        <span>增加</span>
      </el-button>
      <el-button type="danger" size="small">
        <el-icon class="el-icon-delete"></el-icon>
        <span>批量删除</span>
      </el-button>
    </template>
    <template #opeartion-buttons>
      <el-button
        size="mini"
        @click="handleEdit(scope.$index, scope.row)">修改</el-button>
      <el-button
        size="mini"
        @click="handleChildren(scope.$index, scope.row)">下级分类</el-button>
      <el-button
        size="mini"
        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
    </template>
  </Table>
</template>


<script>
import axios from 'axios'
import Table from '../components/Table'
export default {
  components: {
    Table
  },
  data() {
    return{
      tableHeader: [
          {
            type: 'selection',
            width: "55",
          },
          {
            prop: 'categoryName',
            label: '分类名称',
          },
          {
            prop: 'categoryRank',
            label: '排序值',
            width: "120",
          },
          {
            prop: 'createTime',
            label: '添加时间',
            width: "200",
          }
      ],
      tableData: [],
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 10,
      }
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    getCategory() {
      const level = 1, parent_id = 0
      axios.get('/api/categories', {
        params: {
          pageNumber: this.page.currentPage,
          pageSize: this.page.pageSize,
          categoryLevel: level,
          parentId: parent_id
        }
      }).then(res => {
        this.tableData = res.list
        this.page.total = res.totalCount
        this.page.currentPage = res.currPage
      })
    },
    handleCurrentChange(val){
      this.page.currentPage = val;
      this.getCategory();
      console.log(this.page.currentPage);
    },
  }
}
</script>