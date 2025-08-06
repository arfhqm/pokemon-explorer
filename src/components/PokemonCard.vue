<template>
    <div class="card text-center shadow-sm">
      <img :src="pokemon.sprite" class="card-img-top mx-auto mt-3" style="width: 96px;" alt="Pokemon" />
      <div class="card-body">
        <h5 class="card-title text-capitalize">{{ pokemon.name }}</h5>
        <p class="card-text">
          Type: {{ pokemon.types }}<br />
          XP: {{ pokemon.base_experience }}
        </p>
        <router-link :to="`/pokemon/${pokemon.name}`" class="btn btn-outline-primary">
          View Details
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps(['pokemon'])
  </script>  
  
  <style scoped>
  .card-img-top {
    object-fit: contain;
    height: 100px;
  }

  .pokemon-card {
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
}
  </style>
  