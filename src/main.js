// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import { store } from './store/store';

import UIkit from 'uikit/dist/js/uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Toastr from 'toastr';

Object.defineProperty(Vue.prototype, '$UIkit', { value: UIkit });
Object.defineProperty(Vue.prototype, '$toastr', { value: Toastr });


Vue.use(VueResource);
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted: function () {
    UIkit.use(Icons);
  },
  store: store
});

Vue.config.productionTip = false




