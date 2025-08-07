import { defineStore } from 'pinia'
import axios from 'axios'

/**
 * Pinia store for managing Pokémon data, including list fetching,
 * detail fetching, and local editing.
 */
export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    list: [],
    selected: null,
    loading: false
  }),

  actions: {
    /**
     * Fetches a list of Pokémon with their basic info and details
     * from the PokéAPI and stores them in the `list` state.
     */
    async fetchPokemonList() {
      this.loading = true
      try {
        // Simulated delay
        await new Promise(resolve => setTimeout(resolve, 1200))

        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')

        // Fetch detailed data for each Pokémon
        const pokemonList = await Promise.all(
          res.data.results.map(async (p) => {
            const detail = await axios.get(p.url)
            return {
              name: p.name,
              sprite: detail.data.sprites.front_default,
              types: detail.data.types.map(t => t.type.name).join(', '),
              base_experience: detail.data.base_experience,
            }
          })
        )

        this.list = pokemonList
      } catch (e) {
        console.error('Failed to fetch Pokémon:', e)
      } finally {
        this.loading = false
      }
    },

    /**
     * Fetches and stores information Pokémon by name.
     * locally saved edits from localStorage.
     */
    async fetchPokemonDetail(name) {
      this.selected = null
      this.loading = true
      try {
        // Simulated delay
        await new Promise(resolve => setTimeout(resolve, 1200))

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        let data = res.data

        // Load locally saved edits
        const saved = localStorage.getItem(`pokemon-${name}`)
        if (saved) {
          const edits = JSON.parse(saved)
          data = {
            ...data,
            ...edits
          }
        }

        this.selected = data
      } catch (e) {
        console.error('Error loading details:', e)
      } finally {
        this.loading = false
      }
    },

    /**
     * Edits selected Pokémon’s details, updates the list,
     * and store changes in localStorage.
     */
    editPokemonDetail(updatedData) {
      if (!this.selected) return

      // Update selected Pokémon state
      this.selected = {
        ...this.selected,
        ...updatedData
      }

      // Update list entry
      const index = this.list.findIndex(p => p.name === this.selected.name)
      if (index !== -1) {
        this.list[index] = {
          ...this.list[index],
          ...updatedData
        }
      }

      // Save edits to localStorage
      localStorage.setItem(`pokemon-${this.selected.name}`, JSON.stringify(updatedData))
    }
  }
})