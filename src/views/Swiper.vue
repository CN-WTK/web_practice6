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
    >
      <template #opeartion-buttons>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">修改
        </el-button>
        <el-button
          size="mini"
          @click="handleDelete(scope.$index, scope.row)">删除
        </el-button>
      </template>
    </Table>
    <SwiperDialog ref='addGood' :dialogPara="dialogPara"/>
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
        },
        {
          content: 'swiperImage',
          altName: '轮播图',
          label: '轮播图',
          width: "200",
        },
        {
          content: 'link',
          label: '跳转链接',
        },
        {
          prop: 'carouselRank',
          label: '排序值',
          width: "120",
        },
        {
          prop: 'createTime',
          label: '添加时间',
          width: "200",
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
      this.dialogPara.visible = true
    },
    handleDelete(val) {
      if (val.length==0) { ElementUI.Message.error('请选择项') }
      else{
        ElementUI.Message.success('删除成功')
        val.map(item=>{
          alert(item.carouselRank+'删除成功')
        })
      }
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