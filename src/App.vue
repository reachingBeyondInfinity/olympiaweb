<template>
  <div id="app">
    <Navbar/>
    <Header/>
    <About/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import PhotoGallery from './components/PhotoGallery.vue'

export default {

  name: 'app',


  components: {
    Navbar,
    Header,
    About,
    Services,
    PhotoGallery
  }
}
</script>

<style lang="scss">

