<template>
  <div class="event">
      <div class="card  mb-10 bg-white p-5">
         <h3 class="title text-28 leading-9 font-bold mb-6  ">
             {{item.title}}
         </h3>
         <p class="text-16 text-gray-02 mb-10">{{item.description}}</p>
         <div class="author flex items-center">
             <img :src="item.avatar" alt="">
             <div class="content ml-6">
                 <h5 class="name text-18 leading-7 font-medium font-Lato">{{item.name}}</h5>
                 <h4 class="position text-16 leading-7 text-gray-02">{{item.position}}</h4>
             </div>
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