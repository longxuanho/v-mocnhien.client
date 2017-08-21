<template>
  <div class="uk-container" style="margin-bottom: 3rem;" v-if="sanPham">
    <ul class="uk-breadcrumb" style="margin-top: .75rem; margin-bottom: 2rem;">
      <li>
        <router-link :to="{ name: 'SanPhams', query: { s: 'Thảo dược' } }">{{ sanPham.nhom }}</router-link>
      </li>
      <li>
        <span>{{ sanPham.ten }}</span>
      </li>
    </ul>
  
    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
  
      <div class="uk-card-media-left uk-cover-container uk-inline-clip uk-transition-toggle" oncontextmenu="return false;">
  
        <img :src="currentCoverUrl" alt="" uk-cover @click="showGalleryModal" class="mn-cursor-hover">
        <!-- Click here to next or prev -->
        <i class="fa fa-angle-left uk-position-center-left fa-4x uk-position-small uk-hidden-hover uk-slidenav-large" @click="prevCoverShowModal"></i>
        <i class="fa fa-angle-right uk-position-center-right fa-4x uk-position-small uk-hidden-hover uk-slidenav-large" @click="nextCoverShowModal"></i>
  
        <canvas width="600" height="400" class="mn-cursor-hover" style="display: block; width: 100%; height: 100%; background: transparent" href="#modal-center" uk-toggle></canvas>
        <div class="uk-position-relative uk-light" style="z-index: 999;">
  
          <div class="uk-position-bottom-center uk-position-medium" style="width: 100%">
            <div style="width: 100%; text-align: center;" class="uk-inline">
              <div style="padding-left: 1rem;">
                <span style="color: white;">{{ currentCoverNumber }} / {{ currentCoverCount }}</span>
              </div>
              <!-- <div style="padding-right: 1rem">
                <a class="uk-icon-button" uk-icon="icon: thumbnails" @click="showGalleryModal"></a>
              </div> -->
            </div>
          </div>
        </div>
  
        <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
          <p class="uk-h4 uk-margin-remove">
            <span style="color: transparent;">invisible</span>
          </p>
        </div>
  
      </div>
      <div>
        <div class="uk-card-body" style="padding-top: 1.5rem;">
  
          <p style="display: none">{{ sanPham.id }}</p>
  
          <h3 class="uk-card-title" style="margin-bottom: .5rem; margin-top: .5rem;">{{ sanPham.ten }}</h3>
          <p style="margin-top: 0;" v-if="sanPham.tenKhac">({{ sanPham.tenKhac }})</p>
          <p class="uk-text-justify">{{ sanPham.gioiThieu }}</p>
          <table class="uk-table uk-table-small uk-table-divider">
            <tbody>
              <tr>
                <td>Mã hàng</td>
                <td>
                  <strong>{{ sanPham.ma }}</strong>
                </td>
              </tr>
              <tr>
                <td>Sẵn có</td>
                <td>
                  <span v-if="sanPham.soLuong > 0">{{ sanPham.soLuong | number }}</span>
                  <span v-if="sanPham.soLuong <= 0">Hết hàng</span>
                </td>
              </tr>
              <tr>
                <td>Giá bán</td>
                <td>
                  <strong>{{ sanPham.giaBan | number }} ₫</strong> / {{ sanPham.dvt }}</td>
              </tr>
              <tr>
                <td>Chiều cao</td>
                <td>{{ sanPham.chieuCao }}</td>
              </tr>
            </tbody>
          </table>
          <div class="uk-text-right">
            <div>
              <div v-if="isItemInCart">
                <!-- routerLink to Cart -->
                <button class="uk-button uk-button-default mn-button-effect mn-success">Trong giỏ</button>
              </div>
              <div v-else>
                <!-- Click to add to cart -->
                <button class="uk-button uk-button-default mn-button-effect" @click="showAddToCartModal" :class="{'uk-button-danger': isHetHang}" :disabled="isHetHang">{{ isHetHang ? 'Hết hàng' : 'Đặt mua' }}</button>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  
    <div class="uk-child-width-1-2@m " style="margin-top: 3rem;" uk-grid>
      <div>
        <h3 class="uk-card-title">Mô tả sản phẩm</h3>
        <div v-html="sanPham.moTaSanPham"></div>
      </div>
      <div>
        <h3 class="uk-card-title">Cách trồng và chăm sóc</h3>
        <div v-html="sanPham.cachChamSoc"></div>
      </div>
    </div>
  
    <!--Overlay gallery Modal-->
    <div id="modal-center" uk-modal>
      <div class="uk-modal-dialog">
        <button class="uk-modal-close-outside" type="button" uk-close></button>
        <div oncontextmenu="return false;">
          <div class="uk-position-relative uk-light">
            <div>
              <img :src="currentCoverUrl" alt="" >
              <i class="fa fa-angle-left uk-position-center-left fa-4x uk-position-small uk-hidden-hover uk-slidenav-large" @click="prevCover"></i>
              <i class="fa fa-angle-right uk-position-center-right fa-4x uk-position-small uk-hidden-hover uk-slidenav-large" @click="nextCover"></i>
            </div>
  
            <div class="mn-dotnav-container">
              <div>
                <!-- Click here to next or prev -->
                <!-- <span class="d-inline-block uk-margin-small-right" uk-icon="icon: chevron-left"></span> -->
                <span class="d-inline-block">{{ currentCoverNumber }} / {{ currentCoverCount }}</span>
                <!-- <span class="d-inline-block uk-margin-small-left" uk-icon="icon: chevron-right"></span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import numberFilter from '../../services/numberFilter';
