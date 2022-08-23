import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/HomePage.vue'
import NProgress from 'nprogress'
import PatientLists from '../views/PatientLists.vue'

const routes = [{
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/home',
        name: 'PatientLists',
        component: PatientLists,
        props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach(() => {
    NProgress.start()
})

router.afterEach(() => {
    NProgress.done()
})
export default router;