<template>

        <div class="registBody">

          <div class="formStyle">
          <el-form ref="form" :model="registForm" class="registForm">
            <el-input v-model="registForm.userName" placeholder="请输入账号" class="registInput"></el-input>
            <el-input v-model="registForm.userPassword" type="password" placeholder="请输入密码" class="registInput" id="pas1"></el-input>
            <el-input type="password" placeholder="请确认密码" class="registInput" id="pas2"></el-input>
            <el-input v-model="registForm.phone" placeholder="请输入联系号码" class="registInput"></el-input>
            <el-input v-model="registForm.personalId" placeholder="请输入身份证号码" class="registInput"></el-input>
            <el-input v-model="registForm.email" placeholder="请输入邮箱" class="registInput"></el-input>
            <el-button type="primary" @click="registSubmit" class="input">提交</el-button>
            <el-button type="primary" @click="remark" class="input">重置</el-button>
          </el-form>
            <i class="iconfont icon-canting"></i>
        </div>


        </div>

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
        },
        rules:{
          userName:[
            {required:true,message:'请输出用户名',trigger:'blur'}
          ],
          userPassword:[
            {required:true,message:'请输入密码',trigger:'blur'}
          ],
          personalId:[
            {required:true,message:'请输入个人身份证号码',trigger:'blur'}
          ],
          phone:[
            {required:true,message:'请输入电话号码',trigger:'blur'}
          ],
        }
      }
    },

    methods:{
      registSubmit:function () {
        let registData = JSON.stringify(this.registForm);
        this.$http.post('http://localhost:8083/addUser',registData).then((response) =>{
          if (response.data.code=='200'){
            this.$message({
              message:'注册成功',
              type:'success',
            })
          }
          if (response.data.code=='400'){
            this.$message({
              message:'账号已存在'
            })
          }
        },function () {
          console.log('失败啦')
          })
    },
      remark:function () {

      }

  }
  }
</script>

<style>
  .registBody{
    width: 60%;
    border: 1px solid grey;
    margin-left: 20%;
    text-align: center;
    height: 100%;
    background-color: whitesmoke;
  }
  .registForm{
    padding-left: 20%;
    width: 40%;
  }
  .formStyle{
    border: 1px  gray;
    border-style: solid hidden solid;
    width: 100%;
    margin-top: 10%;
  }
   .input{
     width: 20%;
     margin-top: 10px;
   }

  .registInput{
    margin-top: 10px;
  }

</style>
