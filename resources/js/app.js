import Vue from 'vue' 
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueResource)
Vue.http.options.credentials = true;
Vue.http.interceptors.push(function(request) {
  request.headers.set('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
  request.headers.set('Accept', 'application/json');
  request.headers.set('Content-Type', 'application/json');
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
