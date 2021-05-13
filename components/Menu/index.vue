<template>
  <ul class="flex justify-center items-center ml-20">
      <li v-for="(item, index) in menu"
      :key="index"
      class=""
      >
      <nuxt-link :to="item.link" class="px-5 py-3  text-16 font-Lato font-bold leading-7 text-black-01 hover:bg-orange hover:text-white duration-500 ease-linear">
          {{item.text}}
      </nuxt-link>
      </li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            menu:[]
        }
    },
    async fetch() {
        this.menu = await fetch('http://localhost:3000/menu').then((res) => res.json())
    }
}
</script>

<style scoped>
a.nuxt-link-exact-active {
    background-color:#FF5722;
    color:#fff;
}
</style>