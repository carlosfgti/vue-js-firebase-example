import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Bem vindo ao projeto!'
        }
    },
    {
        path: '/login',
        name: 'auth.login',
        component: () => import('@/views/Auth/Login'),
        meta: {
            title: 'Login'
        }
    },
    {
        path: '/cadastrar',
        name: 'auth.register',
        component: () => import('@/views/Auth/Register'),
        meta: {
            title: 'Cadastrar-se'
        }
    },
    {
        path: '/chat',
        name: 'chat',
        component: () => import('@/views/Chat/Home'),
        meta: {
            auth: true,
            title: 'Chat'
        }
    }
]

export default routes
