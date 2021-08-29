<template>
  <div>
    <Table
      :tableHeader="tableHeader"
      :axiosParams="axiosParams"
      :axiosUrl="axiosUrl"
    >
      <template #header-buttons>
        <div class="buttons">
          <el-button type="primary" size="small" @click="dialogPara.visible = true">
            <el-icon class="el-icon-plus"></el-icon>
            <span>增加</span>
          </el-button>
          <el-popconfirm
            title="确定删除吗？"
            @confirm="handleDelete"
          >
            <template #reference>
              <el-button type="danger" size="small" icon="el-icon-delete">批量删除</el-button>
            </template>
          </el-popconfirm>
        </div>
      </template>
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
          },
          {
            prop: 'configName',
            label: '商品名称',
          },
          {
            content: 'link',
            label: '跳转链接',
          },
          {
            prop: 'configRank',
            label: '排序值',
            width: "120",
          },
          {
            prop: 'goodsId',
            label: '商品编号',
            width: "200",
          },
          {
            prop: 'createTime',
            label: '添加时间',
            width: "200",
          }
      ],
      axiosUrl: '/api/indexConfigs',
      axiosParams:{
        configType: 4
      },
      dialogPara: {
        configType: 4,
        visible: false
      }
    }
  },
  methods: {
    handleDelete() {
      ElementUI.Message.success('删除成功')
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