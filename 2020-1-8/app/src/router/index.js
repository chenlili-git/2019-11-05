import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import { islogin } from '../api/api'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    redirect: '/cnthandle/list',
    component: Home,
    children: [
      {
        path: '/cnthandle/list',
        component: () => import('../views/customerlist.vue'),
      },
      {
        path: '/userhandle/pswlist',
        component: () => import('../views/pswlist.vue'),
      }
    ],
    meta: {
      islogin: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


//白名单
const litst = ['/'];
//路由拦截
router.beforeEach(async (to, from, next) => {
  //如果有直接不进行验证的路径，那么可以通过白名单的方式去设置
  if (litst.includes(to.fullPath)) return next();

  //每次进路由的时候判断一下用户是否登录
  const flg = await islogin();
  if (flg.code === 0) {
    if (to.fullPath === '/login') {
      next('/home');
    } else {
      next();
    }
  } else {
    if (to.matched.some(record => record.meta.islogin)) {
      next('/login');
    } else {
      next();
    }
  }
});

export default router
