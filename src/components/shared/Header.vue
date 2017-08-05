<template>
  <div>
    <div class="mn-navbar-container">
      <div class="uk-container uk-container-expand">
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar="boundary-align: true; align: center;">
          <div class="uk-navbar-left">
            <router-link class="uk-navbar-item uk-logo uk-visible@s" :to="{ name: 'Home' }">
              <canvas width="190" height="50" uk-svg src="/static/images/logo.svg"></canvas>
            </router-link>
            <router-link class="uk-navbar-item uk-logo uk-hidden@s" :to="{ name: 'Home' }">
              <canvas width="170" height="50" uk-svg src="/static/images/logo.svg"></canvas>
            </router-link>
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
              <li class="uk-visible@s">
                <router-link :to="{ name: 'HoTroKhachHang' }">HỖ TRỢ</router-link>
              </li>
              <li class="uk-visible@m">
                <a href="#">LIÊN HỆ</a>
                <div class="uk-navbar-dropdown uk-width-large" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-center;">
                  <ul class="uk-nav uk-navbar-dropdown-nav uk-text-center">
                    <li>
                      <strong>Hotline</strong>
                      <br/>
                      <a>(0933)-909.022</a>
                    </li>
                    <li class="uk-nav-divider mn-horizontal-separator"></li>
                    <li>
                      <strong>Cửa hàng 1</strong>
                      <br/>
                      <a href="https://www.google.com/maps/place/M%E1%BB%99c+Nhi%C3%AAn+Farm/@11.1445409,107.4990585,17z/data=!3m1!4b1!4m5!3m4!1s0x317442dd45a3458b:0x7d6c61e5b856b043!8m2!3d11.1445409!4d107.5012472" target="_blank">
                        <i class="fa fa-map-marker" aria-hidden="true"></i> 116 Đường số 3, Thôn Tư, Đức Hạnh, Đức Linh, Bình Thuận</a>
                    </li>
                    <li>
                      <strong>Cửa hàng 2</strong>
                      <br/>
                      <a>
                        <i class="fa fa-map-marker" aria-hidden="true"></i> 110 Đường 3/2 Thôn Tư, Đức Hạnh, Đức Linh, Bình Thuận</a>
                    </li>
                    <li>
                      <strong>Trạm trung chuyển 1</strong>
                      <br/>
                      <a>
                        <i class="fa fa-map-marker" aria-hidden="true"></i> 751 Hồng Bàng, Phường 6, Quận 6, Tp. HCM</a>
                    </li>
  
                    <li class="uk-nav-divider mn-horizontal-separator"></li>
                    <strong>Giờ làm việc</strong>
                    <br/> 07:30 - 11:30 buổi sáng, 13:00 - 17:00 buổi chiều,
                    <br/> Từ Thứ 2 đến Thứ 7
                    <li class="uk-nav-divider mn-horizontal-separator"></li>
                    <div class="uk-text-center">
                      <strong>Fanpage</strong>
                      <br/>
                      <a href="https://www.facebook.com/mocnhienfarm" target="_blank">Mộc Nhiên Farm</a>
                      <br/>
                    </div>
                  </ul>
                </div>
              </li>
              <li class="uk-visible@s">
                <router-link :to="{ name: 'DonHangList' }">ĐƠN HÀNG</router-link>
              </li>
              <li class="uk-hidden@s">
                <a href="" uk-icon="icon: album"></a>
              </li>
  
              <li>
                <router-link :to="{ name: 'GioHangDetails' }" uk-icon="icon: cart">
                  <div class="mn-bubble">
                    <a class="ui tiny orange circular label">{{ itemsCount }}</a>
                  </div>
                </router-link>
              </li>
  
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    itemsCount() {
      return this.$store.getters.donHang.itemsCount
    }
  }
}
</script>

<style lang="scss" scoped>
.mn-navbar-container:not(.uk-navbar-transparent) {
  background: #f8f8f8;
  -webkit-tap-highlight-color: transparent;
}

.mn-navbar-container {
  .uk-navbar-nav>li>a {

    position: relative;
    height: 70px;
    font-size: 12px;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 15px;
      right: calc(102% - 15px);
      bottom: 20px;
      height: 2px;
      background-color: currentColor;
      transition: .3s ease-in-out;
      transition-property: right;
    }

    &:hover::before {
      right: 15px;
    }
  }
}

.uk-nav-divider {
  margin-top: 1rem;
}

.fa {
  color: #999;
  margin-right: 0.5rem;
}

.mn-vertical-separator {
  margin-left: 1rem;
  margin-right: 1rem;
}

.mn-horizontal-separator {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.uk-navbar-left:focus {
  outline: none;
}

// Items Count trong giỏ hàng
.mn-bubble {
  position: absolute;
  top: 0;
  right: 0;

  a:hover {
    text-decoration: none;
  }
  .ui.circular.label {
    padding: 0 !important;
    line-height: 2;
  }
}
</style>
