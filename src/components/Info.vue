<template>
  <div class="bodyStyle">

    <div class="formStyle">
  <el-form v-model="infoform" class="infoform_class">
      <el-input v-model="infoform.userName" ></el-input>
      <el-input v-model="infoform.userPassword"  ></el-input>
      <el-input v-model="infoform.phone" ></el-input>
      <el-input v-model="infoform.personalId"></el-input>
      <el-input v-model="infoform.email" ></el-input>
  </el-form>
    </div>

    <vue-canvas-nest :config="{color:'1,2,3', count: 300 ,opacity: 0.3}"></vue-canvas-nest>
  </div>
</template>


<script>
  import vueCanvasNest from 'vue-canvas-nest'
  export default {
    components:{vueCanvasNest},
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

  .formStyle{
    border: 1px solid gray;
  }
 .infoform_class{
   width: 10%;
   height: 20%;
   margin-left: 45%;
 }
  .bodyStyle{
    background-color: whitesmoke;
    border: 2px solid whitesmoke;
    margin-left: 20%;
    width: 60%;
    height: 100%;
  }
</style>
