import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Views/Home.vue'
import Contacts from '../components/Views/Contacts.vue'
import Skills from '../components/Views/Skills.vue'
import Projects from '../components/Views/Projects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }
  ]
})