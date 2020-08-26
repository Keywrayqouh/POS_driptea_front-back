import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/assets/js/views/Hello'
import Home from '@/assets/js/views/Home'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
    ],
});

export default router;