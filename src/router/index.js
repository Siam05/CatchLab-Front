import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/index.vue";
import Portfolio from "../pages/portfolio/index.vue";
import PortfolioByCategory from "../pages/portfolio/portfolioByCategory/[id].vue"

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