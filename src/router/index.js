import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '../pages/Home.vue'
import PokemonDetail from '../pages/PokemonDetail.vue'
import axios from 'axios'


const router = createRouter({
  history: createWebHistory('/pokemon-explorer/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router

const routes = [
  { path: '/', component: Home },
  { path: '/pokemon/:name', component: PokemonDetail }
]