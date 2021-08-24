<template>
  <div class="head" v-show="$route.name!=='Login'">
    <span> {{ $route.meta.title }} </span>
    <el-popover trigger="click" placement="bottom"
    :width="320" popper-class="popper-user-box">
      <template #reference>
        <span class="el-dropdown-link" style="font-size: 20px">
          <i class="el-icon-s-custom"></i>
          <span style="font-size: 16px"> {{ nickName }} </span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      </template>

      <div class="dropdown">
        <div>
          <p>登录名：{{ userName }}</p>
          <p>昵称：{{ nickName }}</p>
        </div>
        <el-tag size="small" effect="dark" class="logout" @click="logout">退出</el-tag>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    userName: String,
    nickName: String,

  },
  data () {
    return {}
  },
  methods: {
    logout(){
      this.$emit("logout");
    }
  }
}
</script>

<style scoped>
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333;
    font-size: 20px;
    line-height: 50px;
    width: 100%;
  }
</style>

<style>
  .popper-user-box{
    background: url('https://s.yezgea02.com/lingling-h5/static/account-banner-bg.png') 50% 50% no-repeat!important;
    background-size: cover!important;
    border-radius: 0!important;
  }
</style>