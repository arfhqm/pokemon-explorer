# Pokémon Explorer App

A responsive Vue 3 web app that displays a list of Pokémon using data from the [PokeAPI](https://pokeapi.co/). Users can search, view detailed Pokémon info, and even edit the Pokémon's stored info using Pinia.

## 🚀 Live Demo
[🔗 View Deployed App on Netlify/GitHub Pages](https://your-live-link.com)

---

## 🧰 Tech Stack

- **Vue 3**
- **JavaScript**
- **Bootstrap 5.3**
- **Pinia (State Management)**
- **Axios (API Fetching)**

---

## 📦 Features

- ✅ Fetch and display 100 Pokémon from the PokeAPI
- ✅ Responsive grid layout using Bootstrap 5
- ✅ Search bar for filtering Pokémon by name
- ✅ Detail page with extended info (stats, abilities, types, etc.)
- ✅ UI loader for async API calls
- ✅ State management with Pinia
- ✅ Edit Pokémon info and persist in store
- ✅ Responsive mobile-first design
- ✅ Bonus: Data visualizations using charts

---

## 📸 UI Mockups & UX Flow

You can find the UI/UX wireframes and mockups in the `mockups/` folder:

- Home Page Layout (Grid of Pokémon)
- Detail Page Layout
- Edit Modal/Page
- Responsive mobile layout

> Mockups created with Figma / Excalidraw / Pen & Paper

---

## 📊 Data Visualizations

We use [Chart.js](https://www.chartjs.org/) or [Vue-chartjs](https://vue-chartjs.org/) to display:

- Base Stats (HP, Attack, Defense, etc.) as Radar Chart
- Type Distribution (e.g., pie chart showing how many Fire, Water, etc.)

These graphs are included on the detail page for visual engagement.

---

## 🔧 Installation & Running Locally

1. **Clone the repository**
```bash
git clone https://github.com/your-username/pokemon-app.git
cd pokemon-app
