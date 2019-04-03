import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/canvas.html/',
            name: 'imgScope',
            component: r => require.ensure([], () => r (require('@/pages/canvas/views/imgScope.vue')))
        }
    ]
})
