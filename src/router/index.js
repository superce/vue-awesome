import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/pages/Pos'
import Shop from '@/components/pages/Shop'
import Commodity from '@/components/pages/Commodity'
import Vip from '@/components/pages/Vip'
import Statistics from '@/components/pages/Statistics'
import Setting from '@/components/pages/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/commodity',
      name: 'Commodity',
      component: Commodity
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }
  ]
})
