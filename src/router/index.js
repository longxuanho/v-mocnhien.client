import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import SanPhamList from '@/components/sanPhams/sanPhamList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/san-pham',
      name: 'SanPhams',
      component: SanPhamList
    }
  ]
})
