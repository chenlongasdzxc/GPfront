<template>
<div>
  <el-form ref="form" :model="loginForm" class="loginForm">
        <el-input v-model="loginForm.userName" placeholder="请输入账号" class="input"></el-input>
        <el-input v-model="loginForm.userPassword" type="password" placeholder="请输入密码" class="input"></el-input>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" class="input">提交</el-button>
      <el-button type="primary" @click="show" class="input">注册</el-button>
    </el-form-item>
  </el-form>
  <vue-canvas-nest :config="{color:'0,0,0', count: 300 ,opacity: 0.3}" ></vue-canvas-nest>
</div>
</template>

<script>
  import vueCanvasNest from 'vue-canvas-nest'
  export default {
    components:{vueCanvasNest},
    data(){
      return{
        loginForm:{
          userName:'',
          userPassword:'',
        }
      }
    },
    methods:{

     onSubmit:function () {
       let formData = JSON.stringify(this.loginForm);
       this.$http.post('http://localhost:8081/login',formData).then((response)=>{
         if(response.data.code=='200'){
           console.log(response.data)
           debugger
           this.$router.push({path:'/info'})
         }else {
          if (response.data.code=='400'){
            alert('密码错误')
          }
          if (response.data.code=='401'){
            alert('账号不存在')
          }
         }
       },function () {
                alert('error');
       })
     },
      show:function () {
        this.$router.push({path:'/regist'})
      }
    }
  }
</script>

<style scoped>
  .loginForm{
    width: 18%;
    height: 300px;
    border: 1px solid gray;
    text-align: center;
    margin-left: 70%;
    margin-top: 150px;
  }
  .input{
    width: 80%;
    margin-top: 30px;
  }

</style>
