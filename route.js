import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './src/store/store'
import login from './src/components/login/login'
import index from './src/components/index/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/index',
    component: index
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/index') {
    if (store.getters.token_getters !== 'null') {
      next()
    } else if (store.getters.token_getters === 'null') {
      next('/login')
    }
  } else {
    next()
  }
})

// 导出router对象
export default router
