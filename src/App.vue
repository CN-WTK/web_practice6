<template>
  <div id="app">
    <div class="layout">
      <el-container style="height: 100vh">
      <el-aside width="200px" style="background-color: #222832 height: 100%" v-show="$route.name!=='Login'">
        <el-header id="nav-header">
          <img src="https://s.weituibao.com/1582958061265/mlogo.png" alt="logo">
          <span>vue3 admin</span>
        </el-header>
        
        <el-menu
          :default-openeds="openMenu"
          style="border: 0px"
          background-color="#222832"
          text-color="#fff"
          v-for="item in menu" 
          :key="item.id"
          :router="true"
          @select="handleSelected"
        >
          <el-submenu :index= item.index>
            <template slot="title"> {{ item.title }} </template>
            <el-menu-item-group>
              <div
                v-for="subItem in item.subMenu" 
                :key="subItem.id"
              >
                <el-menu-item :index=subItem.index> 
                  <i :class= subItem.icon></i> {{ subItem.title }}
                </el-menu-item>
              </div>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-header style="align-items: center; height: 50px;"  v-show="$route.name!=='Login'">
          <span> {{ currentPage }} </span>
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
        </el-header>

        <el-main style="padding: 10px">
          <router-view></router-view>
        </el-main>

        <el-footer v-show="$route.name!=='Login'">
          <div class="left">Copyright © 2019-2021 十三. All rights reserved.</div>
          <div class="right">
            <a target="_blank" href="https://github.com/newbee-ltd/vue3-admin">vue3-admin Version 3.0.0</a>
          </div>
        </el-footer>
      </el-container>
    </el-container>
    </div>
  </div>
</template>

<style scoped>
  #app {
    font-family: "Times New Roman","Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .layout{
    display: flex;
    min-height: 100vh;
  }

  .el-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e9e9e9;
    color: #333;
    font-size: 20px;
    line-height: 50px;
  }

  .el-aside {
    background-color: #222832;
  }
  
  .dropdown{
    display: flex;
    justify-content: space-between;
  }

  .el-footer{
    border-top: 1px solid #e9e9e9;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    height: 50px;
    }

  #nav-header {
    color: #ffffff;
    border-bottom: 0px
  }
</style>

<style>
  .popper-user-box{
    background: url('https://s.yezgea02.com/lingling-h5/static/account-banner-bg.png') 50% 50% no-repeat!important;
    background-size: cover!important;
    border-radius: 0!important;
  }
</style>

<script>
  export default {
    name: 'Home',
    data() {
      const menu = [
        {
          index: '1',
          title: 'Dashboard',
          subMenu: [
            {index: '/introduction', icon: 'el-icon-data-line', title: '系统介绍'},
            {index: '/dashboard', icon: 'el-icon-odometer', title: 'Dashboard'},
            {index: '/add', icon: 'el-icon-plus', title: '添加商品'},
          ]
        },
        {
          index: '2',
          title: '首页配置',
          subMenu: [
            {index: '/swiper', icon: 'el-icon-picture', title: '轮播图配置'},
            {index: '/hot', icon: 'el-icon-star-on', title: '热销商品配置'},
            {index: '/New', icon: 'el-icon-sell', title: '新品上线配置'},
            {index: '/recommend', icon: 'el-icon-thumb', title: '为你推荐配置'}
          ]
        },
        {
          index: '3',
          title: '模块管理',
          subMenu: [
            {index: '/category', icon: 'el-icon-menu', title: '分类管理'},
            {index: '/good', icon: 'el-icon-s-goods', title: '商品管理'},
            {index: '/guest', icon: 'el-icon-user-solid', title: '会员管理'},
            {index: '/Order', icon: 'el-icon-s-order', title: '订单管理'}
          ]
        },
        {
          index: '4',
          title: '系统管理',
          subMenu: [
            {index: '/account', icon: 'el-icon-lock', title: '修改密码'},
            {index: '/login', icon: 'el-icon-lock', title: '登录界面'},
          ]
        }
      ];
      const openMenu = ['1', '2', '3', '4'];
      const nickName = '十三';
      const userName = 'admin';
      var currentPage = menu[0].subMenu[0].title;
      return {
        menu,
        nickName,
        userName,
        openMenu,
        currentPage
      }
    },
    methods: {
      handleSelected(key, keyPath) {
        for (var i=0; i<this.menu.length; i++){
          for (var j=0; j<this.menu[i].subMenu.length; j++){
             if (this.menu[i].subMenu[j].index == keyPath[1]) this.currentPage = this.menu[i].subMenu[j].title;
          }
        }
      },
      logout(){
      }
    }
  };
</script>