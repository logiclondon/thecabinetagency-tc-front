import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

// Vue.use(VueLazyload);

Vue.use(VueLazyload, {
  preLoad: 1,
  // error: error,
  // loading: loading,
  attempt: 1
});
