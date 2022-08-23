import { createRouter, createWebHistory } from 'vue-router'
import PatientLists from '../views/PatientLists.vue'
import PatientMenuLayout from '@/views/event/PatientMenuLayout.vue'
import NotFound from '@/views/NotFound.vue'
import NetWorkError from '@/views/NetworkError.vue'
import HomePage from '@/views/HomePage.vue'
import NProgress from 'nprogress'
import EventService from '@/services/EventService.js'
import GStore from '@/store'
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
    {
        path: '/patient/:id',
        name: 'PatientMenuLayout',
        props: true,
        component: PatientMenuLayout,
        beforeEnter: (to) => {
            return EventService.getPatient(to.params.id)
                .then((response) => {
                    GStore.patient = response.data
                    GStore.patient.comments = GStore.comments.filter((comment) => GStore.patient.id == comment.IDpatient)
                    console.log(GStore.patient.comments)
                })
                .catch((error) => {
                    if (error.response && error.response.status == 404) {
                        return {
                            name: '404Resource',
                            params: { resource: 'patient' }
                        }
                    } else {
                        return { name: 'NetworkError' }
                    }
                })
        },
        children: [{
            path: '',
            name: 'PatientDetails',
            component: PatientDetails
        }]
    },
    {
        path: '/404/:resource',
        name: '404Resource',
        component: NotFound,
        props: true
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/network-error',
        name: 'NetworkError',
        component: NetWorkError
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})
router.beforeEach(() => {
    NProgress.start()
})

router.afterEach(() => {
    NProgress.done()
})
export default router