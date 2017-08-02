<template>
  <div>
    <mn-hero></mn-hero>
    <mn-secondary-hero></mn-secondary-hero>

    <mn-san-pham-hightlight :category="'Sản phẩm bán chạy'" v-if="bestSellers.length" :sanPhams="bestSellers"></mn-san-pham-hightlight>
    <mn-san-pham-hightlight :category="'Sản phẩm mới'" v-if="newReleases.length" :sanPhams="newReleases"></mn-san-pham-hightlight>
    <mn-san-pham-hightlight :category="'Cây lớn'" v-if="cayLons.length" :sanPhams="cayLons"></mn-san-pham-hightlight>
    <mn-san-pham-hightlight :category="'Thảo dược'" v-if="herbs.length"  :sanPhams="herbs"></mn-san-pham-hightlight>
    <mn-san-pham-hightlight :category="'Giống hoa'" v-if="flowers.length" :sanPhams="flowers"></mn-san-pham-hightlight>
    <mn-san-pham-hightlight :category="'Cây cảnh'" v-if="ornamentalPlants.length" :sanPhams="ornamentalPlants"></mn-san-pham-hightlight>
    <mn-san-pham-hightlight :category="'Cây ăn trái'" v-if="fruitTrees.length" :sanPhams="fruitTrees"></mn-san-pham-hightlight>
  </div>
</template>

<script>
import Hero from './Hero';
import SecondaryHero from './SecondaryHero';
import SanPhamHightlight from './SanPhamHightlight';

export default {
  name: 'home',
  data() {
    return {
      apiEndPoint: process.env.API_ENDPOINT + '/san_phams',
      bestSellers: [],
      newReleases: [],
      herbs: [],
      flowers: [],
      ornamentalPlants: [],
      fruitTrees: [],
      cayLons: []
    }
  },
  methods: {
    resolveData() {
      this.$http.get(this.apiEndPoint, { params: { nhom: '', status: '', tags: 'New Releases, Best Seller, Pinned', search: '', fields: 'nhom ten ma tags cover soLuong trichDan giaBan dvt dacTinh chieuCao', page: '1', limit: '50', sort: 'tenLatinized' } })
        .then(response => {
          let result = response.body;

          this.bestSellers = result.filter(sanpham => sanpham.tags.includes('Best Seller'));
          this.newReleases = result.filter(sanpham => sanpham.tags.includes('New Releases'));
          this.herbs = result.filter(sanpham => sanpham.nhom === 'Thảo dược' && sanpham.tags.includes('Pinned'));
          this.flowers = result.filter(sanpham => sanpham.nhom === 'Giống hoa' && sanpham.tags.includes('Pinned'));
          this.ornamentalPlants = result.filter(sanpham => sanpham.nhom === 'Cây cảnh' && sanpham.tags.includes('Pinned'));
          this.fruitTrees = result.filter(sanpham => sanpham.nhom === 'Cây ăn trái' && sanpham.tags.includes('Pinned'));
          this.cayLons = result.filter(sanpham => sanpham.nhom === 'Cây lớn' && sanpham.tags.includes('Pinned'));
        }, error => {
          console.log(error);
        });
    }
  },
  created() {
    this.resolveData();
  },
  components: {
    mnHero: Hero,
    mnSecondaryHero: SecondaryHero,
    mnSanPhamHightlight: SanPhamHightlight
  }
}
</script>

<style lang="scss" scoped>

</style>
