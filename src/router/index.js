import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home.vue'
import Event from '@/pages/event.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/event/:slug',
      component: Event
    }
  ]
})
