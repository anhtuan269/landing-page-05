<template>
  <div class="gallery mb-20">
    <div
      class="heading"
      v-for="(head, index) in heading"
      :key="index"
      v-show="head.type === 'gallery'"
    >
      <Name :head="head" />
      <Heading :head="head" />
    </div>
    <Arrow class="hidden" @next="showNext" @prev="showPrev" />
    <div class="slide">
      <VueSlickCarousel v-bind="settings" ref="carousel">
        <div class="slide relative" v-for="(item, index) in slide" :key="index">
          <Slide :item="item" :index="index" />
        </div>
      </VueSlickCarousel>
      <Arrow class="mt-10" @next="showNext" @prev="showPrev" />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import Name from "@/components/Name";
import Heading from "@/components/Heading";
import Arrow from "@/components/Arrow";
import Slide from "@/components/Slide_Space";
export default {
  components: {
    Name,
    Heading,
    Arrow,
    Slide,
    VueSlickCarousel,
  },
  data() {
    return {
      heading: [],
      slide: [],
      settings: {
        dots: false,
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
        ],
      },
    };
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
    this.slide = await fetch("http://localhost:3000/slideGallery").then(
      (res) => {
        return res.json();
      }
    );
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style scoped>
.slick-slide.slick-active.slick-current img {
  height:600px;
}
</style>