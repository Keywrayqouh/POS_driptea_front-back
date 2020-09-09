
export default {
    routes: [
        {
            path: '/',
            name: 'home',
            component: resolve => require(['@/assets/js/basic/Home'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/register',
            name: 'register',
            component: resolve => require(['@/assets/js/basic/Register'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/header',
            name: 'header',
            component: resolve => require(['@/assets/js/basic/Header'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/userDashboard',
            name: 'userDashboard',
            component: resolve => require(['@/assets/js/modules/dashboard/userDashboard'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: resolve => require(['@/assets/js/modules/profile/profile'], resolve),
            meta: {
                tokenRequired: true
            }
        },
        {
            path: '/addProduct',
            name: 'addProduct',
            component: resolve => require(['@/assets/js/modules/product/addProduct'], resolve),
            meta: {
                tokenRequired: false
            }
        },
    ],
}