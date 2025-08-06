<template>
    <div class="container my-4">
      <h1 class="mb-4">Pokémon Explorer</h1>
  
      <input type="text" class="form-control mb-3" placeholder="Search Pokémon"
             v-model="searchQuery" />
  
      <!-- Show loader while fetching -->
      <div v-if="loading" class="text-center my-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-2">Loading Pokémon...</p>
      </div>
  
      <!-- Show cards only when not loading -->
      <div v-else class="row">
        <div class="col-md-3 mb-4" v-for="pokemon in filteredList" :key="pokemon.name">
          <PokemonCard :pokemon="pokemon" />
        </div>
      </div>
    </div>
  </template>
  