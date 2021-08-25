<template>
  <div>
    <Table
      :tableHeader="tableHeader"
      :tableData="tableData"
      :page="page"
      @currentChange="handleCurrentChange"
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
    <SwiperDialog ref='addGood' :dialogPara="dialogPara"/>
  </div>
</template>


<script>
import axios from 'axios'
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
      tableData: [],
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 10,
      },
      dialogPara: {
        configType: 3,
        visible: false
      }
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    getCategory() {
      axios.get('/api/carousels', {
        params: {
          pageNumber: this.page.currentPage,
          pageSize: this.page.pageSize,
        }
      }).then(res => {
        this.tableData = res.list
        this.page.total = res.totalCount
        this.page.currentPage = res.currPage
      })
    },
    handleCurrentChange(val){
      this.page.currentPage = val;
      this.getCategory();
      console.log(this.page.currentPage);
    },
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