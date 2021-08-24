<template>
  <el-card>
    <el-form :model="goodForm" :rules="rules" ref="goodForm" label-width="100px">
      <el-form-item label="商品分类" style="text-align:left">
        <el-cascader :placeholder="defaultCate" :props="category"  style="width:300px" @change="handleChangeCate"></el-cascader>
      </el-form-item>
      <el-form-item label="商品名称" style="text-align:left" prop="goodsName">
        <el-input style="width: 300px" v-model="goodForm.goodsName" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="商品简介" style="text-align: left">
        <el-input style="width: 300px" type="textarea" v-model="goodForm.goodsIntro" placeholder="请输入商品简介(100字)"></el-input>
      </el-form-item>
      <el-form-item  label="商品价格" style="text-align:left" prop="originalPrice">
        <el-input type="number" min="0" style="width: 300px" v-model="goodForm.originalPrice" placeholder="请输入商品价格"></el-input>
      </el-form-item>
      <el-form-item  label="商品售卖价" style="text-align: left"  prop="sellingPrice">
        <el-input type="number" min="0" style="width: 300px" v-model="goodForm.sellingPrice" placeholder="请输入商品售价"></el-input>
      </el-form-item>
      <el-form-item  label="商品库存" style="text-align: left" prop="stockNum">
        <el-input type="number" min="0" style="width: 300px" v-model="goodForm.stockNum" placeholder="请输入商品库存"></el-input>
      </el-form-item>
      <el-form-item label="商品标签" style="text-align: left" >
        <el-input style="width: 300px" v-model="goodForm.tag" placeholder="请输入商品小标签"></el-input>
      </el-form-item>
      <el-form-item label="上架状态" style="text-align: left">
        <el-radio-group v-model="goodForm.goodsSellStatus">
          <el-radio label="0">上架</el-radio>
          <el-radio label="1">下架</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="商品主图" style="text-align: left">
        <el-upload
          class="avatar-uploader"
          :action="uploadImgServer"
          accept="jpg,jpeg,png"
          :before-upload="handleBeforeUpload"
          :on-success="handleUrlSuccess"
        >
          <img style="width: 100px; height: 100px; border: 1px solid #e9e9e9;" v-if="goodForm.goodsCoverImg" :src="goodForm.goodsCoverImg" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="详情内容" style="text-align: left" >
        <div ref='editor'></div>
      </el-form-item>
      <el-form-item style="text-align: left">
        <el-button type="primary" @click="submitAdd(goodForm)">立即创建</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'Add',
  components: {
   },
  data() {
  return {
      defaultCate: '',
      goodForm: {
        goodsName: '',
        goodsIntro: '',
        originalPrice: '',
        sellingPrice: '',
        stockNum: '',
        goodsSellStatus: '0',
        goodsCoverImg: '',
        tag: ''
      },
      rules: {
        goodsName: [
          { required: true, message: '请填写商品名称', trigger: 'blur'  }
        ],
        originalPrice: [
          { required: true, message: '请填写商品价格', trigger: 'blur'  }
        ],
        sellingPrice: [
          { required: true, message: '请填写商品售价', trigger: 'blur'  }
        ],
        stockNum: [
          { required: true, message: '请填写商品库存', trigger: 'blur'  }
        ],
        goodsCoverImg: [
          { required: true, message: '请上传主图', trigger: 'change' }
        ],
      }}
  },  
  methods: {
    submitAdd(goodForm){
      this.$refs[goodForm].validate((valid) => {
        if (valid) {
          alert('成功创建');
        } 
        })
     }
  }
}
</script>

<style scoped>
  .avatar-uploader {
    width: 100px;
    height: 100px;
    color: #ddd;
    font-size: 30px;
  }
  .avatar-uploader-icon {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #e9e9e9;
    padding: 32px 17px;
  }
</style>