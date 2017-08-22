import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import chart from '@/components/chart'
import test from '@/components/test'
import DriverList from '@/components/DriverList'
import DriverEntry from '@/components/DriverEntry'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/chart',
      name: 'chart',
      component: chart
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/DriverEntry',
      name: 'drvierEntry',
      component: DriverEntry
    },
    {
      path: '/DriverList',
      name: 'DriverList',
      component: DriverList
    }
  ]
})
