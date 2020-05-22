import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import NProgress from 'nprogress'
import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// import style
import 'swiper/css/swiper.css'
 
import 'nprogress/nprogress.css'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css';
import './assets/index.css';

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(ElementUI);
// Vue.use(NProgress);
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.path == '/about/1') {
//       sessionStorage.removeItem('username');
//     }
//   let user = sessionStorage.getItem('username');
//   if (!user && to.path != '/about/1') {
//       next({path: '/about/1'})
//     } else {
//       NProgress.start();
//       next()
//     }
//   });
  
//   router.afterEach(transition => {
//     NProgress.done();
//   });
// NProgress.inc(1) 
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
