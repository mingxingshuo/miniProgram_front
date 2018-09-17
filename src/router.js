import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Item from './views/Item.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/mp/view/',
      name: 'home',
      component: Home
    },
    {
      path: '/mp/view/add',
      name: 'add',
      component: Item
    },
    {
      path: '/mp/view/update',
      name: 'update',
      component: Item
    }
  ]
})
