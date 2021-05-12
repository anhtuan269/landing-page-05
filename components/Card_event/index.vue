<template>
  <div class="event mb-10 bg-white">
      <div class="card">
          <img :src="item.url" alt="" class="w-400">
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