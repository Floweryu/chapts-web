import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/index')

const Home = () => import('@/components/Home')
const Login = () => import('@/components/Login')
const Chat = () => import('@/components/Chat')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    meta: { title: '登录' }
  },
  {
    path: '/',
    component: Index,
    children: [
      {
        path: 'home',
        component: Home,
        meta: { title: '首页' }
      },
      {
        path: 'chat',
        component: Chat,
        meta: { title: '聊天' }
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
