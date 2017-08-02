<template>
  <div>
    <div class="uk-container uk-container-expand" v-if="!isLoading">
  
      <h4 class="uk-heading-line" v-if="(category === 'Sản phẩm bán chạy') || (category === 'Sản phẩm mới')">
        <span class="mn-ribbon">{{ category }}</span>
      </h4>
  
      <h4 class="uk-heading-line mn-cursor-pointer" v-if="(category !== 'Sản phẩm bán chạy') && (category !== 'Sản phẩm mới')">
        <router-link class="mn-ribbon" :to="{ name: 'SanPhams', query: { s: category } }">{{ category }}</router-link>
      </h4>
  
      <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-child-width-1-5@xl uk-grid-small uk-grid-match" uk-grid>
  
        <mn-san-pham-card v-for="sanPham in sanPhams" :sanPham="sanPham" :key="sanPham._id"></mn-san-pham-card>
  
      </div>
  
      <div style="margin-top: 2rem; text-align: center;" v-if="(category !== 'Sản phẩm bán chạy') && (category !== 'Sản phẩm mới')">
        <router-link class="uk-button uk-button-default mn-button-effect" :to="{ name: 'SanPhams', query: { s: category } }">Xem tất cả</router-link>
      </div>
    </div>
  
    <div class="mn-spinner mn-spinner-pulse" v-if="isLoading"></div>
  </div>
</template>

<script>
import SanPhamCard from '../shared/SanPhamCard';


export default {
  data() {
    return {
    }
  },
  props: ['category', 'sanPhams', 'isLoading'],
  components: {
    mnSanPhamCard: SanPhamCard
  },
  methods: {
    goToCategory(category) {
      this.$router.push({ name: 'SanPhams', query: { s: category } });
    }
  }
}
</script>


<style lang="scss" scoped>
.mn-ribbon {
  padding: .5rem 1rem;
  text-transform: uppercase;
  font-weight: 500;
  font-size: .875rem;
  color: #fff;
  min-width: 9rem;
  background-color: #8DC15B;
  ;

  &::before {
    content: " ";
    display: block;
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-left: 30px solid #8DC15B;
    ;
    position: absolute;
    top: 50%;
    margin-top: -50px;
    left: 100%;
    z-index: 2;
  }
}

.uk-heading-line {
  margin-bottom: 2rem;
}

.uk-container {
  margin-bottom: 3rem;
}


.mn-button-effect {
  border-color: #8dc15b;
  border-radius: 500px;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  }
}

.mn-cursor-pointer:hover {
  cursor: pointer;
}
</style>
