<template>
  <div class="sk-navbar-container" uk-sticky>
    <div class="uk-container uk-container-expand">
      <nav class="uk-navbar-container uk-margin" uk-navbar>
  
        <div class="uk-navbar-left">
          <div class="uk-navbar-item">
            <div class="uk-search uk-search-navbar">
              <span uk-search-icon></span>
              <input class="uk-search-input" type="search" placeholder="Tìm sản phẩm..." spellcheck=false>
            </div>
          </div>
        </div>
  
        <div class="uk-navbar-right">
          <!--Hidden on small devices-->
          <ul class="uk-navbar-nav">
            <li>
              <a href="" class="sk-bold">Thảo dược</a>
              <div class="uk-navbar-dropdown uk-width-large" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-center">
                <div class="uk-dropdown-grid uk-child-width-1-2@m" uk-grid>
                  <div>
                    <ul class="uk-nav uk-dropdown-nav sk-product-sub-categories">
                      <li class="uk-nav-header">
                        <a href="">Nhập ngoại</a>
                      </li>
                      <li class="uk-nav-divider"></li>
                      <!-- <li *ngFor="let menuItem of menu.thaoDuoc.nhapNgoai">
                          <a href="" [ngClass]="{'highlight': menuItem.highlight}">{{ menuItem.text }}</a>
                        </li> -->
                    </ul>
                  </div>
                  <div>
                    <ul class="uk-nav uk-dropdown-nav sk-product-sub-categories">
                      <li class="uk-nav-header">
                        <a href="">Trong nước</a>
                      </li>
                      <li class="uk-nav-divider"></li>
                      <!-- <li *ngFor="let menuItem of menu.thaoDuoc.trongNuoc">
                          <a href="" [ngClass]="{'highlight': menuItem.highlight}">{{ menuItem.text }}</a>
                        </li> -->
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="" class="sk-bold">Giống hoa</a>
              <div class="uk-navbar-dropdown uk-width-large" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-center">
                <ul class="uk-nav uk-dropdown-nav sk-product-sub-categories uk-column-1-2@s uk-column-1-3@m">
                  <!-- <li *ngFor="let menuItem of menu.giongHoa">
                      <a href="" [ngClass]="{'highlight': menuItem.highlight}">{{ menuItem.text }}</a>
                    </li> -->
                </ul>
              </div>
            </li>
            <li>
              <a href="" class="sk-bold">Cây cảnh</a>
              <div class="uk-navbar-dropdown uk-width-large" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-center; delay-hide: 1200">
                <ul class="uk-nav uk-dropdown-nav sk-product-sub-categories uk-column-1-2">
                  <!-- <li *ngFor="let menuItem of menu.cayCanh">
                      <a href="" [ngClass]="{'highlight': menuItem.highlight}">{{ menuItem.text }}</a>
                    </li> -->
                </ul>
              </div>
            </li>
            <li>
              <a href="" class="sk-bold">Cây ăn trái</a>
              <div class="uk-navbar-dropdown uk-width-large" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-center">
                <div class="uk-dropdown-grid uk-child-width-1-2@m" uk-grid>
                  <div>
                    <ul class="uk-nav uk-dropdown-nav sk-product-sub-categories">
                      <li class="uk-nav-header">
                        <a href="">Nhiệt đới</a>
                      </li>
                      <li class="uk-nav-divider"></li>
                      <!-- <li *ngFor="let menuItem of menu.cayAnTrai.nhietDoi">
                          <a href="" [ngClass]="{'highlight': menuItem.highlight}">{{ menuItem.text }}</a>
                        </li> -->
                    </ul>
                  </div>
                  <div>
                    <ul class="uk-nav uk-dropdown-nav sk-product-sub-categories">
                      <li class="uk-nav-header">
                        <a href="">Ôn đới</a>
                      </li>
                      <li class="uk-nav-divider"></li>
                      <!-- <li *ngFor="let menuItem of menu.cayAnTrai.onDoi">
                          <a href="" >{{ menuItem.text }}</a>
                        </li> -->
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
  
      </nav>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.uk-container {
  background-color: #fff;
}

.sk-navbar-container {
  nav {
    background-color: #fff;
  }
}

.uk-sticky.uk-sticky-fixed.uk-active {
  box-shadow: 0 5px 15px rgba(0, 0, 0, .08);
}

.uk-search-navbar {
  width: inherit;
  .uk-search-icon:not(.uk-search-icon-flip)+.uk-search-input {
    padding-left: 60px;
  }
}

.sk-bold {
  font-weight: 500;
}

.highlight {
  color: #EB9A99;
  &:hover {
    color: #E87970;
  }
}

.sk-product-sub-categories {
  li a {
    text-transform: uppercase;
    font-size: 12px;
  }
}

.uk-nav-header {
  cursor: pointer;
  a {
    color: inherit;
    padding: 0;
    margin: 0;
    font-size: inherit;
  }
}

.uk-navbar-nav>li>a {

  color: #8DC15B;
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
</style>
