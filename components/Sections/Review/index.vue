<template>
  <div class="review mb-20">
    <Name
      v-for="(head, index) in heading"
      :key="index"
      :head="head"
      v-show="head.type === 'Reviews'"
    />
    <Heading
      v-for="(head, index) in heading"
      :key="index"
      :head="head"
      v-show="head.type === 'Reviews'"
    />
    <Arrow class="mb-10 " @next="showNext" @prev="showPrev" />
    <VueSlickCarousel v-bind="setting" ref="carousel">
      <Slide
        v-for="(item, index) in slide"
        :key="index"
        :item="item"
        :index="item.id"
      />
    </VueSlickCarousel>
    <div
        class="bg-gray-02 w-160 h-1 mx-auto mt-5 flex items-center duration-500 ease-linear"
      >
        <div class="w-1/4 h-1 duration-300 ease-linear" :class="orange1"></div>
        <div class="w-1/4 h-1 duration-300 ease-linear" :class="orange2"></div>
        <div class="w-1/4 h-1 duration-300 ease-linear" :class="orange3"></div>
        <div class="w-1/4 h-1 duration-300 ease-linear" :class="orange4"></div>
      </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import Heading from "@/components/Heading";
import Name from "@/components/Name";
import Arrow from "@/components/Arrow";
import Slide from "@/components/Slide_testimonial";
export default {
  data() {
    return {
      heading: [],
      slide: [],
      index:1,
      setting: {
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
    this.slide = await fetch("http://localhost:3000/slideTestimonial").then(
      (res) => {
        return res.json();
      }
    );
  },
  components: {
    Heading,
    Name,
    VueSlickCarousel,
    Arrow,
    Slide,
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
      return this.slide.length
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
  }
};
</script>

<style>
</style>