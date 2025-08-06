<template>
  <div class="container my-4">
    <h1 class="mb-4">Pokémon Explorer</h1>

    <input type="text" class="form-control mb-3" placeholder="Search Pokémon"
           v-model="searchQuery" />

    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status"></div>
    </div>

    <div class="row">
      <div class="col-md-3 mb-4" v-for="pokemon in filteredList" :key="pokemon.name">
        <PokemonCard :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { usePokemonStore } from '../store/pokemonStore'
import PokemonCard from '../components/PokemonCard.vue'

const searchQuery = ref('')
const store = usePokemonStore()
const loading = computed(() => store.loading)

onMounted(() => {
  store.fetchPokemonList()
})

const filteredList = computed(() => {
  return store.list.filter(p =>
    p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>
