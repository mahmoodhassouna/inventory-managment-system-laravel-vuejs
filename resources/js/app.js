require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'


//routes imported
import {routes} from './routes';
Vue.use(VueRouter);


//Import User Class
import User from './Helpers/User';
window.User = User;


//sweet alert start
import Swal from 'sweetalert2';
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.Toast = Toast;

//sweet alert end

const router = new VueRouter({routes,mode: 'history'});

new Vue({
    el: '#app',
    router
});
