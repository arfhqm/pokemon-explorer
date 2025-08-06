import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '../pages/Home.vue'
import PokemonDetail from '../pages/PokemonDetail.vue'
import axios from 'axios'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

// export default router

const routes = [
  { path: '/', component: Home },
  { path: '/pokemon/:name', component: PokemonDetail }
]

export default createRouter({
  history: createWebHistory(),
  routes
})