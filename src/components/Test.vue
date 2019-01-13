<template>
  <div style="background-color:white; height:1024px; padding-top:500px" >
    
    <button v-on:click="showTransition">show transition</button>

    <transition name="slideLeft">

      <p style="background-color:yellow; animation-duration: 5s;">hello</p>
    
    </transition>

    <fade-transition>
      <div class="box" v-show="show">
        <p>Fade transition</p>
      </div>
    </fade-transition>


  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";

export default {
  
  data: function() {
    return {
      show: false
    };
  },


  components: {
    FadeTransition
  },

  methods: {
    showTransition: function (event) {
      this.show = !this.show;
      console.log("button is clicked");
    }
  }

};
</script>