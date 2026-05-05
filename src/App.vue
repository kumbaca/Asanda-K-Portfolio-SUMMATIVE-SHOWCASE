<script setup>
import logo from './assets/logo.svg'
import CreativeKits from './components/CreativeKits.vue'
import thumbnail from './assets/Thumbnail.png'
</script>

<template>
  <div id="app">

    <!-- NAV -->
    <header>
      <nav class="navbar">

        <div class="logo">
          <img :src="logo" alt="logo" />
        </div>

        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/services">Services</router-link>
          <router-link to="/portfolio">Portfolio</router-link>
          <router-link to="/brief">Brief</router-link>
        </div>

      </nav>
    </header>

    <!-- ROUTED PAGES -->
    <router-view />

    <!-- CREATIVE KITS -->
    <CreativeKits />

  </div>
</template>

<style scoped>
@import './style.css';
</style>