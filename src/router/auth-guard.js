import store from '@/store/index.js'

export default function (to, from, next) {
    if (store.getters.user) {
        return next()
    } else {
        return next('/login?loginError=true')
    }
}