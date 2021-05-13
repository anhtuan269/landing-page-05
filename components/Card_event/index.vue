<template>
  <div class="event mb-10 bg-white">
      <div class="card">
          <img :src="item.url" alt="" class="w-400 md:w-330 xl:w-full acer:h-n-400  overflow-y-hidden">
      </div>
  </div>
</template>

<script>
export default {
    props: {
        item: {
        type: Object,

        }
    },

}
</script>

<style>

</style>