// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';

import UIkit from 'uikit/dist/js/uikit';
import Icons from 'uikit/dist/js/uikit-icons';

Object.defineProperty(Vue.prototype, '$UIkit', { value: UIkit });

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted: function () {
    UIkit.use(Icons);
  }
});

Vue.config.productionTip = false




