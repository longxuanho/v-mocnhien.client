<template>
  <div class="uk-container uk-container-expand" style="margin-top: 2rem;">
    <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-child-width-1-5@xl uk-grid-small uk-grid-match" uk-grid v-show="!isLoading">
      <mn-san-pham-card v-for="sanPham in sanPhams" :key="sanPham._id" :sanPham="sanPham"></mn-san-pham-card>
    </div>
  
    <div style="margin-top: 2rem;" v-show="!isLoading">
      <paginate :pageCount="page.totalPages" :containerClass="'pagination'" :prev-class="'uk-hidden'" :next-class="'uk-hidden'" :force-page="pageIndex" :click-handler="setCurrentPage"></paginate>
    </div>
  
    <div class="mn-spinner mn-spinner-pulse" v-show="isLoading"></div>
  
    <div class="mn-notify" v-if="!isLoading && !sanPhams.length">
      <h3>Không có sản phẩm phù hợp.</h3>
      <p><em>Rất tiếc! Chúng tôi không tìm thấy kết quả mà bạn yêu cầu. Vui lòng thử nội dung tìm kiếm khác hoặc liên hệ với chúng tôi qua hệ thống chat online để được tư vấn thêm về sản phẩm.</em></p>
    </div>
  
  </div>
</template>

<script>
import SanPhamCard from '../shared/SanPhamCard';
import VuejsPaginate from 'vuejs-paginate';
import latinize from 'latinize';

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
  computed: {
    pageIndex() {
      return this.page.currentPage - 1 || 0;
    }
  },
  watch: {
    '$route'(to, from) {
      this.page.search = to.query['s'] || '';
      this.page.currentPage = to.query['page'] || 1;

      window.scrollTo(0, 0);
      this.resolveSanPhams();
    }
  },
  methods: {
    resolveSanPhams() {
      this.isLoading = true;

      this.$http.get(this.apiEndPoint, { params: { nhom: '', status: '', tags: '', search: latinize(this.page.search), fields: 'nhom ten ma tags cover soLuong trichDan giaBan dvt dacTinh chieuCao', page: this.page.currentPage, limit: this.page.perPage, sort: 'tenLatinized' } })
        .then(response => {
          this.isLoading = false;
          let page = JSON.parse(response.headers.get('X-Pagination'));

          this.page.totalCount = page.totalCount;
          this.page.totalPages = page.totalPages;
          this.page.currentPage = page.page;

          this.sanPhams = response.body;
        }, error => {
          this.isLoading = false;
          this.sanPhams = [];
          console.log(error);
        });
    },
    setCurrentPage(page) {
      this.page.currentPage = page || 1;
      this.$router.push({ name: 'SanPhams', query: { s: this.page.search, page: this.page.currentPage } })
    }
  },
  components: {
    paginate: VuejsPaginate,
    mnSanPhamCard: SanPhamCard,
  },
  created() {
    window.scrollTo(0, 0);
    
    this.page.search = this.$route.query['s'] || '';
    this.resolveSanPhams();
  }
}
</script>

<style lang="scss" scoped>
.mn-notify {
  h3 {
    font-size: 1.5rem;
  }
  color: #666;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>

