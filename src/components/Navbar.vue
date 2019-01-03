<template>
  <!-- Navigation -->
  <nav
    v-bind:class="{ 'navbar-shrink': isActive }"
    class="navbar navbar-expand-lg navbar-light fixed-top"
    id="mainNav"
    ref="mainNav"
    v-b-scrollspy
  >
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#app" v-smooth-scroll>Olympia Alm</a>

      <div class="navbar-toggler">
        <div
          ref="myId"
          v-on:click="onNavClick"
          v-bind:class="{ 'is-clicked': isClicked }"
          class="header-menu-toggle"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          href="#0"
        >
          <span class="header-menu-icon"></span>
        </div>
      </div>

      <div ref ="myNavbar" 
      :class="showCollapse ? 'hide' : null"
      class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a 
            v-on:click="onNavLinkClick"
            class="nav-link js-scroll-trigger" href="#about" v-smooth-scroll>About</a>
          </li>
          <li class="nav-item">
            <a 
            v-on:click="onNavLinkClick"
            class="nav-link js-scroll-trigger" href="#services" v-smooth-scroll>Services</a>
          </li>
          <li class="nav-item">
            <a 
            v-on:click="onNavLinkClick"
            class="nav-link js-scroll-trigger" href="#portfolio" v-smooth-scroll>Portfolio</a>
          </li>
          <li class="nav-item">
            <a 
            v-on:click="onNavLinkClick"
            class="nav-link js-scroll-trigger" href="#contact" v-smooth-scroll>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
    handleScroll(event) {
      if (window.scrollY > 300) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },

    onNavClick(event) {
      
      console.log(this.$refs.myNavbar);

      event.preventDefault();

      var isExpanded = this.$refs.myId.getAttribute("aria-expanded");
      
      if (isExpanded == null) {
        this.isClicked = true;
      } else {
        if (isExpanded == "true") {
          this.isClicked = false;
        } else {
          this.isClicked = true;
        }
      }
    },

    onNavLinkClick(event) {
        this.showCollapse = !this.showCollapse;  
    }
  },
  
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  mounted() {
    var a = this.$refs.myId;
    console.log("element " + a);
    console.log("attributes " + a.$attrs);

    //console.log("on mounted " + this.$refs.myId.$attrs['aria-expanded']);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>