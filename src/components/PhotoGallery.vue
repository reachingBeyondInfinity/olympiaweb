<template>
  <!-- Portfolio -->
  <section class="portfolio" id="portfolio">
    <gallery
      :images="filteredItems.map(function (item){ return item['imgPath']; })"
      :index="index"
      @close="index = null"
    ></gallery>

    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="section-header">
            <h3 class="text-muted">Expore</h3>
            <h2>our gallery</h2>
            <hr class="section-heading-underline">
          </div>
        </div>
      </div>
      <div class="portfolio-area">
        <!-- Portfolio Filters -->
        <div class="filters">
          <ul>
            <li
              v-for="item in items"
              v-bind:key="item.id"
              :class="{active:item.id == selected}"
              @click.prevent="selected = item.id"
              v-on:click="filter(item.tag)"
            >{{item.title}}</li>
          </ul>
        </div>
        <!--/Portfolio Filters -->
        <!-- Portfolio Wrap -->
        <div class="row no-gutters popup-gallery">
          <fade-transition group class="portfolio-main">
            <div
              v-for="(item, imageIndex) in filteredItems"
              v-bind:key="item.id"
              class="col-lg-4 col-sm-6 portfolio-single"
            >
              <a class="portfolio-box" href="#" @click.prevent="index = imageIndex">
                <img class="img-fluid" :src="item.imgPath" alt>
                <div class="portfolio-box-caption">
                  <div class="portfolio-box-caption-content">
                    <div class="project-category text-faded">Category</div>
                    <div class="project-name">Project Name</div>
                  </div>
                </div>
              </a>
            </div>
            </fade-transition>
        </div>
        <!--/Portfolio Wrap -->
      </div>
    </div>
  </section>
</template>


<script>
import VueGallery from "vue-gallery";
import _ from "lodash";
import {FadeTransition} from 'vue2-transitions'

export default {
  data: function() {
    return {
      items: [
        {
          id: 1,
          title: "All",
          tag: "all"
        },
        {
          id: 2,
          title: "Restaurant",
          tag: "tag1"
        },
        {
          id: 3,
          title: "Interier",
          tag: "tag2"
        }
      ],

      images: [
        {
          id: 1,
          title: "First one",
          tags: ["all", "tag1"],
          imgPath: require("@/assets/portfolio/1.jpg")
        },
        {
          id: 2,
          title: "Second one",
          tags: ["all", "tag2"],
          imgPath: require("@/assets/portfolio/2.jpg")
        },
        {
          id: 3,
          title: "Third one",
          tags: ["all", "tag1"],
          imgPath: require("@/assets/portfolio/3.jpg")
        },
        {
          id: 4,
          title: "Fourth one",
          tags: ["all", "tag2"],
          imgPath: require("@/assets/portfolio/4.jpg")
        }
      ],

      selected: undefined,
      isActive: false,
      index: null,
      currentTag: "all"
    };
  },
  computed: {
    filteredItems: function() {
      var filter = this.currentTag;
      return this.images.filter(function(item) {
        return item.tags.indexOf(filter) !== -1;
      });
    }
  },
  methods: {
    shuffle: function() {
      this.images = _.shuffle(this.images);
    },
    filter: function(tag) {
      this.currentTag = tag;
      this.isActive = !this.isActive;
    }
  },

  components: {
    gallery: VueGallery,
    FadeTransition
  }
};
</script> 

