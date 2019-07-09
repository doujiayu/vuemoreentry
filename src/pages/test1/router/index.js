import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import shoperInfo from '@/components/shoperInfo'
import shoperInfo from '@/pages/test1/views/shoperInfo.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/test1.html/',
            name: 'shoperInfo',
            component: shoperInfo
        },
        {
            path: '/test1.html/goods.html',
            name: 'shoperInfo',
            component: shoperInfo
        }
    ]
})
