import { createRouter, createWebHistory } from 'vue-router'
import PokemonDetail from '../pages/PokemonDetail.vue'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
