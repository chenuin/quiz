import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/quiz.scss'

import BaseButton from '@/components/BaseButton'
import BaseFormInput from '@/components/BaseFormInput'
Vue.component('b-button', BaseButton);
Vue.component('b-form-input', BaseFormInput);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
