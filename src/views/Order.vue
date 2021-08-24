<template>
  <Table
    :tableHeader="tableHeader"
    :tableData="tableData"
    :page="page"
    @currentChange="handleCurrentChange"
  >
    <template #header-buttons>
      <el-input
        style="width: 200px; margin-right: 10px"
        placeholder="请输入订单号"
        v-model="orderNo"
        size="small"
        clearable
      />
      <el-select v-model="orderStatus" size="small" style="width: 200px; margin-right: 10px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button type="primary" size="small" icon="el-icon-s-home">配货完成</el-button>
      <el-button type="primary" size="small" icon="el-icon-s-home">出库</el-button>
      <el-button type="danger" size="small" icon="el-icon-delete">关闭订单</el-button>
    </template>
    <template #opeartion-buttons>
      <el-button size="mini">修改</el-button>
      <el-button size="mini">下架</el-button>
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
          prop: 'orderNo',
          label: '订单号'
        },
        {
          prop: 'totalPrice',
          label: '订单总价'
        },
        {
          content: 'orderStatus',
          label: '订单状态'
        },
        {
          content: 'payType',
          label: '支付方式'
        },
        {
          prop: 'createTime',
          label: '注册时间'
        }
      ],
      options: [{
        value: '',
        label: '全部'
      }, {
        value: 0,
        label: '待支付'
      }, {
        value: 1,
        label: '已支付'
      }, {
        value: 2,
        label: '配货完成'
      }, {
        value: 3,
        label: '出库成功'
      }, {
        value: 4,
        label: '交易成功'
      }, {
        value: -1,
        label: '手动关闭'
      }, {
        value: -2,
        label: '超时关闭'
      }, {
        value: -3,
        label: '商家关闭'
      }],
      tableData: [],
      orderNo: '',
      orderStatus: '',
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
      axios.get('/api/orders', {
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

