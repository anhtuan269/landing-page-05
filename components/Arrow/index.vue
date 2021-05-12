<template>
  <div class="nav flex items-center justify-center focus:outline-none">
    <button @click="showPrev"  class="focus:outline-none">
      <img src="@/static/image/left.png" alt="" class="w-10" />
    </button>
    <button @click="showNext"  class="focus:outline-none ml-4">
      <img src="@/static/image/next.png" class="w-16"  />
    </button>
  </div>
</template>

<script>
export default {
     methods: {
    showNext() {
      this.$emit('next');
    },
    showPrev() {
      this.$emit('prev');
    },
  },
};
</script>

<style>
</style>