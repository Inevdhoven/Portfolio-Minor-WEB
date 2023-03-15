// import { createApp } from 'vue'
// import About from '../components/About.vue'
// import MyWork from '../components/my-work.vue'

// function onRouteChanged(data : any) {
//     const hash = window.location.hash;
//     const routerView = document.querySelector('body > main > section');
//     console.log(hash)

//     if (!(routerView instanceof HTMLElement)) {
//         console.log(Error)
//         throw new ReferenceError("No router view element available for rendering");
//     }

//     switch(hash) {
//         case "":
//             console.log("home")
//             break;
//         case "#about":
//             createApp(About).mount('body > main > section')
//             break;
//         case "#my-work":
//             createApp(MyWork).mount('body > main > section')
//             break;
//         default:
//             routerView.innerHTML = `<h1>404</h1>`;
//             break;
//     } 
// }

// window.addEventListener("hashchange", onRouteChanged);

// export default {
//     onRouteChanged
// }


import {createRouter, createWebHistory} from 'vue-router'
import About from '../components/About.vue'
import MyWork from '../components/my-work.vue'
import Home from '../components/Home.vue'

const routes = [
    {
        path: '/', 
        name: 'Home',
        component: Home
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
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
