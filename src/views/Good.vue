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
        <span>新增商品</span>
      </el-button>
    </template>
    <template #opeartion-buttons>
      <el-button
        size="mini"
        @click="handleEdit(scope.$index, scope.row)">修改</el-button>
      <el-button
        size="mini"
        @click="handleChildren(scope.$index, scope.row)">上架</el-button>
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
          prop: 'goodsId',
          label: '商品编号',
          width: "200",
        },
        {
          prop: 'goodsName',
          label: '商品名',
          width: "200",
        },
        {
          prop: 'goodsIntro',
          label: '商品简介',
          width: "200",
        },
        {
          content: 'goodsImage',
          label: '商品图片',
          altName: '商品图片',
        },
        {
          prop: 'stockNum',
          label: '商品库存',
          width: "200",
        },
        {
          prop: 'sellingPrice',
          label: '商品售价',
          width: "200",
        },
        {
          content: 'goodsSellStatus',
          label: '上架状态',
          width: "200",
        }
      ],
      tableData: [],
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    getCategory() {
      axios.get('/api/goods/list', {
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
