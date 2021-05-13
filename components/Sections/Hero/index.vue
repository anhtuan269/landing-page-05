<template>
  <div class="hero my-20 max-w-400 mx-auto md:max-w-2xl xl:max-w-1110 xl:mb-28">
    <div
      class="heading"
      v-for="(head, index) in heading"
      :key="index"
      v-show="head.type === 'introduce'"
    >
      <Name :head="head" />
      <Heading :head="head" :flex="flex" :width="width" />
    </div>
    <div class="relative xl:flex xl:justify-end">
      <div class="xl:absolute xl:left-0 xl:top-1/3 xl:transform xl:-translate-y-1/4 z-10">
        <Form />
      </div>
      <div
        class="image xl:transform xl:translate-x-20 "
        v-for="(item, index) in image"
        :key="index"
        v-show="item.type === 'hero'"
      >
        <img :src="item.url" alt="" class=" w-900"/>
      </div>
    </div>
  </div>
</template>

<script>
import Name from '@/components/Name'
import Form from "@/components/Form";
export default {
  components: {
    Form,
    Name,

  },
  data() {
    return {
      heading: [],
      image: [],
      flex: "true",
      width:"hero"
    };
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
    this.image = await fetch("http://localhost:3000/image").then((res) => {
      return res.json();
    });
  },
};
</script>

<style>
</style>