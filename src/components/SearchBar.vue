<template>
  <div class="container my-4">
    <!-- Search input field  -->
    <input
      type="text"
      class="form-control mb-3"
      placeholder="Search Pokémon"
      v-model="searchQuery"
    />

    <!-- Pokémon filtered by search -->
    <div class="row">
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
import { onMounted, ref, computed } from 'vue'
import { usePokemonStore } from '../store/pokemonStore'
import PokemonCard from '../components/PokemonCard.vue'

const searchQuery = ref('') // Holds user input from search bar

const store = usePokemonStore()

const loading = computed(() => store.loading)

onMounted(() => {
  store.fetchPokemonList()
})

const filteredList = computed(() => {
  return store.list.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>