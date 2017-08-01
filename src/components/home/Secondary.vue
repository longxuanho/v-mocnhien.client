<template>
  <div id="body" data-page="home" class="uk-container">
    <div class="body-secondary">
      <div class="home-showcase body-mai">
        <div class="body-wrapper">
          <div class="home-showcase-overlay">
            <!--<h1 class="home-showcase-title body-main-title font-sans-semibold">Sự hài lòng của bạn - Niềm tự hào của chúng tôi.</h1>-->
            <img src="/static/images/home/moc-nhien-slogan.svg" style="max-width: 40rem;" alt="">
            <div style="margin-bottom: 3rem;"></div>
            <!--<h4 class="home-showcase-subtitle body-main-subtite font-sans-regular">Tại Mộc Nhiên Farm, chúng tôi nghiên cứu các quy trình nhân giống cây trồng, hoa, thảo dược tự nhiên với chất lượng và giá cả cực kỳ cạnh tranh!</h4>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<<script>
export default {
  
}
</script>


<style lang="scss" scoped>
.home-showcase {
    position: relative;
    text-align: center;
    margin-top: 28px;
    margin-bottom: 2rem;    
}

.home-showcase .body-wrapper {
    overflow: hidden;
}

.body-wrapper {
    width: 1120px;
    margin: 0 auto;
}

.home-showcase .home-showcase-title {
    color: #47608B;
    font-size: 19.8px;
    line-height: 38px;
    letter-spacing: .83px;
}

.home-showcase .home-showcase-subtitle {
    font-size: 16.2px;
    color: #748598;
    line-height: 24px;
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12px;
}

@media screen and (max-width: 1099px) {
    .body-wrapper {
        width: 100%;
    }
}

@media screen and (max-width: 659px) {
    .home-showcase {
        margin-top: 0;
        padding-top: 0;
        padding-left: 12px;
        padding-right: 12px;
    }
    .body-wrapper {
        width: 100%;
    }
}
</style>
