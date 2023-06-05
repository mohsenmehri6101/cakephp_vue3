import {createRouter, createWebHistory} from 'vue-router'

// import pages
import CreateUser from "../views/users/CreateUser.vue";
import ListUser from "../views/users/ListUser.vue";
import UpdateUser from "../views/users/UpdateUser.vue";
import ReadUser from "../views/users/ReadUser.vue";
import LoginAuth from '../views/authentication/LoginAuth.vue'
import Home from '../views/HomePage.vue'

const router = createRouter({
    history: createWebHistory(/*import.meta.env.BASE_URL*/),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/login', name: 'login', component: LoginAuth},
        {path: '/logout', name: 'logout', component: ()=>{ console.log('logout')}},
        {path: '/users/create', name: 'user-create', component: CreateUser},
        {path: '/users', name: 'users-list', component: ListUser},
        {path: '/users/show', name: 'user-show', component: ReadUser},
        {path: '/users/edit', name: 'user-edit', component: UpdateUser},
    ]
})

export default router
