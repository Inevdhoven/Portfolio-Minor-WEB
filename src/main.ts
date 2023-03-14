import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import api from './modules/api.js'
import router from './modules/router.js'
import myWork from './modules/my-work.js'

createApp(App).mount('#app')


api.dataDisplay().then((result) => {
    // onRouteChanged(result);
    console.log(result)
}); 
myWork.displayWork()