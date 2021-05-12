<template>
  <div class="img">
      <img :src="item.url" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style>
</style>