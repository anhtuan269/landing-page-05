<template>
  <div
    class="counting mb-20 mx-auto max-w-400 md:max-w-2xl xl:max-w-1110 xl:flex xl:justify-between xl:items-center xl:mb-28 acer:max-w-1300 2xl:max-w-1500 "
  >
    <div class="xl:w-5/12">
      <Count />
    </div>

    <div class="content bg-blue-01 text-white p-10 xl:w-6/12 2xl:w-7/12">
      <Name
        v-for="(head, index) in heading"
        :key="index"
        :head="head"
        :color="color"
        v-show="head.type === 'Frispes'"
      />
      <Heading
        :head="head"
        v-for="(head, index) in heading"
        :key="index"
        v-show="head.type === 'Frispes'"
        :text="text"
      />
    </div>
  </div>
</template>

<script>
import Count from "@/components/Count";
import Heading from "@/components/Heading";
import Name from "@/components/Name";
export default {
  data() {
    return {
      heading: [],
      text: "white",
      color: "white",
    };
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
  },
  componetns: {
    Count,
    Heading,
    Name,
  },
};
</script>

<style>
</style>