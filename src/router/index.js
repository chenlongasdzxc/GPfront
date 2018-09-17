import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Regist from '../components/Regist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home ,
    },{
      path:'/regist',
      name:'regist',
      component: Regist,

    }
  ]
})
