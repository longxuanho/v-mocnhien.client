import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import SanPhamList from '@/components/sanPhams/SanPhamList'
import SanPhamDetails from '@/components/sanPhams/SanPhamDetails'
import GiohangDetails from '@/components/gioHang/GioHangDetails'
import ThanhToanDetails from '@/components/thanhToan/ThanhToanDetails'
import HoTroKhachHang from '@/components/hoTroKhachHang/HoTroKhachHang'
import DonHangList from '@/components/donHang/DonHangList'
import DonHangDetails from '@/components/donHang/DonHangDetails'


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
    }, {
      path: '/ho-tro-khach-hang',
      name: 'HoTroKhachHang',
      component: HoTroKhachHang
    }, {
      path: '/don-hang',
      name: 'DonHangList',
      component: DonHangList
    }, {
      path: '/don-hang/:id',
      name: 'DonHangDetails',
      component: DonHangDetails
    }
  ]
})
