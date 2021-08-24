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
        <span>解除禁用</span>
      </el-button>
      <el-button type="danger" size="small">
        <el-icon class="el-icon-delete"></el-icon>
        <span>禁用账户</span>
      </el-button>
    </template>
    <template #opeartion-buttons>
      <el-button
        size="mini"
        @click="handleEdit(scope.$index, scope.row)">修改</el-button>
      <el-button
        size="mini"
        @click="handleChildren(scope.$index, scope.row)">下架</el-button>
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
          prop: 'nickName',
          label: '昵称'
        },
        {
          prop: 'loginName',
          label: '登录名'
        },
        {
          content: 'lockedFlag',
          label: '身份状态'
        },
        {
          content: 'isDeleted',
          label: '是否注销'
        },
        {
          prop: 'createTime',
          label: '注册时间'
        }
      ],
      tableData: [],
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 10,
        operation: false
      }
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    getCategory() {
      axios.get('/api/users', {
        params: {
          pageNumber: this.page.currentPage,
          pageSize: this.page.pageSize,
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

