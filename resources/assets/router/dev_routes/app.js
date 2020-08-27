
export default{
    routes: [
        {
            path: '/',
            name: 'home',
            component: resolve => require(['@/assets/js/views/Home'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/hello',
            name: 'hello',
            component: resolve => require(['@/assets/js/views/Hello'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/header',
            name: 'header',
            component: resolve => require(['@/assets/js/views/Header'], resolve),
            meta: {
                tokenRequired: false
            }
        },
    ],
}