require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue'
import App from '@/assets/js/App.vue'
import Router from '../router'
import 'bootstrap/dist/css/bootstrap.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css' ;
// library.add(faUserSecret)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = new Vue({
    icons: {
        iconfont: 'fa'
    },
    el: '#app',
    router: Router,
    render: h => h(App)
});

export default app;