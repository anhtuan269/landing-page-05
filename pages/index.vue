<template>
  <div id="app" class="bg-gray-100">
    <Header />
    <Hero />
    <Space />
    <Count />
    <Category />
    <Gallery />
    <Custom  />
    <Review />
    <Help />
    <Event  />
    <Member />
    <Footer />
  </div>
</template>

<script>
import Count from "@/components/Sections/Counting";
import Category from "@/components/Sections/Category";
import Heading from "@/components/Heading";
import Header from "@/components/Sections/Header";
import Hero from "@/components/Sections/Hero";
import Space from "@/components/Sections/Space";
import Gallery from "@/components/Sections/Gallery";
import Custom from "@/components/Sections/Custom";
import Review from "@/components/Sections/Review";
import Help from "@/components/Sections/Help_center";
import Event from "@/components/Sections/Event";
import Member from "@/components/Sections/Member";
import Footer from "@/components/Sections/Footer";
export default {
  components: {
    Gallery,
    Header,
    Hero,
    Space,
    Count,
    Heading,
    Category,
    Custom,
    Review,
    Help,
    Event,
    Member,
    Footer,
  },
  data() {
    return {
      heading: [],
    };
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
  },
  methods: {},
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
