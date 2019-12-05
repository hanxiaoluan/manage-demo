import Vue from "vue";
import VueRouter from "vue-router";
import layout from '@/layout/index';

Vue.use(VueRouter);

export const constantRoutes = [{
    name: '404',
    path: '/404',
    hidden: true,
    component: () => import('@/views/ErrorPage/404')
  },
  {
    name: '401',
    path: '/401',
    hidden: true,
    component: () => import('@/views/ErrorPage/401')
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/index')
  },
  {
    name: 'dashboard',
    path: '/',
    redirect: '/dashboard',
    component: layout,
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard'),
      meta: {
        title: 'dashboard'
      }
    }]
  },
  {
    path: '/guide',
    name: 'guide',
    redirect: '/guide/index',
    component: layout,
    children: [{
      path: 'index',
      name: 'guide',
      component: () => import('@/views/guide/index'),
      meta: {
        title: 'guide'
      }
    }]
  },
  {
    path: '/permission',
    component: layout,
    alwaysShow: true,
    redirect: '/permission/page',
    meta: {
      title: 'permission'
    },
    children: [{
        path: 'page',
        component: () => import('@/views/permission/page'),
        meta: {
          title: 'permission page'
        },
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        meta: {
          title: 'permission directive'
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        meta: {
          title: 'permission role'
        }
      }
    ]
  },
  {
    path: '/icons',
    name: 'icons',
    redirect: '/icons/index',
    component: layout,
    children: [{
      path: 'index',
      meta: {
        title: 'icons'
      },
      component: () => import('@/views/icons/index')
    }]
  },
  {
    path: '/components',
    name: 'components',
    component: layout,
    redirect: '/components/tinymce',
    meta: {
      title: 'components'
    },
    children: [{
        path: 'tinymce',
        component: ()=>import('@/views/components/Tinymce'),
        meta: {
          title: 'components tinymce'
        }
      },
      {
        path: 'markdown',
        component: ()=>import('@/views/components/Markdown'),
        meta: {
          title: 'componenets markdown'
        }
      },
      {
        path: 'dropzone',
        component: ()=>import('@/views/components/Dropzone'),
        meta: {
          title: 'components dropzone'
        }
      },
      {
        path: 'jsoneditor',
        component: ()=>import('@/views/components/JsonEditor'),
        meta: {
          title: 'components jsoneditor'
        }
      },
      {
        path: 'splitpane',
        component: ()=>import('@/views/components/SplitPane'),
        meta: {
          title: 'components splitpane'
        }
      },
      {
        path: 'upload',
        component: import('@/views/components/Upload'),
        meta: {
          title: 'components upload'
        }
      },
    ]
  },
  {
    path: '/charts',
    name: 'charts',
    component: layout,
    redirect: '/charts/keyboardchart',
    meta: {
      title: 'charts'
    },
    children: [{
        path: 'keyboardchart',
        component: () => import('@/views/charts/keyboardChart'),
        meta: {
          title: "keyboardchart"
        }
      },
      {
        path: 'linechart',
        component: () => import('@/views/charts/LineChart'),
        meta: {
          title: 'linechart'
        }
      },
      {
        path: 'mixchart',
        component: () => import('@/views/charts/MixChart'),
        meta: {
          title: 'mixchart'
        }
      }
    ]
  },
  {
    path: '/nestedroutes',
    name: 'nestedroutes',
    component: layout,
    redirect: '/nestedroutes/menu1',
    meta: {
      title: 'nestedroutes'
    },
    children: [{
        path: 'menu1',
        component: () => import('@/views/nestedRoutes/menu1/menu1'),
        meta: {
          title: 'menu1'
        },
        children: [{
            path: '/menu1/menu1-1',
            component: () => import('@/views/nestedRoutes/menu1/menu1-1.vue'),
            meta: {
              title: 'menu1-1'
            }
          },
          {
            path: '/menu1/menu1-2',
            component: () => import('@/views/nestedRoutes/menu1/menu1-2'),
            meta: {
              title: 'menu1-2'
            },
            children: [{
                path: '/menu1/menu1-2-1',
                component: () => import('@/views/nestedRoutes/menu1/menu1-2-1'),
                meta: {
                  title: 'menu1-2-1'
                }
              },
              {
                path: '/menu1/menu1-2-2',
                component: () => import('@/views/nestedRoutes/menu1/menu1-2-2'),
                meta: {
                  title: 'menu1-2-2'
                }
              }
            ]
          },
          {
            path: '/menu1/menu1-3',
            component: () => import('@/views/nestedRoutes/menu1/menu1-3.vue'),
            meta: {
              title:'menu1-3'
            }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nestedRoutes/menu2/menu2'),
        meta: {
          title: 'menu2'
        }
      }
    ]
  }
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