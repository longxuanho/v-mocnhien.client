export const donHangMixin = {
  methods: {
    initDonHangLocal() {
      return {
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
      }
    },
    getDonHangLocal() {
      return JSON.parse(localStorage.getItem('donHang')) || this.initDonHangLocal();
    },
    resolveDonHangLocal(donHang) {
      if (!donHang || !donHang.sanPhams) return;

      donHang.itemsCount = 0;
      donHang.tongCong = 0;
      donHang.chietKhauPercent = 0;
      donHang.tongThanhToan = 0;
      donHang.phiVanChuyen = donHang.phiVanChuyen || 0;

      donHang.sanPhams.forEach(item => {
        donHang.itemsCount += item.soLuong;

        item.thanhTien = item.soLuong * item.donGia;
        donHang.tongCong += item.thanhTien;
      });

      if (donHang.itemsCount >= 2688) donHang.chietKhauPercent = 42;
      else if (donHang.itemsCount >= 1344) donHang.chietKhauPercent = 33;
      else if (donHang.itemsCount >= 672) donHang.chietKhauPercent = 25;
      else if (donHang.itemsCount >= 336) donHang.chietKhauPercent = 18;
      else if (donHang.itemsCount >= 168) donHang.chietKhauPercent = 12;
      else if (donHang.itemsCount >= 84) donHang.chietKhauPercent = 7;
      else if (donHang.itemsCount >= 42) donHang.chietKhauPercent = 3;
      else donHang.chietKhauPercent = 0;

      let chietKhau = - Math.ceil((donHang.chietKhauPercent / 100 * donHang.tongCong) / 1000) * 1000;

      donHang.tongThanhToan = donHang.tongCong + chietKhau + donHang.phiVanChuyen;
    },
    saveDonHangLocal(donHang) {
      if (!donHang) return;

      localStorage.setItem('donHang', JSON.stringify(donHang));
    },
    onResolveCart() {
      this.resolveDonHangLocal(this.donHang);
      this.saveDonHangLocal(this.donHang);
    }
  }
}