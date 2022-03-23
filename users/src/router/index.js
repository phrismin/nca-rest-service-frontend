import { createRouter, createWebHistory } from 'vue-router'
import UsersList from '../components/Users.vue'
import UserPage from '../components/UserPage.vue'

const routes = [
  {
    path: '/',
    name: 'users',
    component: UsersList
  },
  {
    path: '/users/:userId',
    name: 'userPage',
    component: UserPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router