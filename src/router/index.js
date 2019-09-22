import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import find from '@/components/find'
import tesk from '@/components/tesk'
import personal from '@/components/personal'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/tesk',
      name: 'tesk',
      component: tesk
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
})
