<template>
  <b-navbar
    v-bind:class="{ 'navbar-shrink': isActive }"
    class="navbar navbar-expand-lg navbar-light fixed-top"
    id="mainNav"
    ref="mainNav"
    v-b-scrollspy
    toggleable="md"
    type="light"
  >
    <b-navbar-toggle 
      ref="mNavbarToggler"
      class="navbar-toggler" target="nav_collapse"
      >
      <div
        ref="mNavbarTogglerIcon"
        v-on:click="toggleNavbarToggler"
        v-bind:class="{ 'is-clicked': isClicked }"
        class="header-menu-toggle"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        href="#0"
      >
        <span class="header-menu-icon"></span>
      </div>
    </b-navbar-toggle>


    <b-navbar-brand href="#app" v-on:click="onNavBrandClick" v-scroll-to="'#app'">Olympia Alm</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse" ref="mNavCollapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#about" v-on:click="toggleNavbarToggler" v-scroll-to="'#about'">About</b-nav-item>
        <b-nav-item href="#services" v-on:click="toggleNavbarToggler" v-scroll-to="'#services'">Service</b-nav-item>
        <b-nav-item href="#portfolio" v-on:click="toggleNavbarToggler" v-scroll-to="'#portfolio'">Gallery</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

  <script>
export default {
  data: function() {
    return {
      isActive: false,
      isClicked: false,
      showCollapse: true
    };
  },

  methods: {
    // listen to scroll event, and change color of navbar depends on it
    handleScroll(event) {
      if(!this.$refs.mNavCollapse.show){
        if (window.scrollY > 250) {
          this.isActive = true;
        } else {
          this.isActive = false;
        }
      }
    },

    // on nav click animate navbar toggler
    toggleNavbarToggler() { 
      //event.preventDefault();
      this.isClicked = !this.$refs.mNavCollapse.show;

      if(window.scrollY<250) {
        this.isActive = !this.isActive;
      }
    },

    onNavBrandClick() {
      this.$refs.mNavCollapse.show = false;
      this.isClicked = false;
    }
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  mounted() {
    //var a = this.$refs.mNavbarToggler;
    //console.log("element " + a);
    //console.log("attributes " + a.$attrs);

    //console.log("on mounted " + this.$refs.myId.$attrs['aria-expanded']);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
