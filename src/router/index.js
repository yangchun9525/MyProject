import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import chart from '@/components/chart'
import test from '@/components/test'
import OperationalSystem from '@/components/OperationalSystem'
import DriverList from '@/components/DriverList'
import DriverEntry from '@/components/DriverEntry'
import picture from '@/components/picture'
import login from '@/components/login'
import video from '@/components/video'
import text from '@/components/text'
import testvideo from '@/components/testvideo'
import jsInteractive from '@/components/jsInteractive'
import select from '@/components/select'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI)
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
      component: chart,
      meta: {
          title: '',
          requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
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
    },
    {
      path: '/picture',
      name: 'picture',
      component: picture
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/text',
      name: 'text',
      component: text
    },
    {
      path: '/testvideo',
      name: 'testvideo',
      component: testvideo
    },
    {
      path: '/OperationalSystem',
      name: 'OperationalSystem',
      component: OperationalSystem
    },
    {
      path: '/jsInteractive',
      name: 'jsInteractive',
      component: jsInteractive
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
  ]
})
