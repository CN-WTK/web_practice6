<template>
  <Table
    :tableHeader="tableHeader"
    :axiosParams="axiosParams"
    :axiosUrl="axiosUrl"
  >
    <template #header-buttons>
      <el-button type="primary" size="small">
        <el-icon class="el-icon-plus"></el-icon>
        <span>解除禁用</span>
      </el-button>
      <el-button type="danger" size="small">
        <el-icon class="el-icon-delete"></el-icon>
        <span>禁用账户</span>
      </el-button>
    </template>
    <template #opeartion-buttons>
      <el-button
        size="mini"
        @click="handleEdit(scope.$index, scope.row)">修改</el-button>
      <el-button
        size="mini"
        @click="handleChildren(scope.$index, scope.row)">下架</el-button>
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
          prop: 'nickName',
          label: '昵称'
        },
        {
          prop: 'loginName',
          label: '登录名'
        },
        {
          content: 'lockedFlag',
          label: '身份状态'
        },
        {
          content: 'isDeleted',
          label: '是否注销'
        },
        {
          prop: 'createTime',
          label: '注册时间'
        }
      ],
      axiosUrl: '/api/users',
      axiosParams:{
      }
    }
  },
  methods: {

  }
}
</script>

