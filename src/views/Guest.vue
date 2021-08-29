<template>
  <Table
    :tableHeader="tableHeader"
    :axiosParams="axiosParams"
    :axiosUrl="axiosUrl"
    :buttons="buttons"
    :deleteButton="deleteButton"
  >
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
      },
      deleteButton: false,
      buttons:[
        {
          type: "primary",
          size: "small",
          icon: "el-icon-s-plus",
          title: "解除禁用",
          event: "", 
        },{
          type: "danger",
          size: "small",
          icon: "el-icon-delete",
          title: "禁用账户",
          event: "", 
        }
      ]
    }
  },
  methods: {

  }
}
</script>

