import {createRouter, createWebHistory} from 'vue-router'
import About from '../components/About.vue'
import MyWork from '../components/my-work.vue'
import Home from '../components/Home.vue'

const routes = [
    {
        path: '/', // default path
        name: 'Home', // optional, but useful for debugging and readability
        component: Home // the component to render
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/my-work',
        name: 'MyWork',
        component: MyWork
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // use HTML5 history API
    routes 
})

export default router
