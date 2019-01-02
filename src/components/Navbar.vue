<template>
            <!-- Navigation -->
    <nav 
    v-bind:class="{ 'navbar-shrink': isActive }"
    class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" ref="mainNav" v-b-scrollspy>
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#app" v-smooth-scroll>Olympia Alm</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about" v-smooth-scroll>About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#services" v-smooth-scroll>Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#portfolio" v-smooth-scroll>Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#contact" v-smooth-scroll>Contact</a>
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
      isActive: false
    };
  },


  methods: {

    handleScroll (event) {
      if(window.scrollY > 300) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }

}
</script>