import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import routes from './routes'
import TodoList from '../components/TodoList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...routes,
    {
      path: '/todolist',
      name: 'todo',
      component: TodoList
    },
  ]
})

export default router
