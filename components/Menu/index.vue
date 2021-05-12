<template>
  <ul class="flex justify-center items-center">
      <li v-for="(item, index) in menu"
      :key="index"
      >
      <nuxt-link :to="item.link">
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

<style>

</style>