import Vue from 'vue'
import Router from 'vue-router'

const routes = [
    {
        path: '/hello2',
        component: () => import('./components/Hello.vue')
    },
    {
        path: '/word2',
        component: () => import('./components/Word.vue')
    },
]

Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: '/app2',
    routes: routes,
});