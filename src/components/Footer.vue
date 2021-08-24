<template>
  <el-footer v-show="$route.name!=='Login'">
    <div class="left">Copyright © 2019-2021 十三. All rights reserved.</div>
    <div class="right">
      <a target="_blank" href="https://github.com/newbee-ltd/vue3-admin">vue3-admin Version 3.0.0</a>
    </div>
  </el-footer>
</template>

<script>
  export default {
    name: 'Footer',
    props: {

    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .el-footer{
    border-top: 1px solid #e9e9e9;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    height: 50px;
    }
</style>
