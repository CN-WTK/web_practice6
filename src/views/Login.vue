<template>
  <el-container style="height: 100vh">
    <el-card>
      <div class="header">
        <img class="logo" src="https://s.weituibao.com/1582958061265/mlogo.png" />
        <div class="name">
          <div class="title">新蜂商城</div>
          <div class="tips">Vue3.0 后台管理系统</div>
        </div>
      </div>
      
      <el-form 
        :rules="rules" 
        :model="ruleForm" 
        ref="loginForm"
        class="login-form"
      >
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model.trim="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model.trim="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <div style="color: #333">登录表示您已同意<a>《服务条款》</a></div>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100%">立即登录</el-button>
          <el-checkbox v-model="checked" @change="!checked">下次自动登录</el-checkbox>
        </el-form-item>
      </el-form>

      
    </el-card>
  </el-container>
</template>

<script>
  import md5 from 'js-md5'
  import axios from '@/utils/axios'
  export default {
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: 'true', message: '账户不能为空', trigger: 'blur' }
          ],
          password: [
            { required: 'true', message: '密码不能为空', trigger: 'blur' }
          ]
        },
        checked: true
      };
    },
    methods: {
        async submitForm() {
          this.$refs["loginForm"].validate((valid) => {
          if (valid) {
            var password = md5(this.ruleForm.password);
            let data = { userName: this.ruleForm.username, passwordMd5: password }
            axios.post('/api/adminUser/login', data).then((res) => {
              window.localStorage.setItem('token', JSON.stringify(res));
              window.location.href = '/introduction';
            }).catch((err) => {
              console.log(err);
            });
          } else {
            console.log('error submit!!')
            return false;
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .el-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .el-card{
    width: 420px;
    height: 500px;
    background-color: #fff;
    border-radius: 4px;
    padding: 0px;
  }
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 20px 0;
  }
  .header img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
  .header .title {
    font-size: 28px;
    color: #1BAEAE;
    font-weight: bold;
  }
  .header .tips {
    font-size: 12px;
    color: #999;
  }
  .el-form {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .el-form-item {
    margin-bottom: 12px;
  }
</style>