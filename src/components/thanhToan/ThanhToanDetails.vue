<template>
  <div class="uk-container" style="margin-bottom: 3rem;" v-if="donHang">
    <ul class="uk-breadcrumb" style="margin-top: .75rem; margin-bottom: 2rem;">
      <li>
        <router-link :to="{ name: 'Home' }">Trang chính</router-link>
      </li>
      <li>
        <span href="">Thanh toán</span>
      </li>
    </ul>
    <div>
      <hr/>
      <h3 style="margin-top: 2rem; margin-bottom: 2rem;">Thông tin đơn hàng</h3>
      <form class="uk-form-horizontal uk-margin" spellcheck="false">
        <div class="uk-margin">
          <label class="uk-form-label" for="form-horizontal-text">Khách hàng</label>
          <div class="uk-form-controls">
            <input class="uk-input" type="text" placeholder="Họ và tên*" name="hoTen" v-model="thongTinDonHang.hoTen" v-validate="'required'" :class="{'uk-form-danger': errors.has('hoTen') }">
            <input class="uk-input" style="margin-top: -1px;" type="text" placeholder="Điện thoại*" name="dienThoai" v-model="thongTinDonHang.dienThoai" v-validate="'required'" :class="{'uk-form-danger': errors.has('dienThoai') }">
            <input class="uk-input" style="margin-top: -1px;" type="text" placeholder="Email" name="email" v-model="thongTinDonHang.email">
            <label style="margin-top: 1rem; display: inline-block;">
              <input class="uk-checkbox" type="checkbox" name="isThongTinGiaoHangKhacThongTinThanhToan" v-model="thongTinDonHang.isThongTinGiaoHangKhacThongTinThanhToan"> Thông tin khách hàng khác với thông tin người nhận</label>
          </div>
        </div>
  
        <div class="uk-margin" v-if="thongTinDonHang.isThongTinGiaoHangKhacThongTinThanhToan">
          <label class="uk-form-label" for="form-horizontal-select">Người nhận</label>
          <div class="uk-form-controls">
            <input class="uk-input" type="text" placeholder="Họ và tên*" name="hoTenNguoiNhan" v-model="thongTinDonHang.hoTenNguoiNhan" :class="{'uk-form-danger':errors.has('hoTenNguoiNhan') }" v-validate.initial="'required'">
            <input class="uk-input" style="margin-top: -1px;" type="text" placeholder="Điện thoại*" name="dienThoaiNguoiNhan" v-model="thongTinDonHang.dienThoaiNguoiNhan" :class="{'uk-form-danger': errors.has('dienThoaiNguoiNhan') }" v-validate.initial="'required'">
          </div>
        </div>
  
        <div class="uk-margin">
          <label class="uk-form-label" for="form-horizontal-text">Địa chỉ nhận hàng</label>
          <div class="uk-form-controls">
            <input class="uk-input" type="text" placeholder="Địa chỉ*" name="diaChi" v-model="thongTinDonHang.diaChi" :class="{'uk-form-danger': errors.has('diaChi') }" v-validate="'required'">
            <select style="margin-top: -1px;" class="uk-select" name="tinhThanh" v-model="thongTinDonHang.tinhThanh" :class="{'uk-form-danger': errors.has('tinhThanh') }" v-validate="'required'">
              <option value="">Chọn Tỉnh/Thành*</option>
              <option v-for="tinhThanh in tinhThanhOptions" :key="tinhThanh">{{ tinhThanh }}</option>
            </select>
            <select style="margin-top: -1px;" class="uk-select" name="quanHuyen" v-model="thongTinDonHang.quanHuyen" :class="{'uk-form-danger': errors.has('quanHuyen') }" v-validate="'required'">
              <option value="">Chọn Quận/Huyện*</option>
              <option v-for="quanHuyen of quanHuyenOptions" :key="quanHuyen">{{ quanHuyen }}</option>
            </select>
          </div>
        </div>
        <div class="uk-margin">
          <div class="uk-form-label">Phương thức thanh toán</div>
          <div class="uk-form-controls uk-form-controls-text">
            <label>
              <input class="uk-radio" type="radio" value="Tiền mặt" name="cachThanhToan" v-model="thongTinDonHang.cachThanhToan"> Thanh toán bằng tiền mặt khi nhận hàng</label>
            <br>
            <label>
              <input class="uk-radio" type="radio" value="Chuyển khoản" name="cachThanhToan" v-model="thongTinDonHang.cachThanhToan"> Chuyển khoản qua ngân hàng</label>
          </div>
  
          <div uk-alert v-if="thongTinDonHang && thongTinDonHang.cachThanhToan === 'Chuyển khoản'">
            <h3>Thông tin chuyển khoản</h3>
            <ul>
              <li>Số tài khoản:
                <strong>007 1000 84 88 55</strong>
              </li>
              <li>Chủ tài khoản:
                <strong>Huỳnh Quang Nhất</strong>
              </li>
              <li>Ngân hàng: Vietcombank chi nhánh Tp. HCM</li>
            </ul>
            <em>Đối với các đơn hàng nằm ngoài khu vực Tp. HCM, chúng tôi chỉ chấp nhận hình thức thanh toán chuyển khoản qua ngân hàng hoặc giao dịch trực tiếp tại nông trại.</em>
            <em>Để biết thêm chi tiết, xin vui lòng xem Hướng dẫn thanh toán
              <router-link to="/ho-tro-khach-hang#huong-dan-thanh-toan">tại đây</router-link>
            </em>
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="form-horizontal-text">Lời nhắn</label>
          <div class="uk-form-controls">
            <input class="uk-input" type="text" name="ghiChu" v-model="thongTinDonHang.ghiChu">
          </div>
        </div>
        <div class="uk-text-right">
          <button class="uk-button uk-button-default" @click.prevent="resetForm">Reset</button>
        </div>
      </form>
    </div>
  
    <div v-if="donHang">
      <hr style="margin-top: 2rem;" />
      <h3 style="margin-top: 2rem; margin-bottom: 2rem;">Nội dung đơn hàng</h3>
      <table class="uk-table uk-table-divider uk-table-justify">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th class="uk-table-expand">Tên sản phẩm</th>
            <th class="uk-text-right">Số lượng</th>
            <th class="uk-text-right">Đơn giá</th>
            <th class="uk-text-right">Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in donHang.sanPhams" :key="item._id">
            <td>{{ item.ma }}</td>
            <td>{{ item.ten }}</td>
            <td class="uk-text-right">{{ item.soLuong | number }}</td>
            <td class="uk-text-right">{{ item.donGia | number }}</td>
            <td class="uk-text-right">{{ item.thanhTien | number }}</td>
          </tr>
          <tr v-if="!donHang.sanPhams.length">
            <td colspan="5" class="uk-text-right">Không có sản phẩm trong giỏ hàng của bạn.</td>
          </tr>
          <tr v-if="donHang.sanPhams.length">
            <td colspan="5" class="uk-text-right">
              <span>Tổng cộng:
                <span class="mn-numeral">{{ donHang.tongCong | number }} đ</span>
              </span>
              <br/>
              <span>Phí vận chuyển:
                <span class="mn-numeral">{{ donHang.phiVanChuyen | number }} đ</span>
              </span>
              <br/>
              <strong>Tổng thanh toán:
                <span class="mn-numeral">{{ donHang.tongThanhToan | number }} đ</span>
              </strong>
              <br/>
            </td>
          </tr>
        </tbody>
      </table>
      <hr/>
    </div>
  
    <div uk-alert class="uk-alert-danger" v-if="errors.any() || !isThongTinDonHangValid">
      <h3>Chưa đủ thông tin thanh toán</h3>
      <p>
        <em>Xin vui lòng hoàn thiện đầy đủ các thông tin về người nhận trước khi bạn gửi đơn hàng này.</em>
      </p>
      <p>
        <em>Lưu ý rằng các trường thông tin có dấu (*) là các phần bắt buộc.</em>
      </p>
    </div>
  
    <div uk-alert class="uk-alert-danger" style="margin-top: 2rem;" v-if="!isTongTienValid">
      <h3>Giá trị đơn hàng không đủ...</h3>
      <p>Mộc Nhiên Farm sẽ tiến hành giao hàng đối với các đơn hàng có giá trị như sau:</p>
      <ul>
        <li>Ít nhất 145k (21 cây) đối với các đơn hàng trong khu vực Tp. HCM</li>
        <li>Ít nhất 290k (42 cây) đối với các đơn hàng giao đi các tỉnh thành khác</li>
      </ul>
      <p>Vui lòng quay lại giỏ hàng để điều chỉnh số lượng cây hoặc chọn thêm giống mới trước khi bạn gửi đơn hàng này!</p>
    </div>
  
    <div class="uk-text-right uk-inline" style="width: 100%;">
      <div class="uk-position-left">
        <router-link class="uk-button uk-button-default" :to="{ name: 'GioHangDetails' }">Trở lại giỏ hàng</router-link>
      </div>
      <button class="uk-button uk-button-default uk-button-primary" :disabled="errors.any() || !isThongTinDonHangValid || !isTongTienValid" @click="createNewDonHang">Gửi đơn hàng</button>
    </div>
  </div>
