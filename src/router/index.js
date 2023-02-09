import { createRouter, createWebHistory } from 'vue-router'

import Intro from '@/components/Intro'
import Day from '@/components/Day'
import Calendar from '@/components/Calendar'
import Setting from '@/components/Setting'
import About from '@/components/About'

const routes = [
  {
    path: '/',
    name: 'intro',
    component: Intro
  },
  {
    path: '/day/:date',   // 파라미터의 시작은 : 콜론으로 설정
    name: 'day',
    component: Day
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),    // 기본적으로 처음에 설정한 history 모드 사용
  routes
})

export default router
