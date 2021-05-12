<template>
  <div class="event mb-10 bg-white ">
      <div class="card">
          <img :src="item.url" alt="" class="w-400 md:w-330">
         <div class="content p-4 ">
              <h3 class="title text-20 leading-7 text-black-01 w-250 mb-3">{{item.title}}</h3>
          <p class="name text-16 leading-7 text-gray-02">{{item.name}}</p>
         </div>
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