import EventBus from '../../services/event-bus';

export default {
  data() {
    return {
      sanPham: null,
      selectedId: '',
      currentCoverIndex: 0
    }
  },
  computed: {
    currentCoverUrl() {
      if (!this.sanPham || !this.sanPham.gallery) return '';

      return this.sanPham.gallery[this.currentCoverIndex].url || '';
    },
    isHetHang() {
      return this.sanPham && this.sanPham.soLuong <= 0;
    },
    isItemInCart() {
      return false;
    },
    apiEndPoint() {
      return process.env.API_ENDPOINT + `/san_phams/${this.selectedId}`;
    },
    currentCoverNumber() {
      return this.currentCoverIndex + 1;
    },
    currentCoverCount() {
      return this.sanPham.gallery.length || 0;
    }
  },
  methods: {
    resolveSanPham() {
      this.$http.get(this.apiEndPoint, { params: { fields: '-created ' } })
        .then(response => {
          this.sanPham = response.body;
        }, error => {
          console.log(error);
        })
    },
    showGalleryModal() {
      this.$UIkit.modal("#modal-center").show();
    },
    showAddToCartModal() {
      EventBus.$emit('SHOW_ADD_TO_CART_MODAL', this.sanPham);
    },
    nextCover() {
      if (!this.sanPham || !this.sanPham.gallery || !this.sanPham.gallery.length) return;

      if (this.currentCoverIndex >= this.sanPham.gallery.length - 1) {
        this.currentCoverIndex = 0
      } else {
        this.currentCoverIndex++;
      }
    },
    prevCover() {
      if (!this.sanPham || !this.sanPham.gallery || !this.sanPham.gallery.length) return;

      if (this.currentCoverIndex <= 0) {
        this.currentCoverIndex = this.sanPham.gallery.length - 1;
      } else {
        this.currentCoverIndex--;
      }
    },
    nextCoverShowModal() {
      this.nextCover();
      this.showGalleryModal();
    },
    prevCoverShowModal() {
      this.prevCover();
      this.showGalleryModal()
    }
  },
  filters: {
    number: numberFilter
  },
  created() {
    window.scrollTo(0, 0);
    this.selectedId = this.$route.params['id'];

    if (this.selectedId)
      this.resolveSanPham();
  }

}
</script>


<style lang="scss" scoped>
.uk-button-danger {
  color: #ec2147;
  border-color: #ec2147;
}

#modal-center.uk-open {
  .uk-modal-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.mn-cursor-hover {
  cursor: pointer;
}

.uk-modal {
  background: rgba(0, 0, 0, 0.75);
}

.mn-success {
  border-color: #8DC15B;
  color: #8DC15B;
}

.mn-dotnav-container {
  // position: absolute;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: grey;
  width: 100%;
}

i.fa {
  color: white;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}
</style>
