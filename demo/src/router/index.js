import Vue from "vue";
import VueRouter from "vue-router";
import layout from '@/layout/index';

Vue.use(VueRouter);

export const constantRoutes = [
  {
    name: '404',
    path: '/404',
    hidden: true,
    component: () => import('@/views/ErrorPage/404')
  },
  {
    name: '401',
    path: '/401',
    hidden: true,
    component:()=>import('@/views/ErrorPage/401')
  },
  {
    name: 'dashboard',
    path: '/',
    component: layout,
    children: [
      
    ]
  },
  {
    path: '/guide',
    name: 'guide',
    component: layout,
    
  }
  /* {
    path: '*',
    redirect: '/404'
  } */
];

const createRouter = () => new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
});
const router = new createRouter();


export default router;