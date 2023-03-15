import { createApp } from 'vue'
import './style.css'
import Header from './Header.vue'
import App from './App.vue'
import api from './modules/api.js'
import router from './modules/router.js'
// import myWork from './modules/my-work.js'

createApp(Header).mount('body > header')
createApp(App).mount('body > main')


api.displayData().then((result) => {
    router.onRouteChanged(result);
    // console.log(result)
});

api.displayMyWork().then((resultWork) => {
    router.onRouteChanged(resultWork);
    // console.log(resultWork)
});
