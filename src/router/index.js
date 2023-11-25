import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/index')

const Home = () => import('@/components/Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: 'home',
        component: Home,
        meta: { title: '首页' }
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
