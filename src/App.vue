<template>
  <div id="app">
    <Navbar/>
    <Header/>
    <Test/>
    <About/>
    <AboutReg/>
    <Services/>
    <PhotoGallery/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import AboutReg from './components/AboutReg.vue'
import Services from './components/Services.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import Test from './components/Test.vue'

export default {

  name: 'app',


  components: {
    Navbar,
    Header,
    About,
    AboutReg,
    Services,
    PhotoGallery,
    Test
  },

  
}
</script>

<style lang="scss">

