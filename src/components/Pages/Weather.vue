<template>
  <div>
    <div class="divClass">
      <el-menu  class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-input v-model="city" class="cityinput"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="show">搜索</el-button>
      </el-menu>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
          city:'',

      }

    },
    methods:{
      show:function () {
        const that = this;
        let params={
          "city":that.city
        }
        debugger
        this.$http.get('http://localhost:8083/weather',{params}).then((response)=>{
          if (response.data.code=='200'){
            console.log(response.data);
          }
          if (response.data.code=='500'){
            this.$message({
              message:'error'
            })
          }
        })
      }
    }

  }
</script>

<style>
  .cityinput{
    width: 20%;
  }

</style>
