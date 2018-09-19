<template>
  <el-form v-model="infoform" class="infoform_class">
      <el-input v-model="infoform.userName" ></el-input>
      <el-input v-model="infoform.userPassword"  ></el-input>
      <el-input v-model="infoform.phone" ></el-input>
      <el-input v-model="infoform.personalId"></el-input>
      <el-input v-model="infoform.email" ></el-input>
  </el-form>

</template>

<script>
  export default {
    data(){
      return{
        infoform:{
          username:'',
          userPassword: '',
          phone:'',
          personalId:'',
          email:'',
        }
      }
    },
    created(){
      this.show();
    },
    methods:{
      show:function () {
        var user = "${session.}"
        this.infoform = user;
      }
    }
  }
</script>


<style>
 .infoform_class{
   width: 10%;
   height: 20%;
   margin-left: 45%;
   margin-top: 10%;
 }
</style>
