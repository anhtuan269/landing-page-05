<template>
  <div class="gallery mb-20 mx-auto max-w-400 md:max-w-2xl xl:max-w-1110 xl:relative acer:max-w-1300 2xl:max-w-1500">
    <div class="head xl:max-w-xl xl:ml-auto  xl:absolute xl:top-0 xl:z-10 xl:right-1/4 acer:right-1/3 2xl:right-2/4 xl:transform xl:-translate-x-24 acer:-translate-x-14 2xl:translate-x-32 ">
      <div
        class="heading ml-auto"
        v-for="(head, index) in heading"
        :key="index"
        v-show="head.type === 'gallery'"
      >
        <Name :head="head" />
        <Heading :head="head" :width="width" />
      </div>
      <Arrow
        class="hidden md:flex xl:justify-start "
        @next="showNext"
        @prev="showPrev"
      />
    </div>
    <div class="slide ">
      <VueSlickCarousel v-bind="settings" ref="carousel">
        <div class="slide relative" v-for="(item, index) in slide" :key="index">
          <Slide :item="item" :index="index" />
        </div>
      </VueSlickCarousel>
      <Arrow class="mt-10 xl:hidden" @next="showNext" @prev="showPrev" />
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
      width: "gallery",
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
              centerMode: true,
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
  height: 600px;
}
</style>