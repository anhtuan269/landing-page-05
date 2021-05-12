<template>
  <div class="hero mb-20">
    <div
      class="heading"
      v-for="(head, index) in heading"
      :key="index"
      v-show="head.type === 'introduce'"
    >
      <Name :head="head" />
      <Heading :head="head" :flex="flex" />
    </div>
    <div class="relative">
      <Form />
      <div
        class="image"
        v-for="(item, index) in image"
        :key="index"
        v-show="item.type === 'hero'"
      >
        <img :src="item.url" alt="" />
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