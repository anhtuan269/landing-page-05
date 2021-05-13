<template>
  <div class="help-center mb-20 max-w-400 mx-auto md:max-w-2xl xl:max-w-1110 xl:mb-28">
   <div class="xl:text-center xl:mb-20">
      <Heading
      v-for="(head, index) in heading"
      :key="index"
      :head="head"
      v-show="head.type === 'question'"
      :width="width"
      :flex="flex"
    />
   </div>
   <div class="center mb-10 xl:grid xl:grid-cols-3 xl:items-center xl:gap-4 xl:mb-0">
      <Question
      v-for="(item, index) in question"
      :key="index"
      :item="item"
      v-show="item.type === 'questions'"
    />
   </div>
    <div
      v-for="(item, index) in question"
      :key="index"
      :item="item"
      v-show="item.type === 'link'"
      class="mt-10 xl:mt-5"
    >
      <nuxt-link to="/" class="flex text-orange justify-center ">
        {{ item.text }}
        <svg
          class="transform -rotate-90"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0067 20.5335C15.7133 20.5335 15.4467 20.4268 15.2333 20.2135L8.56667 13.2801C8.16667 12.8535 8.16666 12.1868 8.59333 11.7601C9.02 11.3601 9.68668 11.3601 10.1133 11.7868L16.0067 17.9201L21.9 11.7868C22.3 11.3601 22.9934 11.3601 23.42 11.7601C23.8467 12.1601 23.8466 12.8535 23.4466 13.2801L16.78 20.2135C16.5667 20.4268 16.3 20.5335 16.0067 20.5335Z"
            fill="#FF5722"
          />
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
import Question from "@/components/Question";
export default {
  components: {
    Heading,
    Question,
  },
  data() {
    return {
      heading: [],
      question: [],
      width:"help",
      flex:"false"
    };
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
    this.question = await fetch("http://localhost:3000/question").then(
      (res) => {
        return res.json();
      }
    );
  },
};
</script>

<style>
</style>