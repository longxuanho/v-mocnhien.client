<template>
  <div id="app">
    <mn-header></mn-header>
    <mn-menubar></mn-menubar>

    <router-view></router-view>

    <mn-footer></mn-footer>
  </div>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Menubar from './components/shared/Menubar';

export default {
  name: 'app',
  components: {
    mnHeader: Header,
    mnFooter: Footer,
    mnMenubar: Menubar
  }
}
</script>

<style lang="scss">

@import './assets/scss/uikit';
@import './assets/scss/semantic-ui';
@import './assets/scss/spinkit';
@import './assets/scss/pagination';
@import './assets/scss/global';

</style>
