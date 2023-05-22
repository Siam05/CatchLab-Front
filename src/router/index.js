import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/index.vue";
import Portfolio from "../pages/portfolio/index.vue";
import PortfolioByCategory from "../pages/portfolio/portfolioByCategory/[id].vue";
import Career from "../pages/career/index.vue";
import JobDetails from "../pages/career/jobDetails/[id].vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
        meta: {
            isAllActive: true
        }
    },

    {
        path: '/portfolio/:id',
        name: 'PortfolioByCategory',
        component: PortfolioByCategory,
        meta: {
            isCategoryActive: true
        }
    },

    {
        path: '/career',
        name: 'Career',
        component: Career
    },

    {
        path: '/career/job-details/:id',
        name: 'JobDetails',
        component: JobDetails
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return desired position
        if (savedPosition) return savedPosition;
        else return { top: 0 };
    }
}) 

export default router