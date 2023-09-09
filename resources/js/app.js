require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'


//routes imported
import {routes} from './routes';
Vue.use(VueRouter);

const router = new VueRouter({routes,mode: 'history'});

new Vue({
    el: '#app',
    router
});
