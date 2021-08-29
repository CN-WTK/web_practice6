<template>
  <el-card>
    <div slot="header" class="clearfix">
      <slot name="header-buttons"></slot>
      <el-button v-for="item in buttons" :key="item.title" :type="item.type" :size="item.size" :icon="item.icon" @click="handleButtonEvent(item.event)">{{item.title}}</el-button>
      <el-popconfirm v-if="deleteButton"
        title="确定删除吗？"
        @confirm="handleDelete"
        style="margin-left: 10px"
      >
        <template #reference>
          <el-button type="danger" size="small" icon="el-icon-delete">批量删除</el-button>
        </template>
      </el-popconfirm>
    </div>
    <div class="table-box">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          v-for="item in tableHeader"
          :key="item.id"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :type="item.type"
        >
          <template #default="scope" v-if="item.content!==undefined">
            <img v-if="item.content=='swiperImage'" style="width: 150px;height: 150px" :src="scope.row.carouselUrl" :alt="item.altName">
            <img v-else-if="item.content=='goodsImage'" style="width: 100px;height: 100px" :src="scope.row.goodsCoverImg" :alt="item.altName">
            <a v-if="item.content=='link'" target="_blank" :href="scope.row.redirectUrl">{{ scope.row.redirectUrl }}</a>
            <span style="color: green;" v-if="item.content=='goodsSellStatus'&&scope.row.goodsSellStatus == 0">销售中</span>
            <span style="color: red;" v-else-if="item.content=='goodsSellStatus'&&scope.row.goodsSellStatus == 1">已下架</span>
            <span style="color: green;" v-if="item.content=='lockedFlag'&&scope.row.lockedFlag == 0">正常</span>
            <span style="color: red;" v-else-if="item.content=='lockedFlag'&&scope.row.lockedFlag == 1">禁用</span>
            <span style="color: green;" v-if="item.content=='isDeleted'&&scope.row.isDeleted == 0">正常</span>
            <span style="color: red;" v-else-if="item.content=='isDeleted'&&scope.row.isDeleted == 1">注销</span>
            <span v-if="item.content=='orderStatus'">{{scope.row.orderStatus | orderStatusDisp(that)}}</span>
            <span v-if="item.content=='payType'&&scope.row.payType == 1">微信支付</span>
            <span v-else-if="item.content=='payType'&&scope.row.payType == 2">支付宝支付</span>
            <span v-else-if="item.content=='payType'&&scope.row.payType == 0">未支付</span>
          </template>
        </el-table-column>
        <el-table-column 
          label="操作"
          width="240"
          v-if="page.operation==undefined"
        >
          <template>
            <slot name="opeartion-buttons"></slot>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-block">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page.sync="page.currentPage"
          :page-size="page.pageSize"
          layout="prev, pager, next"
          :total="page.total">
        </el-pagination>
      </div>
    </div>
  </el-card>
</template>

<script>
import axios from '../utils/axios'
export default {
  name: 'Table',
  props: {
    tableHeader: Array,
    axiosUrl: String,
    axiosParams: Object,
    buttons: Array,
    deleteButton: Boolean,
  },
  data() {
    return {
      multipleSelection: [],
      statusMenu: [
        {value: 0, label: '待支付'}, 
        {value: 1, label: '已支付'}, 
        {value: 2, label: '配货完成'}, 
        {value: 3, label: '出库成功'}, 
        {value: 4, label: '交易成功'}, 
        {value: -1, label: '手动关闭'}, 
        {value: -2, label: '超时关闭'}, 
        {value: -3, label: '商家关闭'}
      ],
      tableData: [],
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 10
      },
      that: this,
      // buttons:[
      //   {
      //     type: "primary",
      //     size: "small",
      //     icon: "el-icon-s-home",
      //     title: "配货完成",
      //     event: "", 
      //   },{
      //     type: "primary",
      //     size: "small",
      //     icon: "el-icon-s-home",
      //     title: "出库",
      //     event: "", 
      //   },{
      //     type: "danger",
      //     size: "small",
      //     icon: "el-icon-delete",
      //     title: "关闭订单",
      //     event: "", 
      //   },{
      //     type: "primary",
      //     size: "small",
      //     icon: "el-icon-plus",
      //     title: "增加",
      //     event: "handleAdd", 
      //   }
      // ]
    }
  },

  created() {
    this.getCategory()
  },
  
  methods: {
    getCategory() {
      const params = this.axiosParams
      params.pageNumber = this.page.currentPage
      params.pageSize = this.page.pageSize
      axios.get(this.axiosUrl, {
        params: params
      }).then(res => {
        this.tableData = res.list
        this.page.total = res.totalCount
        this.page.currentPage = res.currPage
      })
    },
    handleCurrentChange(val){
      this.page.currentPage = val
      this.getCategory()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    handleButtonEvent(val) {
      this.$emit(val)
    },
    handleDelete() {
      this.$emit('handleDelete',this.multipleSelection)
    }
  },
  filters: {
    orderStatusDisp(val,that) {
      let title
      that.statusMenu.forEach(item => {
        if(val===item.value) {
          title = item.label;
        }
      });
      return title
    }
  }
}
</script>

<style>
.table-box{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.pagination-block{
  margin-top: 20px;
}
.buttons{
  display: flex;
  justify-content: space-between;
  width: 180px;
}
.clearfix{
  display: flex;
  justify-content: flex-start;
}
</style>