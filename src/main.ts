import { createApp } from 'vue'
import './style.css'
import Header from './Header.vue'
import App from './App.vue'
import router from './modules/router.js'

createApp(Header).use(router).mount('body > header')
createApp(App).use(router).mount('body > main')

const menuButton = document.querySelector('nav button');
const menu = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});