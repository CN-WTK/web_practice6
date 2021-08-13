<template>
<el-container style="height: 1000px">
  <el-aside width="200px" style="background-color: #222832 height: 100%">
    <el-header id="nav-header">
      <img src="https://s.weituibao.com/1582958061265/mlogo.png" alt="logo">
      <span>vue3 admin</span>
    </el-header>
    
    <el-menu 
      :default-openeds= openMenu
      background-color="#222832"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-for="item in menu" 
      :key="item.id"
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
    <el-header style="text-align: right">
      <span> {{ currentPage }} </span>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link" style="font-size: 20px">
          <i class="el-icon-s-custom"></i>
          <span> {{ userName }} </span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    
    <el-main>
      
    </el-main>

    <el-footer>
      
    </el-footer>
  </el-container>
</el-container>
</template>

<style>
  .el-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e9e9e9;
    color: #333;
    font-size: 20px;
    line-height: 50px;
  }

  .el-aside {
    color: #333;
  }

  .el-dropdown{
    display: flex;
    justify-content: center;
  }

  #nav-header {
    color: #ffffff;
    border-bottom: 0px
  }
</style>

<script>
  export default {
    data() {
      const menu = [
        {
          index: '1',
          title: 'Dashboard',
          subMenu: [
            {index: '1-1', icon: 'el-icon-odometer', title: 'Dashboard'},
            {index: '1-2', icon: 'el-icon-plus', title: '添加商品'},
          ]
        },
        {
          index: '2',
          title: '首页配置',
          subMenu: [
            {index: '2-1', icon: 'el-icon-picture', title: '轮播图配置'},
            {index: '2-2', icon: 'el-icon-star-on', title: '热销商品配置'},
            {index: '2-3', icon: 'el-icon-sell', title: '新品上线配置'},
            {index: '2-4', icon: 'el-icon-thumb', title: '为你推荐配置'}
          ]
        },
        {
          index: '3',
          title: '模块管理',
          subMenu: [
            {index: '3-1', icon: 'el-icon-menu', title: '分类管理'},
            {index: '3-2', icon: 'el-icon-s-goods', title: '商品管理'},
            {index: '3-3', icon: 'el-icon-sell', title: '新品上线配置'},
            {index: '3-4', icon: 'el-icon-thumb', title: '为你推荐配置'}
          ]
        },
        {
          index: '4',
          title: '系统管理',
          subMenu: [
            {index: '4-4', icon: 'el-icon-lock', title: '修改密码'},
          ]
        }
      ];
      const openMenu = "['1', '2', '3', '4']";
      const userName = '十三';
      var currentPage = menu[1].subMenu[1].title;
      return {
        menu,
        userName,
        openMenu,
        currentPage
      }
    }
  };
</script>