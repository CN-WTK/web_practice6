<template>
  <el-card>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="categoryName"
      label="分类名称"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="categoryRank"
      label="排序值"
      width="120">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="添加时间"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column 
      label="操作"
      width="300"
    >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          @click="handleChildren(scope.$index, scope.row)">下级分类</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div class="block">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </el-card>
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
        tableData: [],
        multipleSelection: [],
        total: 0,
        currentPage: 1,
        pageSize: 10,
      }
    },
    mounted() {
      this.getCategory()
    },
    methods: {
      getCategory() {
        const level = 1, parent_id = 0
        axios.get('/api/categories', {
          params: {
            pageNumber: this.currentPage,
            pageSize: this.pageSize,
            categoryLevel: level,
            parentId: parent_id
          }
        }).then(res => {
          this.tableData = res.list
          this.total = res.totalCount
          this.currentPage = res.currPage
        })
      },
      handleCurrentChange(val){
        this.currentPage = val;
        this.getCategory();
        console.log(this.currentPage);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>