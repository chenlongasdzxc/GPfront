<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <div class="regist">
          <el-form ref="form" :model="registForm" class="registForm">
            <el-input v-model="registForm.userName" placeholder="请输入账号"></el-input>
            <el-input v-model="registForm.userPassword" type="password" placeholder="请输入密码"></el-input>
            <el-input type="password" placeholder="请确认密码"></el-input>
            <el-input v-model="registForm.phone" placeholder="请输入联系号码"></el-input>
            <el-input v-model="registForm.personalId" placeholder="请输入身份证号码"></el-input>
            <el-input v-model="registForm.email" placeholder="请输入邮箱"></el-input>
            <el-select v-model="registForm.favoriteFood" placeholder="请选择喜欢的食物">
              <el-option label="火锅" value="火锅"></el-option>
              <el-option label="串串" value="串串"></el-option>
              <el-option label="冒菜" value="冒菜"></el-option>
              <el-option label="麻辣烫" value="麻辣烫"></el-option>
            </el-select>
            <el-button type="primary" @click="registSubmit" class="input">提交</el-button>
          </el-form>
        </div>

      </el-main>
    </el-container>
  </el-container>



</template>

<script>
  export default {
    data(){
      return{
        registForm:{
          userName: '',
          userPassword: '',
          favoriteFood:'',
          email:'',
          phone:'',
          personalId:'',
        }
      }
    },

    methods:{
      registSubmit:function () {
        let registData = JSON.stringify(this.registForm);
        this.$http.post('http://localhost:8081/addUser',registData).then((response) =>{
          if (response.data.code=='200'){
            alert('success')
            /*this.$router.push({path:"/home"})*/
          }
          if (response.data.code=='400'){
            alert('账号已存在，请重新输入')
          }
        },function () {
          console.log('失败啦')
          })
    }
  }
  }
</script>

<style>
  .regist{
    width: 30%;
    border: 1px solid gray;
    margin-left: 20%;
    text-align: center;
  }

  .registForm{
    padding-left: 20%;
    width: 60%;
  }
   .input{
     width: 60%;
   }
</style>
