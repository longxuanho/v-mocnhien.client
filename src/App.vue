<template>
  <div id="app">
    <mn-header></mn-header>
    <mn-menubar></mn-menubar>
  
    <router-view></router-view>
  
    <mn-san-pham-add-to-cart-modal :sanPham="selectedSanPham"></mn-san-pham-add-to-cart-modal>
    <mn-footer></mn-footer>
  </div>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Menubar from './components/shared/Menubar';
import SanPhamAddToCartModal from './components/shared/SanPhamAddToCartModal';
import EventBus from './services/event-bus';


export default {
  data() {
    return {
      selectedSanPham: null
    }
  },
  name: 'app',
  components: {
    mnHeader: Header,
    mnFooter: Footer,
    mnMenubar: Menubar,
    mnSanPhamAddToCartModal: SanPhamAddToCartModal
  },
  mounted() {
    EventBus.$on('SHOW_ADD_TO_CART_MODAL', (payLoad) => {
      this.selectedSanPham = payLoad || null;
      this.$UIkit.modal("#modal-add-to-cart").show();

      // FIX BUG: Lỗi trên iOS 6 sau khi đóng hộp thoại thêm sản phẩm vào giỏ thì quay về đầu trang.
      this.$store.dispatch('resolveLastScrollPos')
    });
    EventBus.$on('HIDE_ADD_TO_CART_MODAL', (payLoad) => {
      this.selectedSanPham = null;

      // FIX BUG: Lỗi trên iOS 6 sau khi đóng hộp thoại thêm sản phẩm vào giỏ thì quay về đầu trang.
      let scrollY = window.scrollY;
      if (scrollY !== this.$store.getters.lastScrollPos.y)
        window.scrollTo(this.$store.getters.lastScrollPos.x, this.$store.getters.lastScrollPos.y)
    });
  },
  created() {
    // Init store
    this.$store.dispatch('initDonHang');
  }
}
</script>

<style lang="scss">
@import './assets/scss/uikit';
@import './assets/scss/semantic-ui';
@import './assets/scss/spinkit';
@import './assets/scss/pagination';
@import './assets/scss/toastr';
@import './assets/scss/global';
</style>
