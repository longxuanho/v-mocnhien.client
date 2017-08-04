<template>
  <div id="modal-add-to-cart" uk-modal="center: true">
    <form class="uk-modal-dialog">
      <button class="uk-modal-close-default" type="button" uk-close></button>
  
      <div class="uk-modal-header" v-if="sanPham">
        <h2 class="uk-modal-title">{{ sanPham.ten }}</h2>
      </div>
  
      <div class="uk-modal-body" v-if="sanPham">
        <div class="uk-text-center" uk-grid>
          <div class="uk-width-auto@m">
            <img class="uk-border-rounded" :src="sanPham.cover" width="200" height="200" />
          </div>
          <div class="uk-width-expand@m">
            <div class="uk-form-horizontal uk-margin" spellcheck="false">
              <div class="uk-margin">
  
                <label class="uk-form-label" for="soLuong">Số lượng:</label>
                <div class="uk-form-controls">
                  <input type="number" name="soLuong" v-model.number="soLuong" class="uk-input" style="max-width: 6rem;" v-validate="{ rules: { required: true, numeric: true, min_value: 1, max_value: sanPham.soLuong } }" autofocus :class="{'uk-form-danger': errors.has('soLuong')}">
                </div>
                <p class="text-right">Hiện đang sẵn có {{ sanPham.soLuong | number }} cây.</p>
              </div>
            </div>
          </div>
        </div>
  
      </div>
  
      <div class="uk-modal-footer uk-text-right" v-if="sanPham">
        <button class="uk-button uk-button-default" type="button">Trở về</button>
        <button class="uk-button uk-button-primary" type="submit" @click.prevent="addToCard" :disabled="errors.has('soLuong')">Thêm vào giỏ</button>
      </div>
  
    </form>
  </div>
</template>

<script>
import $ from 'jquery';
import numberFilter from '../../services/numberFilter';
import EventBus from '../../services/event-bus';

export default {
  data() {
    return {
      soLuong: 1
    }
  },
  props: ['sanPham'],
  filters: {
    number: numberFilter
  },
  methods: {
    addToCard() {
      this.$UIkit.modal('#modal-add-to-cart').hide();
      
      if (!this.sanPham || !this.soLuong) return;

      this.$store.dispatch('addSanPhamToDonHang', { sanPham: this.sanPham, soLuong: this.soLuong });
      
      this.$toastr.success(`Sản phẩm ${ this.sanPham.ten } (${ this.sanPham.ma }) đã được thêm vào giỏ hàng của bạn.`, 'Giỏ hàng được cập nhật');
    }
  },
  mounted() {
    $(this.$el).on('show', () => {
      this.soLuong = 1;
    });
    $(this.$el).on('hide', () => {
      EventBus.$emit('HIDE_ADD_TO_CART_MODAL', this.sanPham);
    });
  },
  destroyed() {
    $(this.$el).off('show');
    $(this.$el).off('hide');
    $('#modal-add-to-cart').remove();
  }
}
</script>

<style lang="scss" scoped>

</style>

