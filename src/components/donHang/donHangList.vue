<template>
  <div class="uk-container" style="margin-bottom: 3rem;">
    <ul class="uk-breadcrumb" style="margin-top: .75rem; margin-bottom: 2rem;">
      <li>
        <router-link :to="{ name: 'Home' }">Trang chính</router-link>
      </li>
      <li>
        <span href="">Đơn hàng</span>
      </li>
    </ul>
  
    <div class="uk-search uk-search-navbar">
      <span uk-search-icon></span>
      <input class="uk-search-input" :value="searchText" type="search" placeholder="Tìm theo mã đơn hàng..." style="width: 100%;" spellcheck="false" @input="search">
    </div>
  
    <table class="uk-table uk-table-divider uk-table-justify uk-table-hover" v-if="donHangs">
      <thead>
        <tr>
          <th>Ngày tạo</th>
          <th class="uk-table-expand">Mã đơn hàng</th>
          <th>Trạng thái</th>
          <th class="uk-text-right">SL sản phẩm</th>
          <th class="uk-text-right">Tổng giá trị</th>
        </tr>
      </thead>
      <tbody>
        <router-link tag="tr" :to="{name: 'Home'}" v-for="donHang in donHangs" class="mn-cursor-hover" :key="donHang._id">
          <td>{{ donHang.created }}</td>
          <td>{{ donHang.maDonHang }}</td>
          <td>{{ donHang.trangThai }}</td>
          <td class="uk-text-right">{{ donHang.itemsCount }}</td>
          <td class="uk-text-right">
            <strong>{{ donHang.tongCong | number }} đ</strong>
          </td>
        </router-link>
        <tr v-if="!donHangs.length" class="mn-no-hover">
          <td colspan="5" class="uk-text-right">
            <p>Không tìm thấy đơn hàng phù hợp.</p>
          </td>
        </tr>
      </tbody>
    </table>
  
  </div>
</template>

<script>
import numberFilter from '../../services/numberFilter';

export default {
  data() {
    return {
      searchText: '',
      isLoading: false,
      apiEndpoint: process.env.API_ENDPOINT + '/don_hangs',
      donHangs: []
    }
  },
  watch: {
    '$route'(to, from) {
      this.searchText = to.query['dh'] || '';

      window.scrollTo(0, 0);
      this.queryDonHangs();
    }
  },
  filters: {
    number: numberFilter
  },
  created() {
    if (this.$route.query['dh']) {
      this.searchText = this.$route.query['dh']
      window.scrollTo(0, 0);
      this.queryDonHangs();
    }
  },
  methods: {
    search: _.debounce(function (event) {
      this.$router.push({ name: 'DonHangList', query: { dh: event.target.value } })
    }, 800),
    
    queryDonHangs() {
      this.isLoading = true;
      this.$http.get(this.apiEndpoint, { params: { search: this.searchText, page: 1, limit: 10, fields: 'created maDonHang trangThai itemsCount tongCong' } })
        .then(response => {
          this.isLoading = false;
          this.donHangs = response.body || [];
        }, error => {
          this.isLoading = false;
          this.sanPhams = [];
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.uk-search-navbar {
  width: 100%;
  .uk-search-icon:not(.uk-search-icon-flip)+.uk-search-input {
    padding-left: 60px;
  }
}

.mn-cursor-hover {
  cursor: pointer;
}

.mn-no-hover:hover {
  background-color: inherit;
}
</style>


