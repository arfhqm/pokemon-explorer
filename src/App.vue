<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-light shadow-sm py-4 px-3 mb-4">
    <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
      <div class="d-flex align-items-center gap-2">
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokémon Logo" class="logo" />
        <h1 class="mb-0 text-primary fw-bold">Pokémon Explorer</h1>
      </div>
      <nav class="mt-3 mt-md-0">
        <RouterLink to="/" class="nav-link px-3">Home</RouterLink>
      </nav>
    </div>
  </header>

  <main class="container pb-5">
    <RouterView />
  </main>
</template>

<style>
.logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

header {
  background-color: #f8f9fa;
}

h1 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.8rem;
}

nav .nav-link {
  font-weight: 500;
  color: #555;
  text-decoration: none;
  transition: 0.2s ease;
}

nav .nav-link:hover {
  color: #007bff;
}

nav .router-link-exact-active {
  color: #e63946;
  border-bottom: 2px solid #e63946;
}

main {
  min-height: 80vh;
  padding-top: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
}

body {
  background: linear-gradient(to bottom, #ffffff, #FFCB05);
}
</style>
