import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import MainHome from '../views/Home.vue'
import AppCustomers from '../views/Customers.vue'
import AppCustomersCreate from '../views/CustomersCreate.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const routes = [
    { path: '/', component: MainHome },
    { path: '/customers', component: AppCustomers },
    { path: '/customers/create', component: AppCustomersCreate },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);

app.use(router);

app.mount('#app');

export default router;
