<template>
  <div class="news">
    <div class="lg:flex justify-between">
      <Heading
        v-for="(head, index) in heading"
        :key="index"
        :head="head"
        v-show="head.type === 'News'"
      />
      <div class="flex items-center my-4">
        <p class="text-orange text-16">See more</p>
        <svg
          class="transform -rotate-90 ml-3"
          width="12"
          height="12"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.00501 7.4C5.78501 7.4 5.58501 7.31999 5.42501 7.15999L0.425009 1.95999C0.125009 1.63999 0.125004 1.14 0.445004 0.819998C0.765004 0.519998 1.26502 0.519999 1.58502 0.839999L6.00501 5.44L10.425 0.839999C10.725 0.519999 11.245 0.519998 11.565 0.819998C11.885 1.12 11.885 1.63999 11.585 1.95999L6.58502 7.15999C6.42502 7.31999 6.22501 7.4 6.00501 7.4Z"
            fill="#FF5722"
          />
        </svg>
      </div>
    </div>
    <div class="content md:grid grid-cols-2">
      <ImageCard
        :item="item"
        v-for="(item, index) in event"
        :key="index"
        v-show="item.type === 'image'"
      />
      <ImageTestimonial
        :item="item"
        v-for="(item, index) in event"
        :key="index"
        v-show="item.type === 'testimonial'"
      />
      <ImageEvent
        v-for="(item, index) in event"
        :key="index"
        :item="item"
        v-show="item.type === 'space'"
      />
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
import ImageCard from "@/components/Card_event";
import ImageTestimonial from "@/components/Card_testimonial";
import ImageEvent from "@/components/Card_image";
export default {
  components: {
    Heading,
    ImageCard,
    ImageTestimonial,
    ImageEvent,
  },
  data() {
    return {
      heading: [],
      event: [],
    };
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
    this.event = await fetch("http://localhost:3000/event").then((res) => {
      return res.json();
    });
  },
};
</script>

<style>
</style>