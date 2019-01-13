<template>
  <header class="masthead text-white d-flex">
    <b-container class="my-auto">
      <b-row>
        <b-col md="11">
          <b-row>
            <!-- crafted with passion-->
            <b-col md="4" class="text-md-right text-center">
              <h6>CRAFTED WITH PASSION</h6>
              <h6>EST 2014</h6>
            </b-col>

            <!-- line -->
            <b-col md="8">
              <hr align="left" class="light top">
            </b-col>
          </b-row>

          <b-row>
            <!-- icon logo -->
            <b-col md="4" class="text-center text-md-right">
              <b-img
                class="header-quote-icon"
                :src="require('@/assets/beer_save_water.svg')"
                alt="responsive image"
              />
            </b-col>

            <!-- quote -->
            <b-col md="8" class="text-center text-md-left">
              <h2>beauty is in the eye of</h2>
              <h1>
                <span>beer</span> holder
              </h1>
            </b-col>
          </b-row>

          <b-row>
            <!-- line below-->
            <b-col offset-md="4" md="8">
              <hr class="light">
            </b-col>
          </b-row>
        </b-col>

        <b-col md="1" class="parent-row">
          <div class="home-content__scroll">
            <a
              href="#about"
              class="scroll-link smoothscroll"
              tabindex="-1"
              v-scroll-to="'#about'"
            >Scroll</a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>
