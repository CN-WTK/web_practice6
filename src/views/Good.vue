<template>
  <Table
    :tableHeader="tableHeader"
    :axiosParams="axiosParams"
    :axiosUrl="axiosUrl"
    :buttons="buttons"
    :deleteButton="deleteButton"
    @handleAdd="handleAdd"
  >
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
        },{
          prop: 'goodsId',
          label: '商品编号',
          width: "200",
        },{
          prop: 'goodsName',
          label: '商品名',
          width: "200",
        },{
          prop: 'goodsIntro',
          label: '商品简介',
          width: "200",
        },{
          content: 'goodsImage',
          label: '商品图片',
          altName: '商品图片',
        },{
          prop: 'stockNum',
          label: '商品库存',
          width: "200",
        },{
          prop: 'sellingPrice',
          label: '商品售价',
          width: "200",
        },{
          content: 'goodsSellStatus',
          label: '上架状态',
          width: "200",
        },{
          content: 'operationButtons',
          label: '操作',
          width: "240",
          buttons:[
            {title: '修改', event:'handelReviseItem'},
            {title: '上架', event:'handelDeleteItem'}
          ]
        }
      ],
      axiosUrl: '/api/goods/list',
      axiosParams:{

      },
      deleteButton: false,
      buttons:[
        {
          type: "primary",
          size: "small",
          icon: "el-icon-plus",
          title: "新增商品",
          event: "handleAdd"
        }
      ]
    }
  },

  methods: {
    handleAdd() {
      this.$router.push('/add')
    }
  }

}
</script>
