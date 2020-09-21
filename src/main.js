import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from "@/routes";
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
  router:new VueRouter({
    routes:routes
  }),
  render: h => h(App),
}).$mount('#app')
