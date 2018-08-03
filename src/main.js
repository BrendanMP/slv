// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ContenfulClient from 'contentful-vue'
import VueMoment from 'vue-moment'
import vueSmoothScroll from 'vue-smoothscroll'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(ContenfulClient, {
  space: 'c7t1v47u1eqg',
  accessToken: 'f2c0fd3b6e0d132b66090f638ad20d5cb28158763ba2ac61e571e9797fa67220'
})

Vue.use(vueSmoothScroll)
Vue.use(VueMoment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
