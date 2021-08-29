<template>
  <el-dialog
    :title="'添加商品'"
    :visible.sync="dialogPara.visible"
    width="400px"
  >
    <el-form :model="ruleForm" :rules="rules" ref="addForm" label-width="100px" class="good-form">
      <el-form-item label="分类名称" prop="name">
        <el-input type="text" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="排序值" prop="rank">
        <el-input type="number" max='200' v-model="ruleForm.rank"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogPara.visible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import axios from '@/utils/axios'
import ElementUI from 'element-ui'
export default {
  name: 'CategoryDialog',
  components: {
   },
  props: {
    dialogPara:{
      visible: Boolean,
    }
  },
  data() {
    return {
      ruleForm: {
        name: '',
        rank: ''
      },
      rules: {
        name: [
          { required: 'true', message: '名称不能为空', trigger: ['change'] }
        ],
        rank: [
          { required: 'true', message: '排序不能为空', trigger: ['change'] }
        ]
      },
      categoryLevel: 1,
      parentId: 0,
    }
  },  
  methods: {
    submitForm() {
      this.$refs["addForm"].validate((valid) => {
        if (valid) {
          axios.post('/api/categories', {
            categoryLevel: this.categoryLevel,
            parentId: this.parentId,
            categoryName: this.ruleForm.name,
            categoryRank: this.ruleForm.rank
          }).then(() => {
            ElementUI.Message.success('添加成功')
            this.dialogPara.visible = false
          })
        }
      })
    }
  }
}
</script>