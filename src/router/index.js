import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Hot from '@/views/Hot'
import Car from '@/views/Car'
import Detail from '@/views/Detail'
import User from '@/views/User'
import ComingList from '@/components/hot/comingList'
import HotList from '@/components/hot/hotList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/hot',
      component: Hot,
      children:[
        {path:'/',name: 'HotList',component:HotList},
        {path:'cominglist',component:ComingList},
      ]
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
