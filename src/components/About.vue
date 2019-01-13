<template>
  <!--*************** About section **************************-->
  <section class="about" id="about">
    <b-container>
      <div style="display:block; position:absolute">
        <parallax :fixed="true">
          <img class="img-fluid" src="../assets/bg_parrallax.jpg">
        </parallax>
      </div>

      <b-row>
        <b-col lg-12 class="text-center">
          <div class="section-header-main">
            <div class="section-header-dark">
              <h3 class="section-heading-right">Our story</h3>

              <h2 class="section-heading-right">Welcome</h2>

              <hr class="section-heading-underline">
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg-12 no-gutters>
          <Scrollama :offset="0.5" @step-enter="({ element }) => (currStep = element.dataset)">
            <div class="graphic" slot="graphic">
              <GradientCard></GradientCard>
              {{currStep.stepTitle}}
            </div>

            <b-card
              v-for="(step) in steps"
              v-bind:key="step.id"
              :title="step.title"
              :data-step-id="step.id"
              :data-step-title="step.title"
              :data-step-img-path="step.imgPath"
              class="step"
            >
              <h1>{{step.title}}</h1>
            </b-card>

            <div class="step" data-step-no="4">step 4</div>
          </Scrollama>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!--*************** End About section **************************-->
</template>

<style src="vue-scrollama/dist/vue-scrollama.css"></style>

<script>
import "intersection-observer";
import Scrollama from "vue-scrollama";
import Parallax from "vue-parallaxy";

export default {
  name: "About",

  data: function() {
    return {
      currStep: null,

      steps: [
        {
          id: 1,
          title: "First one",
          imgPath: require("@/assets/1.jpg")
        },
        {
          id: 2,
          title: "Second one",
          imgPath: require("@/assets/2.jpg")
        },
        {
          id: 3,
          title: "Third one",
          imgPath: require("@/assets/3.jpg")
        },
        {
          id: 4,
          title: "Fourth one",
          imgPath: require("@/assets/4.jpg")
        }
      ]
    };
  },

  mounted() {
    this.currStep = this.steps[0];
    console.log("currStep " + this.currStep.title);
  },

  methods: {
    stepEnterHandler({ element, index, direction }) {
      // handle the step-event as required here
      //console.log(element, index, direction)
      console.log("id: " + element.dataset.stepId);
      console.log("title: " + element.dataset.stepTitle);
      console.log("imgpath: " + element.dataset.stepImgPath);
    }
  },

  components: {
    Scrollama,
    Parallax
  }
};
</script>


<style>
.graphic-img {

  width: 100%;
  transform-origin: 50% 50%;
  cursor: pointer;
  transform: scaleY(1) translateZ(0);
  margin: 5px;

}

.flip-enter-active {
  transition: all .2s cubic-bezier(0.55, 0.085, 0.68, 0.53); 
}

.flip-leave-active {
  transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
}

.flip-enter, .flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
</style>
