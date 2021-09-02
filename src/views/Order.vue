<template>
  <Table
    :tableHeader="tableHeader"
    :axiosParams="axiosParams"
    :axiosUrl="axiosUrl"
    :buttons="buttons"
    :deleteButton="deleteButton"
    @handleFinish="handleFinish"
    @handleSend="handleSend"
    @handleClose="handleClose"
    ref='orderTable'
  >
    <template #header-buttons>
      <el-input
        style="width: 200px; margin-right: 10px"
        placeholder="请输入订单号"
        v-model="orderNo"
        @change="handleOption"
        size="small"
        clearable
      />
      <el-select v-model="orderStatus" @change="handleOption" size="small" style="width: 200px; margin-right: 10px">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </template>
  </Table>
</template>

<script>
import Table from '../components/Table'
import axios from '@/utils/axios'
import ElementUI from 'element-ui'
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
        },{
          prop: 'orderNo',
          label: '订单号'
        },{
          prop: 'totalPrice',
          label: '订单总价'
        },{
          content: 'orderStatus',
          label: '订单状态'
        },{
          content: 'payType',
          label: '支付方式'
        },{
          prop: 'createTime',
          label: '注册时间'
        },{
          content: 'operationButtons',
          label: '操作',
          width: "240",
          buttons:[
            {title: '关闭订单', event:'closeOrder'},
            {title: '订单详情', event:'detailOrder'}
          ]
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
      orderNo: '',
      orderStatus: '',
      axiosUrl: '/api/orders',
      axiosParams:{},
      deleteButton: false,
      buttons:[
        {
          type: "primary",
          size: "small",
          icon: "el-icon-s-home",
          title: "配货完成",
          event: "handleFinish", 
        },{
          type: "primary",
          size: "small",
          icon: "el-icon-s-home",
          title: "出库",
          event: "handleSend", 
        },{
          type: "danger",
          size: "small",
          icon: "el-icon-delete",
          title: "关闭订单",
          event: "handleClose", 
        }
      ]
    }
  },
  methods: {
    getOrderList() {
      this.axiosParams.orderNo = this.orderNo
      this.axiosParams.orderStatus = this.orderStatus
      this.$refs.orderTable.getCategory()
    },
    handleOption(){
      this.getOrderList()
    },
    handleFinish(val) {
      let params
      if (!val.length) {
        ElementUI.Message.error('请选择项')
      } else {
        params = val.map(i => i.orderId)
        axios.put('/api/orders/checkDone', {
          ids: params
        }).then(() => {
          ElementUI.Message.success('配货成功')
          this.getOrderList()
        })
      }
    },
    handleSend(val) {
      let params
      if (!val.length) {
        ElementUI.Message.error('请选择项')
      } else {
        params = val.map(i => i.orderId)
        axios.put('/api/orders/checkOut', {
          ids: params
        }).then(() => {
          ElementUI.Message.success('出库成功')
          this.getOrderList()
        })
      }
    },
    handleClose(val) {
      let params
      if (!val.length) {
        ElementUI.Message.error('请选择项')
      } else {
        params = val.map(i => i.orderId)
        axios.put('/api/orders/close', {
          ids: params
        }).then(() => {
          ElementUI.Message.success('关闭成功')
          this.getOrderList()
        })
      }
    }
  }
}
</script>

