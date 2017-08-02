<template>
  <div class="mn-navbar-container" uk-sticky>
    <div class="uk-container uk-container-expand">
      <nav class="uk-navbar-container uk-margin" uk-navbar>
  
        <div class="uk-navbar-left">
          <div class="uk-navbar-item">
            <div class="uk-search uk-search-navbar">
              <span uk-search-icon></span>
              <input class="uk-search-input" :value="searchText" type="search" placeholder="Tìm sản phẩm..." spellcheck=false @input="search">
            </div>
          </div>
        </div>
  
        <div class="uk-navbar-right">
  
          <!--Hidden on small devices-->
          <ul class="uk-navbar-nav" v-if="menu && (clientWidth >= 960)">
            <li>
              <a href="" class="mn-bold">Thảo dược</a>
              <div class="uk-navbar-dropdown uk-width-large" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-center">
                <div class="uk-dropdown-grid uk-child-width-1-2@m" uk-grid>
                  <div>
                    <ul class="uk-nav uk-dropdown-nav mn-product-sub-categories">
                      <li class="uk-nav-header">
                        <a href="">Nhập ngoại</a>
                      </li>
                      <li class="uk-nav-divider"></li>
                      <li v-for="menuItem in menu.thaoDuoc.nhapNgoai" :key="menuItem.text">
                        <a href="" :class="{ highlight: menuItem.highlight }">{{ menuItem.text }}</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="uk-nav uk-dropdown-nav mn-product-sub-categories">
                      <li class="uk-nav-header">
                        <a href="">Trong nước</a>
                      </li>
                      <li class="uk-nav-divider"></li>
                      <li v-for="menuItem in menu.thaoDuoc.trongNuoc" :key="menuItem.text">
                        <a href="" :class="{ highlight: menuItem.highlight }">{{ menuItem.text }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="" class="mn-bold">Giống hoa</a>
              <div class="uk-navbar-dropdown uk-width-large" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-center">
                <ul class="uk-nav uk-dropdown-nav mn-product-sub-categories uk-column-1-2@s uk-column-1-3@m">
                  <li v-for="menuItem in menu.giongHoa" :key="menuItem.text">
                    <a href="" :class="{ highlight: menuItem.highlight }">{{ menuItem.text }}</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="" class="mn-bold">Cây cảnh</a>
              <div class="uk-navbar-dropdown uk-width-large" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-center; delay-hide: 1200">
                <ul class="uk-nav uk-dropdown-nav mn-product-sub-categories uk-column-1-2">
                  <li v-for="menuItem in menu.cayCanh" :key="menuItem.text">
                    <a href="" :class="{ highlight: menuItem.highlight }">{{ menuItem.text }}</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="" class="mn-bold">Cây ăn trái</a>
              <div class="uk-navbar-dropdown uk-width-large" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-center">
                <div class="uk-dropdown-grid uk-child-width-1-2@m" uk-grid>
                  <div>
                    <ul class="uk-nav uk-dropdown-nav mn-product-sub-categories">
                      <li class="uk-nav-header">
                        <a href="">Nhiệt đới</a>
                      </li>
                      <li class="uk-nav-divider"></li>
                      <li v-for="menuItem in menu.cayAnTrai.nhietDoi" :key="menuItem.text">
                        <a href="" :class="{ highlight: menuItem.highlight }">{{ menuItem.text }}</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul class="uk-nav uk-dropdown-nav mn-product-sub-categories">
                      <li class="uk-nav-header">
                        <a href="">Ôn đới</a>
                      </li>
                      <li class="uk-nav-divider"></li>
                      <li v-for="menuItem in menu.cayAnTrai.onDoi" :key="menuItem.text">
                        <a href="" :class="{ highlight: menuItem.highlight }">{{ menuItem.text }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
  
          <!--Show on small devices-->
          <div class="uk-offcanvas-content" v-if="menu && (clientWidth < 960)">
  
            <span uk-toggle="target: #product-menu-mobile" style="cursor: pointer; padding: 0 15px;" class="uk-navbar-toggle">
              <span uk-navbar-toggle-icon></span>
              <span class="uk-margin-small-left uk-text-uppercase uk-text-muted uk-text-middle" style="font-size: .875rem;" v-if="clientWidth > 545">Danh mục</span>
            </span>
  
            <div id="product-menu-mobile" uk-offcanvas>
              <div class="uk-offcanvas-bar">
  
                <button class="uk-offcanvas-close" type="button" uk-close></button>
  
                <h3>Mộc Nhiên Farm</h3>
  
                <ul class="uk-nav-default uk-nav-parent-icon" uk-nav="multiple: true" v-if="menu">
                  <li class="uk-parent">
                    <a>Thảo dược</a>
                    <ul class="uk-nav-sub">
                      <li>
                        <a>Nhập ngoại</a>
                        <ul>
                          <li v-for="menuItem in menu.thaoDuoc.nhapNgoai" :key="menuItem.text">
                            <a :class="{'highlight': menuItem.highlight}">{{ menuItem.text }}</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>Trong nước</a>
                        <ul>
                          <li v-for="menuItem in menu.thaoDuoc.trongNuoc" :key="menuItem.text">
                            <a :class="{'highlight': menuItem.highlight}">{{ menuItem.text }}</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="uk-parent">
                    <a>Giống hoa</a>
                    <ul class="uk-nav-sub">
                      <li v-for="menuItem in menu.giongHoa" :key="menuItem.text">
                        <a :class="{'highlight': menuItem.highlight}">{{ menuItem.text }}</a>
                      </li>
                    </ul>
                  </li>
                  <li class="uk-parent">
                    <a>Cây cảnh</a>
                    <ul class="uk-nav-sub">
                      <li v-for="menuItem in menu.cayCanh" :key="menuItem.text">
                        <a :class="{'highlight': menuItem.highlight}">{{ menuItem.text }}</a>
                      </li>
                    </ul>
                  </li>
                  <li class="uk-parent">
                    <a>Cây ăn trái</a>
                    <ul class="uk-nav-sub">
                      <li>
                        <a>Nhiệt đới</a>
                        <ul>
                          <li v-for="menuItem in menu.cayAnTrai.nhietDoi" :key="menuItem.text">
                            <a :class="{'highlight': menuItem.highlight}">{{ menuItem.text }}</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>Ôn đới</a>
                        <ul>
                          <li v-for="menuItem in menu.cayAnTrai.onDoi" :key="menuItem.text">
                            <a :class="{'highlight': menuItem.highlight}">{{ menuItem.text }}</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
  
                </ul>
  
                <hr/>
                <blockquote>
                  <p class="uk-text-muted uk-text-small uk-text-justify" style="margin-top: 2rem;">
                    Khởi đầu từ một khu ban công của chung cư quận 2 Sài gòn vào 07/2015, Mộc Nhiên Farm được sinh ra với mong muốn đưa thiên nhiên trở lại với mọi người, cho những mảng xanh len lỏi đến từng ngóc ngách của cuộc sống và xoa dịu đi những ngột ngạt trong tâm hồn.
                  </p>
                  <p class="uk-text-muted uk-text-small uk-text-justify">Hãy lắng nghe những mầm xanh thỏ thẻ, cảm nhận sự dịu ngọt của hương hoa và hòa mình vào thiên nhiên với các sản phẩm từ nông trại của chúng tôi!
                  </p>
                  <footer class="uk-text-muted uk-text-right">from Mộc Nhiên with
                    <span style="padding-left: .3rem;" uk-icon="icon: heart; ratio: 0.75"></span>
                  </footer>
                </blockquote>
  
              </div>
            </div>
  
          </div>
  
        </div>
  
      </nav>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      searchText: '',
      menu: this.initMenu(),
      menuResource: this.$resource(process.env.API_MENU),
      viCollator: new Intl.Collator('vi'),
      clientWidth: this.resolveClientWidth()
    }
  },
  watch: {
    '$route'(to, from) {
      this.searchText = to.query['s'] || '';
    }
  },
  methods: {

    search: _.debounce(function (event) {
      this.$router.push({ name: 'SanPhams', query: { s: event.target.value } })
    }, 800),

    initMenu() {
      return {
        thaoDuoc: {
          nhapNgoai: [],
          trongNuoc: []
        },
        giongHoa: [],
        cayCanh: [],
        cayAnTrai: {
          nhietDoi: [],
          onDoi: []
        }
      }
    },

    resolveMenu(rawMenu) {
      let resolvedMenu = this.initMenu();

      if (!rawMenu || !rawMenu.length) return;

      // Sort data by Vietnamese
      rawMenu = rawMenu.sort((a, b) => {
        return this.viCollator.compare(a.text, b.text);
      });

      rawMenu.forEach(item => {
        if (item.category === 'Thảo dược') {
          if (item.group === 'Nhập ngoại') resolvedMenu.thaoDuoc.nhapNgoai.push(item);
          if (item.group === 'Trong nước') resolvedMenu.thaoDuoc.trongNuoc.push(item);
        }
        if (item.category === 'Cây ăn trái') {
          if (item.group === 'Nhiệt đới') resolvedMenu.cayAnTrai.nhietDoi.push(item);
          if (item.group === 'Ôn đới') resolvedMenu.cayAnTrai.onDoi.push(item);
        }

        if (item.category === 'Giống hoa') resolvedMenu.giongHoa.push(item);
        if (item.category === 'Cây cảnh') resolvedMenu.cayCanh.push(item);
      });

      return resolvedMenu;
    },

    resolveClientWidth() {
      return document.documentElement.clientWidth || 0;
    }
  },

  created() {
    this.searchText = this.$route.query['s'] || '';

    window.onresize = _.debounce((event) => {
      this.clientWidth = this.resolveClientWidth();
    }, 1000);

    this.menuResource.get()
      .then(response => {
        this.menu = this.resolveMenu(response.body.menu);
      });
  }
}
</script>

<style lang="scss" scoped>
.uk-container {
  background-color: #fff;
}

.mn-navbar-container {
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

.mn-bold {
  font-weight: 500;
}

.highlight {
  color: #EB9A99;
  &:hover {
    color: #E87970;
  }
}

.mn-product-sub-categories {
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
