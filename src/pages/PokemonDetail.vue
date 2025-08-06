<template>
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-danger" role="status"></div>
      <p class="mt-2">Fetching details...</p>
    </div>
  
    <div v-if="pokemon" class="card-container my-5 mx-auto">
      <div class="pokemon-card">
        <div class="card-header d-flex justify-content-between align-items-center px-3 pt-3">
  <h2 class="text-capitalize mb-0 me-2" style="flex-shrink: 1;">{{ pokemon.name }}</h2>
</div>
  
<div class="text-center mt-3">
  <img
    :src="pokemon.sprites.other['official-artwork'].front_default"
    class="pokemon-img"
    alt="Pokemon artwork"
  />
</div>

  
        <div class="card-body px-4 mt-4">
          <h5 class="mb-2">Abilities</h5>
          <p>{{ pokemon.abilities.map(a => a.ability.name).join(', ') }}</p>
  
          <h5 class="mt-4">Base Stats</h5>
<div class="container-fluid px-0">
  <div class="row g-2 mb-3">
    <div
      v-for="stat in pokemon.stats"
      :key="stat.stat.name"
      class="col-4"
    >
      <div class="stat-box p-2 border rounded bg-light text-center">
        <div class="text-capitalize fw-bold">{{ stat.stat.name }}</div>
        <div>{{ stat.base_stat }}</div>
      </div>
    </div>
  </div>
</div>


  
          <h5 class="mb-2">General Info</h5>
          <p><strong>Height:</strong> {{ pokemon.height }}</p>
          <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
          <p><strong>Base Experience:</strong> {{ pokemon.base_experience }}</p>
  
          <div class="text-end mb-3">
            <button class="btn btn-warning" @click="editing = !editing">
              {{ editing ? 'Cancel Edit' : 'Edit Info' }}
            </button>
          </div>
  
          <form v-if="editing" @submit.prevent="saveChanges">
            <div class="mb-2">
              <label class="form-label">Height</label>
              <input type="number" v-model="form.height" class="form-control" />
            </div>
            <div class="mb-2">
              <label class="form-label">Weight</label>
              <input type="number" v-model="form.weight" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Base Experience</label>
              <input type="number" v-model="form.base_experience" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  </template>  
  
  <script setup>
  import { onMounted, watch, computed, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { usePokemonStore } from '../store/pokemonStore'
  
  const store = usePokemonStore()
  const route = useRoute()
  
  const name = computed(() => route.params.name)
  const loading = computed(() => store.loading)
  const pokemon = computed(() => store.selected)
  
  const editing = ref(false)
  const form = ref({})
  
  onMounted(() => {
    store.fetchPokemonDetail(name.value)
  })
  
  watch(name, () => {
    store.fetchPokemonDetail(name.value)
  })
  
  function saveChanges() {
    store.editPokemonDetail(form.value)
    editing.value = false
  }
  </script>
  
  
  <style scoped>
 .card-container {
  max-width: 450px;
  margin: 2rem auto;
  background-color: #fefefe;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}


  
  .pokemon-card {
    padding: 0;
  }
  
  .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e63946;
  color: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 0.75rem 1rem;
  flex-wrap: nowrap;
}


  .card-header h2 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
  
  .hp-badge {
    background-color: #f1fa8c;
    color: #222;
    padding: 4px 10px;
    font-weight: bold;
    border-radius: 20px;
    font-size: 0.9rem;
  }
  
  .pokemon-img {
    max-width: 80%;
    height: auto;
    border-radius: 8px;
  }
  
  .card-body h5 {
  color: #1d3557;
  text-align: left;
}

  
  .list-group-item {
    background-color: #f8f9fa;
  }

  .card-body ul,
.card-body p {
  text-align: left;
}

.stat-box {
  font-size: 0.85rem;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

  </style>
  
  