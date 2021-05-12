<template>
  <div class="space mx-auto mb-20">
    <div class="heading flex items-center justify-between">
      <Heading
        v-for="(head, index) in heading"
        :key="index"
        v-show="head.type === 'space'"
        :head="head"
        :flex="flex"
      />
      <Arrow class="hidden text-center" @next="showNext" @prev="showPrev" />
    </div>
    <div class="slide">
      <VueSlickCarousel v-bind="settings" ref="carousel">
        <div class="slide relative" v-for="(item, index) in slide" :key="index">
          <Slide :item="item" :slide="slide" :index="index" />
        </div>
      </VueSlickCarousel>
      <div
        class="bg-gray-02 w-160 h-1 mx-auto mb-3 flex items-center duration-500 ease-linear"
      >
        <div class="w-1/4 h-1 duration-300 ease-linear" :class="orange1"></div>
        <div class="w-1/4 h-1 duration-300 ease-linear" :class="orange2"></div>
        <div class="w-1/4 h-1 duration-300 ease-linear" :class="orange3"></div>
        <div class="w-1/4 h-1 duration-300 ease-linear" :class="orange4"></div>
      </div>
      <div class="count text-center font-Lato">
        <span class="text-18 leading-7 text-black-01"> 0{{ index }}</span>
        <span class="text-16 leading-6 text-black-02">/</span>
        <span class="text-18 leading-6 text-gray-02">0{{ total }}</span>
      </div>
      <Arrow class="mt-0" @next="showNext" @prev="showPrev" />
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
import Slide from "@/components/Slide_image";
import Arrow from "@/components/Arrow";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
    Heading,
    Slide,
    Arrow,
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
      flex: "true",
      index: 1,
    };
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
    this.slide = await fetch("http://localhost:3000/sildeImage").then((res) => {
      return res.json();
    });
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
      if (this.index > this.total - 1) {
        return (this.index = 1);
      } else {
        return this.index++;
      }
    },
    showPrev() {
      this.$refs.carousel.prev();
      if (this.index - 1 <= 0) {
        return (this.index = this.total);
      } else {
        return this.index--;
      }
    },
  },
  computed: {
    total() {
      return this.slide.length;
    },
    orange1() {
      if (this.index === 1) {
        return "bg-orange";
      } else {
        return "";
      }
    },
    orange2() {
      if (this.index === 2) {
        return "bg-orange";
      } else {
        return "";
      }
    },
    orange3() {
      if (this.index === 3) {
        return "bg-orange";
      } else {
        return "";
      }
    },
    orange4() {
      if (this.index === 4) {
        return "bg-orange";
      } else {
        return "";
      }
    },
  },
};
</script>

<style>
</style>