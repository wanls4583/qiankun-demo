import Vue from 'vue'
import Router from 'vue-router'

const routes = [
    {
        path: '/hello',
        component: () => import('./components/Hello.vue')
    },
    {
        path: '/word',
        component: () => import('./components/Word.vue')
    },
]

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
    routes: routes,
});