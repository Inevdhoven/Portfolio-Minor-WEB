import { createApp } from 'vue'
import About from '../components/About.vue'
import MyWork from '../components/my-work.vue'

function onRouteChanged(data : any) {
    const hash = window.location.hash;
    const routerView = document.querySelector('body > main > section');
    console.log(hash)

    if (!(routerView instanceof HTMLElement)) {
        console.log(Error)
        throw new ReferenceError("No router view element available for rendering");
    }

    switch(hash) {
        case "":
            console.log("home")
            break;
        case "#about":
            createApp(About).mount('body > main > section')
            break;
        case "#my-work":
            createApp(MyWork).mount('body > main > section')
            break;
        default:
            routerView.innerHTML = `<h1>404</h1>`;
            break;
    } 
}

window.addEventListener("hashchange", onRouteChanged);

export default {
    onRouteChanged
}