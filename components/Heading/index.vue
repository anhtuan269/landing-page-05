<template>
  <div class="heading justify-between mb-10" :class="flexClass">
    <h2 class="text-34 font-bold leading-9 mb-8" :class="textColor">
      <span class="text-red-600">{{ head.span }}</span>
      {{ head.title }}
    </h2>
    <p class="font-medium text-16 leading-6  " :class="color">
      {{ head.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    head: {
      type: Object,
    },
    flex: {
      type: String,
    },
    text: {
      type: String,
      default() {
        return "blue";
      },
    },
  },
  computed: {
    flexClass() {
      if (this.flex === "true") {
        return "lg:flex";
      } else {
        return "block";
      }
    },
    textColor() {
      if (this.text === "blue") {
        return " text-blue-01";
      } else if (this.text === "white") {
        return "text-white";
      }
    },
    color() {
      if (this.text === "blue") {
        return " text-gray-01";
      } else if (this.text === "white") {
        return "text-white";
      }
    },
  },
};
</script>

<style>
</style>