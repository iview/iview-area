import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import iviewArea from 'iview-area';
Vue.use(iView);
Vue.use(iviewArea);

new Vue({
  el: '#app',
  render: h => h(App)
})
