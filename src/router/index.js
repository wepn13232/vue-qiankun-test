import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Page1 from "@/views/page/page1.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        children:[

        ]
    },
    {
        path: '/about/page1',
        name:"page1",
        component: Page1
    },
];

const router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? "/vue-test" : process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    console.log("子应用的history", history);
    history.pushState({
        back: from.fullPath,
        current: to.fullPath,
        replaced: false
    }, null,"/vue-test"+to.fullPath);
    next()
});


export default router;
