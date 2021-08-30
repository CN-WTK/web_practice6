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
    <SwiperDialog ref='swiperDialog' :dialogPara="dialogPara"/>
  </div>
</template>

<script>
import ElementUI from 'element-ui'
import Table from '../components/Table'
import SwiperDialog from '../components/SwiperDialog'
export default {
  components: {
    Table,
    SwiperDialog
  },
  data() {
    return{
      tableHeader: [
        {
          type: 'selection',
          width: "55",
        },{
          content: 'swiperImage',
          altName: '轮播图',
          label: '轮播图',
          width: "200",
        },{
          content: 'link',
          label: '跳转链接',
        },{
          prop: 'carouselRank',
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
            {title: '删除', event:'handelDeleteItem'}
          ]
        }
      ],
      axiosUrl: '/api/carousels',
      axiosParams:{
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
      this.$refs.swiperDialog.formDefault({})
    },
    handleDelete(val) {
      if (val.length==0) { ElementUI.Message.error('请选择项') }
      else{
        ElementUI.Message.success('删除成功')
        val.map(item=>{
          alert(item.carouselRank+'删除成功')
        })
      }
    },
    handelReviseItem(row) {
      this.dialogPara.type = 'revise'
      this.dialogPara.visible = true
      this.$refs.swiperDialog.formDefault(row)
    },
    handelDeleteItem(row) {
      ElementUI.Message.success(row.carouselRank+ '删除成功')
    }
  }
}
</script>
<style scoped>
.buttons{
  display: flex;
  justify-content: space-between;
  width: 180px;
}
</style>