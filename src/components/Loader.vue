<template>
  <div class="container my-4">
    <h1 class="mb-4">Pokémon Explorer</h1>

    <!-- Search input -->
    <input
      type="text"
      class="form-control mb-3"
      placeholder="Search Pokémon"
      v-model="searchQuery"
    />

    <!-- Loading Spinner -->
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-2">Loading Pokémon...</p>
    </div>

    <!-- Pokémon Cards -->
    <div v-else class="row">
      <div
        class="col-md-3 mb-4"
        v-for="pokemon in filteredList"
        :key="pokemon.name"
      >
        <PokemonCard :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

import { usePokemonStore } from '../store/pokemonStore'

import PokemonCard from './PokemonCard.vue'

const searchQuery = ref('')

// Access the Pokémon store
const store = usePokemonStore()

const loading = computed(() => store.loading)

const filteredList = computed(() => {
  return store.list.filter(p =>
    p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

/**
 * Fetches the Pokémon list when the component is mounted
 */
onMounted(() => {
  store.fetchPokemonList()
})
</script>