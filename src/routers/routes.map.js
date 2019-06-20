import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'auth.login',
        component: () => import('@/views/Auth/Login')
    },
    {
        path: '/register',
        name: 'auth.register',
        component: () => import('@/views/Auth/Register')
    },
    {
        path: '/chat',
        name: 'chat',
        component: () => import('@/views/Chat/Home')
    }
]

export default routes
