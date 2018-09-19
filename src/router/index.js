import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Regist from '../components/Regist'
import Info from  '../components/Info'
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
    },{
      path: '/info',
      name: 'info',
      component: Info,
    }
  ]
})
