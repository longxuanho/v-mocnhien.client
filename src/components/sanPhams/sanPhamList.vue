<template>
  <div class="uk-container uk-container-expand" style="margin-top: 2rem;">
    <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-child-width-1-5@xl uk-grid-small uk-grid-match" uk-grid v-if="!isLoading">
  
      <mn-san-pham-card v-for="sanPham in sanPhams" :key="sanPham._id" :sanPham="sanPham"></mn-san-pham-card>
  
    </div>
  
    <div class="mn-spinner mn-spinner-pulse" v-if="isLoading"></div>
  
    <div style="margin-top: 2rem;">
      <paginate :pageCount="page.totalPages" :containerClass="'pagination'" :prev-class="'uk-hidden'" :next-class="'uk-hidden'"></paginate>
    </div>
  
  </div>
</template>

<script>
import SanPhamCard from '../shared/SanPhamCard';
import VuejsPaginate from 'vuejs-paginate';

export default {
  data() {
    return {
      apiEndPoint: process.env.API_ENDPOINT + '/san_phams',
      isLoading: false,
      sanPhams: [],
      page: {
        currentPage: 1,
        perPage: 8,
        totalPages: 0,
        totalCount: 0,
        search: ''
      }
    }
  },
  watch: {
    '$route'(to, from) {
      this.page.search = to.query['s'] || '';
      this.page.currentPage = to.query['page'] || 1;
      this.resolveSanPhams();
    }
  },
  methods: {
    resolveSanPhams() {
      this.$http.get(this.apiEndPoint, { params: { nhom: '', status: '', tags: '', search: this.page.search, fields: 'nhom ten ma tags cover soLuong trichDan giaBan dvt dacTinh chieuCao', page: this.page.currentPage, limit: this.page.perPage, sort: 'tenLatinized' } })
        .then(response => {
          let page = JSON.parse(response.headers.get('X-Pagination'));
          
          this.page.totalCount = page.totalCount;
          this.page.totalPages = page.totalPages;
          this.page.currentPage = page.page;

          this.sanPhams = response.body;
        }, error => {
          this.sanPhams = [];
          console.log(error);
        });
    }
  },
  components: {
    paginate: VuejsPaginate,
    mnSanPhamCard: SanPhamCard,
  },
  created() {
    this.resolveSanPhams();
  }
}
</script>
