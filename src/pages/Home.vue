<template>
    <!-- Loader -->
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-danger" role="status"></div>
      <p class="mt-2">Fetching Pokémon...</p>
    </div>
  
    <!-- Pokémon Grid -->
    <div v-else class="container mt-4">
      <input v-model="query" class="form-control mb-4" placeholder="Search Pokémon..." />
      <div class="container-xl mx-auto">
      <div class="card-grid">
        <PokemonCard
          v-for="pokemon in filtered"
          :key="pokemon.name"
          :pokemon="pokemon"
          class="col-md-3 mb-4"
        />
      </div>
    </div>
</div>
</template>
  
  
  <script setup>
  import { onMounted, ref, computed } from 'vue'
  import { usePokemonStore } from '../store/pokemonStore'
  import PokemonCard from '../components/PokemonCard.vue'
  
  const store = usePokemonStore()
  const query = ref('')

  const loading = computed(() => store.loading)
  
  onMounted(() => {
    store.fetchPokemonList()
  })
  
  const filtered = computed(() =>
    store.list.filter(p => p.name.toLowerCase().includes(query.value.toLowerCase()))
  )
  </script>
  <style scoped> 
    .card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  justify-items: center; /* Centers items in each column */
  align-items: start;
  padding: 0 1rem;
}

.card-grid > * {
  max-width: 250px;
  width: 100%;
}

.container-xl {
  max-width: 1200px;
}
    </style>