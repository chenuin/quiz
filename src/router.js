import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Success from './views/Success.vue'

import Dashboard from './components/layouts/Dashboard.vue'

import Drag from './views/Drag.vue'
import Animation from './views/Animation.vue'
import Input from './views/Input.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      component: Dashboard,
      children: [
        {
          path: 'quiz1',
          name: 'quiz1',
          component: Drag
        },
        {
          path: 'quiz2',
          name: 'quiz2',
          component: Animation
        },
        {
          path: 'quiz3',
          name: 'quiz3',
          component: Input
        }
      ]
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    }
  ]
})
