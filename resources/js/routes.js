let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let forget = require('./components/auth/forget.vue').default;
let logout = require('./components/auth/logout.vue').default;

//home page
let home = require('./components/home.vue').default;

//employees
let formEmployee = require('./components/employees/form.vue').default;
let indexEmployees = require('./components/employees/index.vue').default;

export const routes = [
    //auth
    { path: '/', component:login ,name:'/'},
    { path: '/register', component:register, name:'register' },
    { path: '/forget', component:forget, name:'forget' },
    { path: '/logout', component:logout, name:'logout' },

    //home page
    { path: '/home', component:home, name:'home' },

    //employees
    { path: '/form-employee', component:formEmployee, name:'form-employee' },
    { path: '/employees', component:indexEmployees, name:'employees' },
];
