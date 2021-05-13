<template>
  <div class="category mb-20 mx-auto max-w-400 md:max-w-2xl xl:max-w-1110">
    <div
      class="heading"
      v-for="(head, index) in heading"
      :key="index"
      v-show="head.type === 'Facilities'"
    >
      <Name :head="head" />
      <Heading :head="head" :width="width" />
    </div>
    <div class="xl:flex ">
      <div class="content flex mb-10 xl:w-5/12">
        <div class="count h-n-240 relative">
          <div class="h-n-160 w-1 bg-gray-02">
            <div
              class="w-1 h-1/5 duration-300 ease-in-out"
              :class="orange1"
            ></div>
            <div
              class="w-1 h-1/5 duration-300 ease-in-out"
              :class="orange2"
            ></div>
            <div
              class="w-1 h-1/5 duration-300 ease-in-out"
              :class="orange3"
            ></div>
            <div
              class="w-1 h-1/5 duration-300 ease-in-out"
              :class="orange4"
            ></div>
            <div
              class="w-1 h-1/5 duration-300 ease-in-out"
              :class="orange5"
            ></div>
          </div>
          <div
            class="count font-Lato transform -translate-x-6 translate-y-10 -rotate-90"
          >
            <span class="text-18 leading-7 text-black-01">
              0{{ itemIndex + 1 }}</span
            >
            <span class="text-16 leading-6 text-black-02">/</span>
            <span class="text-16 leading-6 text-gray-02">0{{ total }}</span>
          </div>
        </div>
        <div class="categori w-300 ">
          <Categories
            v-for="(item, index) in category"
            :key="index"
            :item="item"
            :index="index"
            :total="total"
            @event="itemIndex = $event"
          />
        </div>
      </div>
      <div class="xl:w-8/12 xl:transform xl:-translate-x-24">
      <img src="@/static/image/customer.png" alt="" /></div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
export default {
  components: {
    Heading,
  },
  data() {
    return {
      heading: [],
      category: [],
      itemIndex: 1,
      width: "category",
    };
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
    this.category = await fetch("http://localhost:3000/category").then(
      (res) => {
        return res.json();
      }
    );
  },
  methods: {},
  computed: {
    total() {
      return this.category.length;
    },
    orange1() {
      if (this.itemIndex === 0) {
        return "bg-orange";
      } else {
        return "";
      }
    },
    orange2() {
      if (this.itemIndex === 1) {
        return "bg-orange";
      } else {
        return "";
      }
    },
    orange3() {
      if (this.itemIndex === 2) {
        return "bg-orange";
      } else {
        return "";
      }
    },
    orange4() {
      if (this.itemIndex === 3) {
        return "bg-orange";
      } else {
        return "";
      }
    },
    orange5() {
      if (this.itemIndex === 4) {
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