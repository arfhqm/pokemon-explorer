import { defineStore } from 'pinia'
import axios from 'axios'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    list: [],
    selected: null,
    loading: false
  }),
  actions: {
    async fetchPokemonList() {
      this.loading = true
      try {
        await new Promise(resolve => setTimeout(resolve, 1200))
    
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
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
    async fetchPokemonDetail(name) {
      this.selected = null
      this.loading = true
      try {
        await new Promise(resolve => setTimeout(resolve, 1200))
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        let data = res.data
    
        // ✅ Apply edits from localStorage if available
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

    editPokemonDetail(updatedData) {
      if (!this.selected) return
      this.selected = {
        ...this.selected,
        ...updatedData
      }
    
      // Save to list
      const index = this.list.findIndex(p => p.name === this.selected.name)
      if (index !== -1) {
        this.list[index] = {
          ...this.list[index],
          ...updatedData
        }
      }
    
      // Save edited data to localStorage
      localStorage.setItem(`pokemon-${this.selected.name}`, JSON.stringify(updatedData))
    }    
  }
})
