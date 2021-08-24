import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../views/Introduction'
import Dashboard from '../views/Dashboard'
import Add from '../views/Add'
import Swiper from '../views/Swiper'
import Hot from '../views/Hot'
import New from '../views/New'
import Recommend from '../views/Recommend'
import Category from '../views/Category'
import Good from '../views/Good'
import Guest from '../views/Guest'
import Order from '../views/Order'
import Account from '../views/Account'
import Login from '../views/Login'
import Card from '../components/Card'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    redirect: '/login',
    name: 'Home',
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/dash',
    name: 'Dash',
    component: Card,
    meta: {
      title: 'Dashboard',
    },
    children: [
      {
        path: '/introduction',
        name: 'Introduction',
        component: Introduction,
        meta: {
          icon: 'el-icon-data-line',
          title: '系统介绍',
        }
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          icon: 'el-icon-odometer',
          title: 'Dashboard',
        }
      },
      {
        path: '/add',
        name: 'Add',
        component: Add,
        meta: {
          icon: 'el-icon-plus', 
          title: '添加商品'
        }
      },
    ]
  },
  {
    path: '/configure',
    name: 'Configure',
    component: Card,
    meta: {
      title: '首页配置',
    },
    children:[
      {
        path: '/swiper',
        name: 'Swiper',
        component: Swiper,
        meta: {
          icon: 'el-icon-picture', 
          title: '轮播图配置'
        }
      },
      {
        path: '/hot',
        name: 'Hot',
        component: Hot,
        meta: {
          icon: 'el-icon-star-on', 
          title: '热销商品配置'
        }
      },
      {
        path: '/new',
        name: 'New',
        component: New,
        meta: {
          icon: 'el-icon-sell', 
          title: '新品上线配置'
        }
      },
      {
        path: '/recommend',
        name: 'Recommend',
        component: Recommend,
        meta: {
          icon: 'el-icon-thumb', 
          title: '为你推荐配置'
        }
      }
    ]
  },
  {
    path: '/module',
    name: 'Module',
    component: Card,
    meta: {
      title: '模块管理',
    },
    children:[
      {
        path: '/category',
        name: 'Category',
        component: Category,
        meta: {
          icon: 'el-icon-menu', 
          title: '分类管理'
        }
      },
      {
        path: '/good',
        name: 'Good',
        component: Good,
        meta: {
          icon: 'el-icon-s-goods', 
          title: '商品管理'
        }
      },
      {
        path: '/guest',
        name: 'Guest',
        component: Guest,
        meta: {
          icon: 'el-icon-user-solid', 
          title: '会员管理'
        }
      },
      {
        path: '/order',
        name: 'Order',
        component: Order,
        meta: {
          icon: 'el-icon-s-order', 
          title: '订单管理'
        }
      }
    ]
  },
  {
    path: '/system',
    name: 'System',
    component: Card,
    meta: {
      title: '系统管理',
    },
    children:[
      {
        path: '/account',
        name: 'Account',
        component: Account,
        meta: {
          icon: 'el-icon-lock', 
          title: '修改密码'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
    },
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
