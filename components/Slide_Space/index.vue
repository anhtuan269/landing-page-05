<template>
  <div class="item h-n-600">
    <div class="image">
      <img :src="item.url" alt="" class="w-400 h-n-350 duration-200 md:w-330" />
    </div>
  </div>
</template>

<script>
export default {
 props: {
        item: {
            type:Object
        }
    }
};
</script>

<style scoped>
.slick-slide.slick-active.slick-current img {
  height:600px;
}
</style>