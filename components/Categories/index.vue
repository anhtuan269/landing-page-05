<template>
  <div class="left">
      <ul>
    <li @click="click" class="p-6 group hover:bg-orange duration-500 ease-in-out cursor-pointer ">
      <nuxt-link to="/" class=" text-16 font-bold ease-in-out duration-500 group-hover:text-white" >
        {{ item.text }}
      </nuxt-link>
    </li>
  </ul>
  
  </div>
</template>

<script>
export default {
    props: {
        item: {
            type:Object
        },
        index:{
            type:Number
        },
        total:{
            type:Number
        }
    },
    methods: {
      click() {
        this.$emit('event', this.index)
        console.log(this.index)
      }
    }
};
</script>

<style>
</style>