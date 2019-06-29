import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Dashboard from './components/layouts/Dashboard.vue'

import Drag from './views/Drag.vue'
import Animation from './views/Animation.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
  ]
})
