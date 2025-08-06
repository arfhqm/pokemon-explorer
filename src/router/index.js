import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonDetail from '../pages/PokemonDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/pokemon/:name',
    name: 'PokemonDetail',
    component: PokemonDetail
  }
]

const router = createRouter({
  history: createWebHistory('/pokemon-explorer/'),
  routes
})

export default router
