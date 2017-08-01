<template>
  <div id="app">
    <mn-header></mn-header>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <mn-footer></mn-footer>
  </div>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

export default {
  name: 'app',
  components: {
    mnHeader: Header,
    mnFooter: Footer
  }
}
</script>

<style lang="scss">

@import './assets/scss/uikit';
@import './assets/scss/semantic-ui';

</style>
