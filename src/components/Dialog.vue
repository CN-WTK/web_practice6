<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogPara.visible"
    width="400px"
  >
    <el-form :model="ruleForm" :rules="rules" ref="addForm" label-width="100px" class="good-form">
      <el-form-item label="商品名称" prop="name">
        <el-input type="text" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="跳转链接" prop="link">
        <el-input type="text" v-model="ruleForm.link"></el-input>
      </el-form-item>
      <el-form-item label="商品编号" prop="id">
        <el-input type="number" min="0" v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="排序值" prop="sort">
        <el-input type="number" v-model="ruleForm.sort"></el-input>
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
  name: 'Dialog',
  components: {
   },
  props: {
    dialogPara: Object,
  },
  data() {
    return {
      ruleForm: {
        name: '',
        link: '',
        id: '',
        sort: ''
      },
      rules: {
        name: [
          { required: 'true', message: '名称不能为空', trigger: ['change'] }
        ],
        id: [
          { required: 'true', message: '编号不能为空', trigger: ['change'] }
        ],
        sort: [
          { required: 'true', message: '排序不能为空', trigger: ['change'] }
        ]
      },
      id: '',
      title: ''
    }
  },  
  methods: {
    submitForm() {
      this.$refs["addForm"].validate((valid) => {
        if (valid) {
          if (this.dialogPara.type=='add'){
            axios.post('/api/indexConfigs', {
              configType: this.dialogPara.configType || 3,
              configName: this.ruleForm.name,
              redirectUrl: this.ruleForm.link,
              goodsId: this.ruleForm.id,
              configRank: this.ruleForm.sort
            }).then(() => {
              ElementUI.Message.success('添加成功')
              this.dialogPara.visible = false
            })
          } else {
            axios.put('/api/indexConfigs', {
              configId: this.id,
              configType: this.dialogPara.configType || 3,
              configName: this.ruleForm.name,
              redirectUrl: this.ruleForm.link,
              goodsId: this.ruleForm.id,
              configRank: this.ruleForm.sort
            }).then(() => {
              ElementUI.Message.success('修改成功')
              this.dialogPara.visible = false
            })
          }
        }
      })
    },
    formDefault(val) {
        this.ruleForm.name=val.configName
        this.ruleForm.link=val.redirectUrl
        this.ruleForm.id=val.goodsId
        this.ruleForm.sort=val.configRank
        this.id=val.configId
        if (this.dialogPara.type == 'add') {
          this.title = '添加商品'
        } else {
          this.title = '修改商品'
        }
    }
  }
}
</script>