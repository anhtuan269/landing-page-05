<template>
  <div class="item">
    <div class="image group relative cursor-pointer h-n-470 w-400 md:w-330 xl:w-340">
      <img
        class="w-full group-hover:opacity-0 group-hover:absolute duration-500 ease-linear z-a h-n-420"
        :src="item.url"
        alt=""
      />
      <p class="text-20 font-bold font-Lato text-black-01 mt-5 text-center">{{item.name}}</p>

      <img
        :src="item.hover"
        alt=""
        class="absolute opacity-0 group-hover:opacity-100 top-0 duration-500 ease-linear w-full transform h-n-470"
      />
      <img
        :src="item.mask"
        alt=""
        class="absolute opacity-0 group-hover:opacity-100 right-0 top-0 duration-500 ease-linear"
      />
      <div
        class="content absolute opacity-0 group-hover:opacity-100 duration-500 ease-linear top-1/4  text-center w-330  left-2/4 -translate-x-2/4 transform translate-y-5"
      >
        <h3 class="text-28 text-white leading-8 tracking-widest mb-4">{{ item.title }}</h3>
        <p class="text-16 text-white leading-8 w-250 mx-auto">{{ item.description }}</p>
      </div>
      <button class="absolute group-hover:opacity-0 duration-100 ease-linear left-0 bottom-n-50 bg-orange p-2">
        <img src="@/static/image/right.png" alt="">
      </button>
      <div
        class="button absolute bottom-0 left-0 flex items-center opacity-0 group-hover:opacity-100 bg-orange py-3 px-5 text-white"
      >
        <p class="">Check avaibility</p>
        <img src="@/static/image/right.png" alt="" class="" />
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
  }
   
};
</script>

<style>
</style>