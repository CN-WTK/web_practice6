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
    <CategoryDialog ref='addCategory' :dialogPara="dialogPara"/>
  </div>

</template>


<script>
import ElementUI from 'element-ui'
import Table from '../components/Table'
import CategoryDialog from '../components/CategoryDialog'
export default {
  components: {
    Table,
    CategoryDialog
  },
  data() {
    return{
      tableHeader: [
        {
          type: 'selection',
          width: "55",
        },{
          prop: 'categoryName',
          label: '分类名称',
        },{
          prop: 'categoryRank',
          label: '排序值',
          width: "120",
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
            {title: '下级目录', event:''},
            {title: '删除', event:'handelDeleteItem'}
          ]
        }
      ],
      axiosUrl: '/api/categories',
      axiosParams:{
        categoryLevel: 1,
        parentId: 0
      },
      dialogPara: {
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
      this.$refs.addCategory.formDefault({})
    },
    handleDelete(val) {
      if (val.length==0) { ElementUI.Message.error('请选择项') }
      else{
        ElementUI.Message.success('删除成功')
        val.map(item=>{
          alert(item.categoryName+'删除成功')
        })
      }
    },
    handelReviseItem(row) {
      this.dialogPara.type = 'revise'
      this.dialogPara.visible = true
      this.$refs.addCategory.formDefault(row)
    },
    handelDeleteItem(row) {
      ElementUI.Message.success(row.categoryName+'删除成功')
    }
  }
}
</script>