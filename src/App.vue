<template>
  <div class="app">
    <div class="layout">
      <el-container style="height: 100vh">
      <el-aside width="200px" style="background-color: #222832 height: 100%" v-show="$route.name!=='Login'">
        <el-header id="nav-header">
          <img src="https://s.weituibao.com/1582958061265/mlogo.png" alt="logo">
          <span>vue3 admin</span>
        </el-header>
        
          <!-- :default-openeds="openMenu"
           -->

        <el-menu
          :default-active="$route.path"
          style="border: 0px"
          background-color="#222832"
          text-color="#fff"
          v-for="route in $router.options.routes" 
          :key="route.path"
          :router="true"
        >
          <el-submenu
           :index= route.path
           v-show="route.name!=='Login'&&route.name!=='Home'"
          >
            <template slot="title"> {{ route.meta.title }} </template>
            <el-menu-item-group>
              <div
                v-for="subRoute in route.children" 
                :key="subRoute.path"
              >
                <el-menu-item :index= subRoute.path> 
                  <i :class= subRoute.meta.icon></i> {{ subRoute.meta.title }}
                </el-menu-item>
              </div>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container style="display: flex, flex-direction: column">
        <el-header v-show="$route.name!=='Login'">
          <Header :nickName="nickName" :userName="userName" @logout="logout"></Header>
        </el-header>
        <el-main style="padding: 10px">
          <router-view></router-view>
        </el-main>
        <Footer/>
      </el-container>
    </el-container>
    </div>
  </div>
</template>

<style scoped>
  .app {
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

  #nav-header {
    color: #ffffff;
    border-bottom: 0px
  }
</style>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  export default {
    components: {
      Footer,
      Header
    },
    data() {
      // const menu = [
      //   {
      //     index: '1',
      //     title: 'Dashboard',
      //     subMenu: [
      //       {index: '/introduction', icon: 'el-icon-data-line', title: '系统介绍'},
      //       {index: '/dashboard', icon: 'el-icon-odometer', title: 'Dashboard'},
      //       {index: '/add', icon: 'el-icon-plus', title: '添加商品'},
      //     ]
      //   },
      //   {
      //     index: '2',
      //     title: '首页配置',
      //     subMenu: [
      //       {index: '/swiper', icon: 'el-icon-picture', title: '轮播图配置'},
      //       {index: '/hot', icon: 'el-icon-star-on', title: '热销商品配置'},
      //       {index: '/New', icon: 'el-icon-sell', title: '新品上线配置'},
      //       {index: '/recommend', icon: 'el-icon-thumb', title: '为你推荐配置'}
      //     ]
      //   },
      //   {
      //     index: '3',
      //     title: '模块管理',
      //     subMenu: [
      //       {index: '/category', icon: 'el-icon-menu', title: '分类管理'},
      //       {index: '/good', icon: 'el-icon-s-goods', title: '商品管理'},
      //       {index: '/guest', icon: 'el-icon-user-solid', title: '会员管理'},
      //       {index: '/Order', icon: 'el-icon-s-order', title: '订单管理'}
      //     ]
      //   },
      //   {
      //     index: '4',
      //     title: '系统管理',
      //     subMenu: [
      //       {index: '/account', icon: 'el-icon-lock', title: '修改密码'}
      //     ]
      //   }
      // ];
      // const openMenu = ['1', '2', '3', '4'];
      const nickName = '十三';
      const userName = 'admin';
      return {
        // menu,
        nickName,
        userName,
        // openMenu
      }
    },
    methods: {
      logout(){

      }
    }
  };
</script>