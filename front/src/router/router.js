import {createRouter, createWebHistory} from 'vue-router'

// import pages
import CreateUser from "../views/users/CreateUser.vue";
import ListUser from "../views/users/ListUser.vue";
import UpdateUser from "../views/users/UpdateUser.vue";
import ReadUser from "../views/users/ReadUser.vue";
import LoginAuth from '../views/authentication/LoginAuth.vue'
import Home from '../views/HomePage.vue'

window.logout = function(){
    console.log('function logout run');
    let headers = {
        "Access-Control-Allow-Origin": "*",
        // "Content-Type": "application/json",
        'Accept': 'application/json',
        'Authorization':`Bearer ${window.token}`
    }

    let url = 'users/logout';
    let body = this.data;
    window.axios.post(url, body,{headers:headers})
        .then((result) => {
            console.log('result:\t',result)
            window.token = null;
        })
        .catch((error) => {
            console.log('error:\t',error)
        });
}
const router = createRouter({
    history: createWebHistory(/*import.meta.env.BASE_URL*/),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/login', name: 'login', component: LoginAuth},
        {path: '/logout', name: 'logout',beforeEnter:()=>{window.logout()}},
        {path: '/users/create', name: 'user-create', component: CreateUser},
        {path: '/users', name: 'users-list', component: ListUser},
        {path: '/users/show', name: 'user-show', component: ReadUser},
        {path: '/users/edit', name: 'user-edit', component: UpdateUser},
    ]
})

export default router
