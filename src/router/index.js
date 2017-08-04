import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import SanPhamList from '@/components/sanPhams/SanPhamList'
import SanPhamDetails from '@/components/sanPhams/SanPhamDetails'
import GiohangDetails from '@/components/gioHang/GioHangDetails'
import ThanhToanDetails from '@/components/thanhToan/ThanhToanDetails'

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
    }, {
      path: '/gio-hang',
      name: 'GioHangDetails',
      component: GiohangDetails
    }, {
      path: '/thanh-toan',
      name: 'ThanhToanDetails',
      component: ThanhToanDetails
    }
  ]
})
