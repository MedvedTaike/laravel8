import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('./views/Main.vue')
    },
    {
      path: '/links-list',
      name: 'links-list',
      component: () => import('./views/LinksList.vue')
    },
    {
      path: '/stats/:link_id',
      name: 'stats',
      component: () => import('./views/Statistic.vue')
    },
    {
      path: '/ip-stats/:address',
      name: 'ip-stats',
      component: () => import('./views/IpStatistic.vue')
    },
    {
      path: '/browser-stats/:browser',
      name: 'browser-stats',
      component: () => import('./views/BrowserStatistic.vue')
    },
    
  ]
})