import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/home/Gmap'
import Signup from '@/components/auth/Signup'
import Login from "../components/auth/Login"
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'GMap',
            component: GMap,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(rec => rec.meta.requiresAuth)) {
        let user = firebase.auth().currentUser
        if (user) {
            next()
        } else {
            next({name: 'Login'})
        }
    } else {
        next()
    }
})

export default router