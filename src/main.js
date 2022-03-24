import Vue from 'vue'
import App from './App.vue'
// import VueSpeech from 'vue-speech'
import VueWebSpeech from 'vue-web-speech'


Vue.use(VueWebSpeech)
 
// Vue.use(VueSpeech)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
