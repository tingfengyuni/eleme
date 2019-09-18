import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import store from './store'

// import MeScroll from 'mescroll.js'
// import 'mescroll.js/mescroll.min.css'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(MintUI)
// Vue.use(MeScroll)
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.prototype.axios=axios
Vue.use(Vant);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
