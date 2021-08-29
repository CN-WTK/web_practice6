<template>
  <Table
    :tableHeader="tableHeader"
    :axiosParams="axiosParams"
    :axiosUrl="axiosUrl"
  >
    <template #header-buttons>
      <el-button type="primary" size="small">
        <el-icon class="el-icon-plus"></el-icon>
        <span>增加</span>
      </el-button>
      <el-button type="danger" size="small">
        <el-icon class="el-icon-delete"></el-icon>
        <span>批量删除</span>
      </el-button>
    </template>
    <template #opeartion-buttons>
      <el-button
        size="mini"
        @click="handleEdit(scope.$index, scope.row)">修改</el-button>
      <el-button
        size="mini"
        @click="handleChildren(scope.$index, scope.row)">下级分类</el-button>
      <el-button
        size="mini"
        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
          },
          {
            prop: 'categoryName',
            label: '分类名称',
          },
          {
            prop: 'categoryRank',
            label: '排序值',
            width: "120",
          },
          {
            prop: 'createTime',
            label: '添加时间',
            width: "200",
          }
      ],
      axiosUrl: '/api/categories',
      axiosParams:{
        categoryLevel: 1,
        parentId: 0
      }
    }
  },
  methods: {
    
  }
}
</script>