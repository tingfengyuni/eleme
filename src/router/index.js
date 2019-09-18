import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import search from '@/components/search.vue'
import city from '@/components/city.vue'
import Du from '@/components/Du.vue'
import wode from '@/components/wode.vue'
import grxxxq from '@/components/grxxxq.vue'
import dizhi from '@/components/dizhi.vue'
import dizhibianji from '@/components/dizhibianji.vue'
import disearch from '@/components/disearch.vue'
import xing  from '@/components/Xing'
import queren from '@/components/queren.vue'
import xq from '@/components/xq.vue'
import bb from '@/components/bb.vue'
import dingdan from '@/components/ddlb.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/Du',
      name: 'Du',
      component: Du
    },
    {
      path: '/wode',
      name: 'wode',
      component: wode
    },
    {
      path: '/grxxxq',
      name: 'grxxxq',
      component: grxxxq
    },
    {
      path: '/dizhi',
      name: 'dizhi',
      component: dizhi
    },
    {
      path: '/dizhibianji',
      name: 'dizhibianji',
      component: dizhibianji
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan
    },
    {
      path: '/disearch',
      name: 'disearch',
      component: disearch
    },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: cart
    // },
    {
      path: '/xing',
      name: 'xing',
      component: xing
    },
    {
      path: '/bb',
      name: 'bb',
      component: bb
    },
    {
      path: '/queren',
      name: 'queren',
      component: queren
    },
 
  ]
})
