import { createRouter, createWebHistory , createWebHashHistory} from 'vue-router'

import MainLayout from './layouts/MainLayout.vue';

import config from '@/helpers/config';
const baseUrl = config.baseUrl;

// Vue router
const routes = new createRouter({
  history: createWebHistory(),
  routes: [
   {
      path: baseUrl,
      component: MainLayout,
      children: [
        {
          path: '/',
          alias: '',
          name: 'main', 
          component: () => import('./pages/index/Index.vue'),
        },
        {
          path: 'work/:type',
          name: 'work', 
          component: () => import('./pages/work/Index.vue'),
          props: true,
        },
      ]
    },
	],
  scrollBehavior: function(to, from, savedPosition) {
    // console.log(to, from)
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});
  
export default routes;