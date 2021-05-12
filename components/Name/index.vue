<template>
  <div class="flex items-center my-2 font-Lato">
    <p class="font-medium text-18">{{ head.name }}</p>
    <span
      class="w-20 h-n-1 ml-3 relative top-n-1"
      :class="backgroundColor"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    head: {
      type: Object,
      require: true,
      default: {
        type: "introduce",
        name: "introducing",
        span: "Revolutionary",
        title: "co-working space to realize your innovation",
        description:
          "In frispes, we spearhead new initiatives and provide mentorship to a new startup, and help grow their opportunities in key local, regional and global markets",
        id: 1,
      },
      color: {
        type: String,
        require:true,
        default() {
          return "black";
        },
      },
    },
  },
  computed: {
    backgroundColor() {
      if (this.color === "white") {
        return "bg-white";
      } else  {
        return "bg-black-01";
      }
    },
  },
};
</script>

<style>
</style>