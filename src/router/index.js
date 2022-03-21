import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: { authRequired: true }
    },
    {
        path: '/registrar',
        name: 'Registrar',

        component: () =>
            import ('../views/Registrar.vue')
    },
    {
        path: '/ingresar',
        name: 'Ingresar',

        component: () =>
            import ('../views/Ingresar.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

import { getAuth } from "firebase/auth";


router.beforeEach((to, from, next) => {
    const { currentUser } = getAuth()
    const { meta: { authRequired } } = to

    if (currentUser && authRequired) next()
    else if (!currentUser && authRequired) next("/ingresar")
    else if (currentUser && !authRequired) next("/")
    else next()
})

export default router