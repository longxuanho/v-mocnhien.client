<template>
  <div>
    <div class="uk-card uk-card-small uk-card-default uk-card-hover uk-visible-toggle uk-inline" v-if="sanPham">
      <a class="uk-card-media-top uk-inline">
        <div class="ui label mn-counter uk-hidden-hover">
          <i class="cubes icon"></i> {{ sanPham.soLuong | number }}
        </div>
        <img :src="sanPham.cover" alt="">
        <span class="ui right ribbon label uk-position-bottom" v-if="sanPham.dacTinh">
          <span>{{ sanPham.dacTinh }}</span>
        </span>
      </a>
      <a class="uk-card-body">
        <h3 class="uk-card-title">{{ sanPham.ten }}</h3>
  
        <p v-if="sanPham.trichDan" class="uk-text-small uk-text-justify">{{ sanPham.trichDan }}</p>
      </a>
      <div style="height: 68px;"></div>
      <div class="uk-card-footer uk-position-bottom">
        <div class="subtitle uk-inline" style="width: 100%">
          <div class="mn-price uk-position-center-left">
            {{ sanPham.giaBan | number }} ₫/{{ sanPham.dvt }} {{ sanPham.chieuCao }}
          </div>
          <div class="uk-text-right">
            <div v-if="isItemInCart">
              <button class="uk-button uk-button-default mn-button-effect mn-success">Trong giỏ</button>
            </div>
            <div v-else>
              <button class="uk-button uk-button-default mn-button-effect" :class="{'uk-button-danger': isHetHang}" :disabled="isHetHang">
                {{ isHetHang ? 'Hết hàng' : 'Đặt mua' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numberFilter from '../../services/numberFilter';

export default {
  data() {
    return {
      isHetHang: false,
      isItemInCart: false
    }
  },
  filters: {
    number: numberFilter
  },
  props: ['sanPham'],
}
</script>

<style lang="scss" scoped>
uk-card {
  .uk-card-title {
    margin-bottom: 1rem;
    font-size: 1.275rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .subtitle {
    color: #666;
    text-align: right;
    width: 100%;
  }
  p {
    margin-top: 0;
  }
  .uk-card-body {
    cursor: pointer;
  }
}

.uk-button {
  font-size: .875rem;
  white-space: nowrap;
  padding-left: 20px;
  padding-right: 20px;
}

a {
  color: inherit;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
  &.uk-card-body {
    display: inline-block;
  }
}

.mn-counter {
  position: absolute;
  top: .8rem;
  right: .8rem;
}

.ribbon {
  bottom: 0 !important;
  left: calc(100% + 0rem + 1.2em) !important;
  font-weight: 500 !important;
  line-height: 1.25 !important;
  text-decoration: none;
}

.uk-card-body,
.uk-card-media-top {
  outline: none;
}

.uk-button-danger {
  color: #ec2147;
  border-color: #ec2147;
}

.mn-price {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: auto;
}

.mn-success {
  border-color: #8DC15B;
  color: #8DC15B;
}
</style>

