import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    donHang: null
  },
  getters: {
    donHang: state => {
      return state.donHang;
    },
    sanPhamsInDonHang: state => {
      if (!state.donHang) return [];
      return state.donHang.sanPhams;
    },
    thongTinDonHang: state => {
      if (!state.donHang) return null;
      return _.omit(state.donHang, ['sanPhams', 'itemsCount', 'tongCong', 'chietKhauPercent', 'tongThanhToan', 'trangThai'])
    }
  },
  mutations: {
    initDonHang(state) {
      state.donHang = JSON.parse(localStorage.getItem('donHang'))
        || {
          hoTen: '',
          dienThoai: '',
          email: '',
          isThongTinGiaoHangKhacThongTinThanhToan: false,
          hoTenNguoiNhan: '',
          dienThoaiNguoiNhan: '',
          diaChi: '',
          tinhThanh: '',
          quanHuyen: '',

          cachThanhToan: 'Tiền mặt',
          ghiChu: '',
          sanPhams: [],
          phiVanChuyen: 0,
          itemsCount: 0,
          tongCong: 0,
          chietKhauPercent: 0,
          tongThanhToan: 0,
          trangThai: 'Chờ xác thực'
        };
    },
    resetDonHang(state) {
      localStorage.removeItem('donHang');
    },
    resetThongTinDonHang(state) {
      let thongTinDonHang = {
        hoTen: '',
        dienThoai: '',
        email: '',
        isThongTinGiaoHangKhacThongTinThanhToan: false,
        hoTenNguoiNhan: '',
        dienThoaiNguoiNhan: '',
        diaChi: '',
        tinhThanh: '',
        quanHuyen: '',

        cachThanhToan: 'Tiền mặt',
        ghiChu: '',
        phiVanChuyen: 0,
      }
      Object.assign(state.donHang, thongTinDonHang)
    },
    addSanPhamToDonHang(state, payload) {
      if (!state.donHang || !payload || !payload.sanPham || !payload.sanPham._id || !payload.soLuong) return;

      // Nếu item đã tồn tại trong giỏ hàng, return;
      if (state.donHang.sanPhams.find(item => item._id === payload.sanPham._id)) return;

      let newItem = { _id: payload.sanPham._id, ten: payload.sanPham.ten, ma: payload.sanPham.ma, cover: payload.sanPham.cover, donGia: payload.sanPham.giaBan, soLuong: payload.soLuong, thanhTien: payload.sanPham.giaBan * payload.soLuong, sanCo: payload.sanPham.soLuong };
      state.donHang.sanPhams.push(newItem);
    },
    removeSanPhamInDonHang(state, payload) {
      if (!state.donHang || !payload || !payload.sanPham || !payload.sanPham._id) return;

      state.donHang.sanPhams.splice(state.donHang.sanPhams.indexOf(payload.sanPham), 1);
    },
    modifySoLuongSanPhamInDonHang(state, payload) {
      if (!state.donHang || !payload || !payload.sanPham || !payload.soLuong) return;

      let found = state.donHang.sanPhams.find((item) => item._id === payload.sanPham._id);

      if (!found) return;

      found.soLuong = payload.soLuong;
    },
    resolveDonHang(state) {
      if (!state.donHang || !state.donHang.sanPhams) return;

      state.donHang.itemsCount = 0;
      state.donHang.tongCong = 0;
      state.donHang.chietKhauPercent = 0;
      state.donHang.tongThanhToan = 0;
      state.donHang.phiVanChuyen = state.donHang.phiVanChuyen || 0;

      state.donHang.sanPhams.forEach(item => {
        state.donHang.itemsCount += item.soLuong;

        item.thanhTien = item.soLuong * item.donGia;
        state.donHang.tongCong += item.thanhTien;
      });

      state.donHang.chietKhauPercent = 0;

      let chietKhau = - Math.ceil((state.donHang.chietKhauPercent / 100 * state.donHang.tongCong) / 1000) * 1000;

      state.donHang.tongThanhToan = state.donHang.tongCong + chietKhau + state.donHang.phiVanChuyen;

    },
    saveDonHangLocal(state) {
      if (!state.donHang) return;

      localStorage.setItem('donHang', JSON.stringify(state.donHang));
    },
    syncThongTinDonHangLocal(state, payload) {
      if (!state.donHang || !payload.thongTinDonHang) return

      Object.assign(state.donHang, payload.thongTinDonHang)
    }
  },
  actions: {
    initDonHang(context) {
      context.commit('initDonHang')
    },
    resetDonHang(context) {
      context.commit('resetDonHang')
      context.commit('initDonHang')
    },
    resetThongTinDonHang(context) {
      context.commit('resetThongTinDonHang')
      context.dispatch('resolveDonHang')
    },
    addSanPhamToDonHang(context, payload) {
      context.commit('addSanPhamToDonHang', payload);
      context.dispatch('resolveDonHang')
    },
    removeSanPhamInDonHang(context, payload) {
      context.commit('removeSanPhamInDonHang', payload);
      context.dispatch('resolveDonHang')
    },
    modifySoLuongSanPhamInDonHang(context, payload) {
      context.commit('modifySoLuongSanPhamInDonHang', payload);
      context.dispatch('resolveDonHang')
    },
    syncThongTinDonHangLocal(context, payload) {
      context.commit('syncThongTinDonHangLocal', payload)
      context.dispatch('resolveDonHang')
    },
    resolveDonHang(context) {
      context.commit('resolveDonHang')
      context.commit('saveDonHangLocal')
    },

  }
})