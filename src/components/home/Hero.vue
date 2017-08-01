<template>
  <!--Không cho người dùng right click tại đây-->
  <!-- <div class="home-main body-main" oncontextmenu="return false;"> -->
  <div class="home-main body-main">
    <div class="home-main-ornament">
    </div>
    <div class="body-wrapper">
      <div class="home-main-wrapper">
        <h1 class="home-main-title body-main-title font-sans-light">Ươm mầm giá trị thiên nhiên.</h1>
        <h4 class="home-main-subtitle body-main-subtitle font-sans-regular" style="max-width: 520px;">Mộc Nhiên Farm cung cấp các loại giống cây trồng đa dạng được sưu tầm từ khắp nơi và vận chuyển trên toàn quốc.</h4>
        <h4 class="home-main-subtitle body-main-subtitle font-sans-regular" style="font-size: 15px;">
          <i>－ Hơn 130+ loại cây giống. Đồng giá chỉ 7,000 đ.</i>
        </h4>
      </div>
      <div class="home-main-illustration">
      </div>
    </div>
    <div class="home-main-split noselect">
      <div class="home-main-split-shape"></div>
      <div class="home-main-split-mask"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home-main {
  background-color: #979A33;
  background-image: url(/static/images/home/growing_background.jpg);
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  background-size: cover;
  position: relative;
  height: 780px;
  width: 100%;
  overflow: hidden;
}

.home-main .home-main-ornament {
  height: 120%;
  width: 100%;
  z-index: 2;
  background-image: url(/static/images/home/background_ornament.svg?fd5496b);
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  background-size: cover;
  animation-name: fadeIn;
  animation-duration: .9s;
  animation-fill-mode: both;
  animation-delay: .5s;
}

.home-main .body-wrapper {
  position: absolute;
  z-index: 3;
  right: 0;
  left: 0;
  bottom: 200px;
  top: 0;
}

.body-wrapper {
  width: 1120px;
  margin: 0 auto;
}

.home-main .home-main-wrapper {
  position: absolute;
  top: 50%;
  margin-top: -70px;
}

.home-main .home-main-wrapper .home-main-title {
  font-size: 30.6px;
  max-width: 85%;
  line-height: 46px;
  color: #fff;
  letter-spacing: .5px;
}

.home-main .home-main-wrapper .home-main-subtitle {
  margin-top: 32px;
  font-size: 18px;
  color: #fff;
  letter-spacing: .6px;
}

.home-main .home-main-wrapper .home-main-register {
  margin-top: 42px;
  color: #5C52EA;
  font-size: 13.95px;
  background-color: #fff;
  padding: 17px 28px;
  border-radius: 64px;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
}

.home-main .home-main-wrapper .home-main-register:hover {
  transform: scale(1.06);
}

a {
  text-decoration: none;
}

.home-main .home-main-illustration {
  position: relative;
  float: right;
  width: 585px;
  height: 515px;
  right: -120px;
  margin-top: 144px;
}

.home-main .home-main-split {
  position: absolute;
  bottom: -40px;
  height: 230px;
  width: calc(100% + 40px);
  margin-left: -20px;
  z-index: 3;
  transform: rotate(-2deg);
}

.home-main .home-main-split .home-main-split-shape {
  width: 110%;
  height: 180px;
  left: -30px;
  background-color: rgba(255, 255, 255, .15);
  position: absolute;
  z-index: 3;
  animation-name: fadeInUp;
  animation-duration: 1.1s;
  animation-fill-mode: both;
  animation-delay: .4s;
}

.home-main .home-main-split .home-main-split-mask {
  width: 110%;
  height: 240px;
  left: -30px;
  background-color: #fff;
  position: absolute;
  z-index: 4;
  transform: rotate(-2.7deg);
  top: 80px;
}

@media screen and (max-width: 1099px) {
  .body-wrapper {
    width: 100%;
    margin-left: 30px;
    margin-right: 30px;
  }
}

@media screen and (max-width: 939px) {
  .home-main .body-wrapper {
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }
  .home-main .home-main-wrapper {
    text-align: center;
    margin-top: 130px;
    display: inline-block;
    position: static;
  }
  .home-main .home-main-wrapper .home-main-title {
    padding-left: 30px;
    padding-right: 30px;
    max-width: 100%;
    font-size: 26.1px;
  }
  .home-main .home-main-wrapper .home-main-subtitle {
    margin-top: 14px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .body-main .body-main-subtitle {
    margin-top: 8px;
    font-size: 16.2px;
    line-height: 25px;
  }
  .home-main .home-main-wrapper {
    text-align: center;
    margin-top: 130px;
    display: inline-block;
    position: static;
  }
  .body-main .body-main-subtitle {
    margin-top: 8px;
    font-size: 16.2px;
    line-height: 25px;
  }
}
</style>

