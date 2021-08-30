<template>
  <div>
    <Table
      :tableHeader="tableHeader"
      :axiosParams="axiosParams"
      :axiosUrl="axiosUrl"
      :buttons="buttons"
      :deleteButton="deleteButton"
      @handleAdd="handleAdd"
      @handleDelete="handleDelete"
      @handelReviseItem="handelReviseItem"
      @handelDeleteItem="handelDeleteItem"
    >
    </Table>
    <Dialog ref='addGood' :dialogPara="dialogPara"/>
  </div>
</template>


<script>
import ElementUI from 'element-ui'
import Table from '../components/Table'
import Dialog from '../components/Dialog'
export default {
  components: {
    Table,
    Dialog
  },
  data() {
    return{
      tableHeader: [
        {
          type: 'selection',
          width: "55",
        },{
          prop: 'configName',
          label: '商品名称',
        },{
          content: 'link',
          label: '跳转链接',
        },{
          prop: 'configRank',
          label: '排序值',
          width: "120",
        },{
          prop: 'goodsId',
          label: '商品编号',
          width: "200",
        },{
          prop: 'createTime',
          label: '添加时间',
          width: "200",
        },{
          content: 'operationButtons',
          label: '操作',
          width: "240",
          buttons:[
            {title: '修改', event:'handelReviseItem'},
            {title: '删除', event:'handelDeleteItem'}
          ]
        }
      ],
      axiosUrl: '/api/indexConfigs',
      axiosParams:{
        configType: 3
      },
      dialogPara: {
        configType: 3,
        visible: false
      },
      deleteButton: true,
      buttons:[
        {
          type: "primary",
          size: "small",
          icon: "el-icon-plus",
          title: "增加",
          event: "handleAdd", 
        }
      ]
    }
  },
  methods: {
    handleAdd() {
      this.dialogPara.type = 'add'
      this.dialogPara.visible = true
      this.$refs.addGood.formDefault({})
    },
    handleDelete(val) {
      if (val.length==0) { 
        ElementUI.Message.error('请选择项') 
      }else{
        ElementUI.Message.success('删除成功')
        val.map(item=>{
          alert(item.configName+'删除成功')
        })
      }
    },
    handelReviseItem(row) {
      this.dialogPara.type = 'revise'
      this.dialogPara.visible = true
      this.$refs.addGood.formDefault(row)
    },
    handelDeleteItem(row) {
      ElementUI.Message.success(row.configName+'删除成功')
    }
  }
}
</script>

<style scoped>

</style>