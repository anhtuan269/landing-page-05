<template>
  <div class="member bg-blue-01">
    <div
      class="max-w-400 mx-auto xl:flex items-center overflow-y-hidden md:max-w-2xl xl:max-w-1110 xl:justify-between acer:max-w-1300 2xl:max-w-1500"
    >
      <div
        class="head mb-20 xl:mb-0 xl:w-4/12"
        v-for="(head, index) in heading"
        :key="index"
        v-show="head.type === 'member'"
      >
        <Name :head="head" :color="color" class="text-white" />
        <Heading :head="head" :text="text" />
        <button
          class="bg-orange w-full tetx-center py-4 text-16 leading-7 text-white font-bold hover:bg-orange-01 duration-500 ease-linear"
        >
          SIGN UP NOW
        </button>
      </div>
      <div class="relative top-n-60 md:top-28 xl:w-4/12">
        <img src="@/static/image/Pattern.png" alt="" class="z-1 w-full" />
        <img
          src="@/static/image/member.png"
          alt=""
          class="w-full absolute -top-1/4 z-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
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
  components: {
    Heading,
    Name,
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
  },
};
</script>

<style>
</style>