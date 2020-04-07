import Vue from 'vue'
import App from './App.vue'
import './assets/style/style.css'
import router from './router'
import  "swiper/css/swiper.css"
import  "swiper/js/swiper.js"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
