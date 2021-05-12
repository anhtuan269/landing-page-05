<template>
  <div class="member lg:flex items-center bg-blue-01 overflow-y-hidden">
    <div
      class="head mb-20 p-10"
      v-for="(head, index) in heading"
      :key="index"
      v-show="head.type === 'member'"
    >
      <Name :head="head" :color="color"  class="text-white"/>
      <Heading :head="head" :text="text" />
      <button
        class="bg-orange w-full tetx-center py-4 text-16 leading-7 text-white font-bold hover:bg-orange-01 duration-500 ease-linear"
      >
        SIGN UP NOW
      </button>
    </div>
    <div class="relative top-n-60 ">
      <img src="@/static/image/Pattern.png" alt="" class="z-1 w-full" />
      <img
        src="@/static/image/member.png"
        alt=""
        class="w-full
         absolute -top-1/4 z-1"
      />
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