</template>

<script>
import numberFilter from '../../services/numberFilter';
import _ from 'lodash';

export default {
  data() {
    return {
      thongTinDonHang: null,
      locationsEndpoint: process.env.API_LOCATIONS,
      apiEndpoint: process.env.API_ENDPOINT + '/don_hangs',
      locationOptions: {
        tinhThanhs: [],
        quanHuyens: {}
      },
      phiVanChuyenRefs: []
    }
  },
  computed: {
    donHang() {
      return this.$store.getters.donHang
    },
    isThongTinGiaoHangKhacThongTinThanhToan() {
      return this.$store.getters.donHang.isThongTinGiaoHangKhacThongTinThanhToan
    },
    isThanhToanChuyenKhoan() {
      return this.$store.getters.donHang.cachThanhToan === 'Chuyển khoản'
    },
    tinhThanhOptions() {
      return this.locationOptions.tinhThanhs
    },
    quanHuyenOptions() {
      if (!this.thongTinDonHang.tinhThanh) return []

      return this.locationOptions.quanHuyens[this.thongTinDonHang.tinhThanh]
    },
    isThongTinDonHangValid() {
      return this.thongTinDonHang && this.thongTinDonHang.hoTen && this.thongTinDonHang.dienThoai && this.thongTinDonHang.diaChi && this.thongTinDonHang.tinhThanh && this.thongTinDonHang.quanHuyen
    },
    isTongTienValid() {
      let minTongTien = (this.thongTinDonHang.tinhThanh === 'Hồ Chí Minh') ? 145000 : 195000
      return this.donHang.tongCong >= minTongTien
    }
  },
  watch: {
    'thongTinDonHang': {
      handler: _.debounce(function (value) {
        if (!value.isThongTinGiaoHangKhacThongTinThanhToan) {
          this.thongTinDonHang.hoTenNguoiNhan = this.thongTinDonHang.hoTen
          this.thongTinDonHang.dienThoaiNguoiNhan = this.thongTinDonHang.dienThoai
        }

        this.syncThongTinDonHang()
      }, 1000),
      deep: true
    },
    'thongTinDonHang.isThongTinGiaoHangKhacThongTinThanhToan'(value) {
      if (!value) return
      this.thongTinDonHang.hoTenNguoiNhan = ''
      this.thongTinDonHang.dienThoaiNguoiNhan = ''
    },
    'thongTinDonHang.tinhThanh'(value, oldVal) {
      if (!oldVal || !value) return

      this.thongTinDonHang.quanHuyen = ''
      this.thongTinDonHang.phiVanChuyen = 0
    },
    'thongTinDonHang.quanHuyen'(value) {
      if (!value) return

      this.resolvePhiVanChuyen()
    }
  },
  filters: {
    number: numberFilter
  },
  methods: {
    resetForm() {
      this.$store.dispatch('resetThongTinDonHang')
      this.thongTinDonHang = this.$store.getters.thongTinDonHang
    },
    createNewDonHang() {
      if (!this.donHang) return
      let preparedDonHang = Object.assign({}, this.donHang);

      this.$http.post(this.apiEndpoint, preparedDonHang)
        .then(response => {
          this.$toastr.success('Đơn hàng của bạn đã được tạo mới thành công và đang chờ được chúng tôi xử lý.', 'Tạo mới thành công')

          this.$store.dispatch('resetDonHang')
          if (response.body._id)
            this.$router.push({ name: 'DonHangDetails', params: { id: response.body._id } })
        }, error => {
          this.$toastr.error(`Có lỗi khi khởi tạo đơn hàng này. ${error.message}`, 'Tạo đơn hàng thất bại')
        })

    },
    logVueObject(object) {
      console.log(JSON.parse(JSON.stringify(object)))
    },
    syncThongTinDonHang() {
      this.$store.dispatch('syncThongTinDonHangLocal', { thongTinDonHang: this.thongTinDonHang })
    },
    resolvePhiVanChuyen() {
      if (!this.thongTinDonHang || !this.thongTinDonHang.tinhThanh || !this.thongTinDonHang.quanHuyen) return

      let foundLocation = this.phiVanChuyenRefs.find(location => location.tinhThanh === this.thongTinDonHang.tinhThanh && location.quanHuyen === this.thongTinDonHang.quanHuyen);
      if (!foundLocation) return
      this.thongTinDonHang.phiVanChuyen = foundLocation.phiVanChuyen ? foundLocation.phiVanChuyen : 0;
    },
    resolveLocationOptions(rawLocations) {
      if (!rawLocations) return

      this.locationOptions = {
        tinhThanhs: [],
        quanHuyens: {}
      }

      rawLocations.forEach((location) => {
        this.locationOptions.quanHuyens[location.tinhThanh] = this.locationOptions.quanHuyens[location.tinhThanh] || []
        this.locationOptions.quanHuyens[location.tinhThanh].push(location.quanHuyen)
      });

      this.locationOptions.tinhThanhs = Object.keys(this.locationOptions.quanHuyens)
    }
  },
  created() {
    this.thongTinDonHang = this.$store.getters.thongTinDonHang

    this.$http.get(this.locationsEndpoint).then((response) => {
      this.phiVanChuyenRefs = response.body.locations

      this.resolveLocationOptions(response.body.locations)
    }, (errors) => {
      console.log(errors)
    })
  }
}
</script>

<style lang="scss" scoped>
.uk-input:focus,
.uk-select:focus,
.uk-form-danger {
  margin-bottom: 1px;
}

.uk-input,
.uk-select {
  padding-left: .875rem;
  padding-right: .875rem;
}

.uk-input[type="number"] {
  max-width: 6rem;
}

.mn-numeral {
  min-width: 10rem;
  display: inline-block;
}
</style>


