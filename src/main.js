import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Firebase.initializeApp(firebaseConfig);
import Firebase from "firebase"
import { firebaseConfig } from "../firebase-Config";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
