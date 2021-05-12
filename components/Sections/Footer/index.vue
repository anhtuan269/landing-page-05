<template>
  <div class=" ">
    <div
      class="head"
      v-for="(head, index) in heading"
      :key="index"
      v-show="head.type === 'offer'"
    >
      <Heading :head="head" />
    </div>
    <div class="relative">
      <img src="@/static/image/insta.svg" alt="" class="z-20 bg-red-600" />
      <img src="@/static/image/Subtract.svg" alt="" class="bg-red-600" />
      <img src="@/static/image/Facebook.svg" alt="" class="bg-red-600" />
    </div>
    <div class="col">
      <Title
        class="menu"
        v-for="(item, index) in title"
        :key="index"
        :item="item"
        v-show="item.type === 'space'"
      />
      <Link
        v-for="(item, index) in text"
        :key="index"
        :item="item"
        v-show="item.type === 'space'"
      />
    </div>
     <div class="col">
      <Title
        class="menu"
        v-for="(item, index) in title"
        :key="index"
        :item="item"
        v-show="item.type === 'Company'"
      />
      <Link
        v-for="(item, index) in text"
        :key="index"
        :item="item"
        v-show="item.type === 'Company'"
      />
    </div>
     <div class="col">
      <Title
        class="menu"
        v-for="(item, index) in title"
        :key="index"
        :item="item"
        v-show="item.type === 'Support'"
      />
      <Link
        v-for="(item, index) in text"
        :key="index"
        :item="item"
        v-show="item.type === 'Support'"
      />
    </div>
     <div class="col">
      <Title
        class="menu"
        v-for="(item, index) in title"
        :key="index"
        :item="item"
        v-show="item.type === 'Contact'"
      />
      <Link
        v-for="(item, index) in text"
        :key="index"
        :item="item"
        v-show="item.type === 'Contact'"
      />
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
import Title from "@/components/Footer_title";
import Link from "@/components/Footer_link";
export default {
  data() {
    return {
      heading: [],
      title: [],
      text: [],
    };
  },
  components: {
    Heading,
    Title,
    Link,
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
    this.title = await fetch(" http://localhost:3000/footerTitle").then(
      (res) => {
        return res.json();
      }
    );
    this.text = await fetch(" http://localhost:3000/footerText").then((res) => {
      return res.json();
    });
  },
};
</script>

<style>
</style>