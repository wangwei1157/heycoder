import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/common/home.vue'
import Index from '../views/pages/Index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: 'Index',
        component: Index,
      }
    ]
  },
  // {
  //   path: '/index',
  //   name: 'Index',
  //   component: Home,
  //   children:[
  //     {
  //       path: '/index',
  //       name: 'About1',
  //       component: About,
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
