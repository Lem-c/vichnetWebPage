import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue')
    },
    {
        path: '/',
        name: 'appHeader',
        component: () => import('../components/appHeader.vue')
    },
    {
        path: '/',
        name: 'appFooter',
        component: () => import('../components/appFooter.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
