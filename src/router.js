import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Chat from './views/Messages.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/message',
      name: 'Messages',
      component: Chat,
      props: true
  ]
})