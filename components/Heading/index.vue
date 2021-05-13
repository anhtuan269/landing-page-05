<template>
  <div class="heading justify-between mb-10" :class="[flexClass]">
    <h2
      class="text-34 font-bold leading-9 mb-8"
      :class="[textColor, headWidth, headSize, leading, margin]"
    >
      <span class="text-red-600">{{ head.span }}</span>
      {{ head.title }}
    </h2>
    <p
      class="font-medium text-16 leading-6 xl:w-380 xl:leading-7"
      :class="[color, textWidth, textSize]"
    >
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
    width: {
      type: String,
    },
  },
  computed: {
    leading() {
      if (this.width === "hero") {
        return "xl:leading-l-67";
      } else {
        return "xl:leading-10";
      }
    },
    headSize() {
      if (this.width === "hero") {
        return "xl:text-52";
      } else {
        return "xl:text-40";
      }
    },
    headWidth() {
      if (this.width === "hero") {
        return " xl:w-670";
      } else if (this.width === "category") {
        return " xl:w-460";
      } else if (this.width === "gallery") {
        return "xl:w-370";
      } else if (this.width === "review") {
        return "xl:w-360";
      } else if (this.width === "help") {
        return "xl:w-555";
      } else {
        return "";
      }
    },
    textWidth() {
      if (this.width === "hero") {
        return " xl:w-380";
      } else if (this.width === "space") {
        return " xl:w-475";
      } else {
        return "xl:w-full";
      }
    },
    textSize() {
      if (this.width === "hero") {
        return " xl:text-20";
      } else {
        return "xl:text-18";
      }
    },
    margin() {
      if (this.flex === "true") {
        return "";
      } else if (this.flex === "false") {
        return "xl:mx-auto";
      } else {
        return "";
      }
    },
    flexClass() {
      if (this.flex === "true") {
        return "xl:flex";
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