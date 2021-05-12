<template>
  <div class="custom mb-20">
    <Heading
      v-for="(head, index) in heading"
      :key="index"
      :head="head"
      v-show="head.type === 'Who'"
    />
    <div class="customer-image grid grid-cols-2 gap-5 md:grid-cols-3">
      <a
        :href="item.link"
        v-for="(item, index) in custom"
        :key="index"
        :target="item.target"
      >
        <img :src="item.url" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
export default {
  data() {
    return {
      heading: [],
      custom: [],
    };
  },
  components: {
    Heading,
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
    this.custom = await fetch("http://localhost:3000/customer").then((res) => {
      return res.json();
    });
  },
};
</script>

<style>
</style>