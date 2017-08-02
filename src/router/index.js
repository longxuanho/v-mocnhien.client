import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import SanPhamList from '@/components/sanPhams/sanPhamList'
import SanPhamDetails from '@/components/sanPhams/SanPhamDetails'


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
    }, {
      path: '/san-pham/:id',
      name: 'SanPhamDetails',
      component: SanPhamDetails
    }
  ]
})
