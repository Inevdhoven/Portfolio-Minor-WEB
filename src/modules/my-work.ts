import api from './api.js'
const dataIne = api.requestUser('inevdhoven', '')

function displayWork() {
    console.log(dataIne)
}

export default {
    displayWork
}