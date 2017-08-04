<template>
  <div class="uk-container" style="margin-bottom: 3rem;" v-if="donHang && donHang.sanPhams">
    <ul class="uk-breadcrumb" style="margin-top: .75rem; margin-bottom: 2rem;">
      <li>
        <router-link :to="{ name: 'Home' }">Trang chính</router-link>
      </li>
      <li>
        <span>Giỏ hàng</span>
      </li>
    </ul>
    <form class="margin-top: 2rem;">
      <table class="uk-table uk-table-divider uk-table-justify">
        <thead>
          <tr>
            <th class="uk-visible@s">Mã sản phẩm</th>
            <th class="uk-table-expand">Tên sản phẩm</th>
            <th class="uk-text-right">Số lượng</th>
            <th class="uk-text-right">Đơn giá</th>
            <th class="uk-text-right">Thành tiền</th>
            <th class="uk-table-shrink"></th>
          </tr>
        </thead>
        <tbody class="mn-image-tooltip">
          <tr v-for="(item, i) in donHang.sanPhams" :key="item._id">
            <td class="uk-visible@s">{{ item.ma }} (SL: {{ item.sanCo | number }})</td>
            <td>{{ item.ten }}</td>
            <td class="uk-text-right">
              <!-- @Input resolve cart, min, max, required -->
              <input type="number" :name="item._id" class="uk-input" :value="item.soLuong" :class="{'uk-form-danger': errors.has(item._id)}" 
                v-validate.initial="{ rules: { required: true, numeric: true, min_value: 1, max_value: item.sanCo } }"
                @input="modifySoLuongSanPhamInDonHang($event, item)">
            </td>
            <td class="uk-text-right">{{ item.donGia | number }}</td>
            <td class="uk-text-right">{{ item.thanhTien | number }}</td>
            <td>
              <a uk-icon="icon: close" @click.prevent="removeSanPhamInDonHang(item)"></a>
            </td>
          </tr>
          <tr v-if="!donHang.sanPhams.length">
            <td colspan="6" class="uk-text-right">Không có sản phẩm trong giỏ hàng của bạn.</td>
          </tr>
          <tr v-if="donHang.sanPhams.length">
            <td colspan="2"></td>
            <td class="uk-text-right" style="padding-bottom: 0;">
              <input type="number" class="uk-input" :value="itemsCount" disabled>
            </td>
            <td colspan="3" class="uk-text-right">Tổng cộng:
              <strong class="mn-numeral">{{ donHang.tongCong | number }} đ</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  
    <div uk-alert class="uk-alert-danger" v-if="false">
      <h3>Rất tiếc, chúng tôi chưa thể đáp ứng đơn hàng này...</h3>
      <p>Đơn hàng của bạn có sản phẩm với số lượng vượt quá lượng hàng sẵn có của chúng tôi. Xin vui lòng điều chỉnh lại số lượng phù hợp.</p>
      <p>Trong trường hợp bạn vẫn muốn đặt hàng với số lượng này, xin vui lòng liên hệ trực tiếp với chúng tôi qua kênh chat online để đặt sản xuất và thỏa thuận về ngày giao hàng.</p>
      <p>
        <em>Tip: Số lượng sẵn có của sản phẩm được chúng tôi chú thích bên cạnh mã sản phẩm. Ví dụ: FLHBT_01 (SL: 284).</em>
      </p>
    </div>
  
    <div v-if="!donHang.sanPhams.length">
      <router-link :to="{ name: 'Home' }" class="uk-button uk-button-default mn-button-effect uk-button-primary">Chọn sản phẩm</router-link>
    </div>
    <div class="uk-text-right uk-inline" style="width: 100%;" v-if="donHang.sanPhams.length">
      <div class="uk-position-left">
        <router-link :to="{ name: 'Home' }" class="uk-button uk-button-default mn-button-effect">Chọn tiếp</router-link>
      </div>
      <router-link :to="{ name: 'ThanhToanDetails' }" class="uk-button uk-button-default mn-button-effect uk-button-primary" tag="button" :disabled="errors.any()">Thanh toán</router-link>
    </div>

    <div uk-alert id="help-chiet-khau">
      <h3>Chính sách chiết khấu</h3>
      <p>Hiện tại, Mộc Nhiên Farm áp dụng chính sách chiết khấu cho các sản phẩm từ nông trại như sau:</p>
      <ul>
        <li>
          <strong>3%</strong> với các đơn hàng từ
          <strong>42</strong> cây</li>
        <li>
          <strong>7%</strong> với các đơn hàng từ
          <strong>84</strong> cây</li>
        <li>
          <strong>12%</strong> với các đơn hàng từ
          <strong>168</strong> cây</li>
        <li>
          <strong>18%</strong> với các đơn hàng từ
          <strong>336</strong> cây</li>
        <li>
          <strong>25%</strong> với các đơn hàng từ
          <strong>672</strong> cây</li>
        <li>
          <strong>33%</strong> với các đơn hàng từ
          <strong>1,344</strong> cây</li>
        <li>
          <strong>42%</strong> với các đơn hàng từ
          <strong>2,688</strong> cây</li>
      </ul>
      <p>Mặc định, chính sách này được áp dụng tự động đối với các đơn đặt hàng của các bạn tại đây!</p>
    </div>
  
    <div uk-alert style="margin-top: 2rem;" v-if="itemsCount < 42">
      <p>Mộc Nhiên Farm sẽ tiến hành giao hàng đối với các đơn hàng có giá trị đáp ứng:</p>
      <ul>
        <li>Ít nhất 145k (21 cây) đối với các đơn hàng trong khu vực Tp. HCM</li>
        <li>Ít nhất 290k (42 cây) đối với các đơn hàng giao đi các tỉnh thành khác</li>
      </ul>
    </div>
  </div>
</template>

<script>
import numberFilter from '../../services/numberFilter';

export default {
  computed: {
    donHang() {
      return this.$store.getters.donHang;
    },
    itemsCount() {
      return this.$store.getters.donHang.itemsCount;
    },
  },
  methods: {
    removeSanPhamInDonHang(sanPham) {
      if (!sanPham) return;

      this.$store.dispatch('removeSanPhamInDonHang', { sanPham: sanPham })
    },
    modifySoLuongSanPhamInDonHang(event, sanPham) {
      let soLuong = +event.target.value;
      if (!sanPham || !soLuong) return;

      this.$store.dispatch('modifySoLuongSanPhamInDonHang', { sanPham: sanPham, soLuong: soLuong })
    }
  },
  filters: {
    number: numberFilter
  },
  created() {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
.uk-input[type="number"] {
  max-width: 6rem;
}

.uk-input.ng-invalid {
  color: #f0506e;
  border-color: #f0506e;
}

.mn-numeral {
  min-width: 10rem;
  display: inline-block;
}

input[type="number"] {
  text-align: right;
}
</style>

