<template>
  <div class="header max-w-400 pt-10 mx-auto md:max-w-2xl xl:max-w-1110 acer:max-w-1300 2xl:max-w-1500">
    <div class="flex items-center justify-between">
      <div class="logo" v-for="(item, index) in logo" :key="index">
        <nuxt-link :to="item.link">
          <img :src="item.url" :alt="item.alt" />
        </nuxt-link>
      </div>
      <Menu class=" hidden xl:flex" />
      <div class="signin">
        <button
          v-for="(item, index) in login"
          :key="index"
          v-show="item.type === 'login'"
          class="text-orange font-bold text-16 bg-gray-100 py-2 font-Lato px-6 hover:text-white hover:bg-orange duration-500 ease-linear focus:outline-none "
        >
          {{ item.text }}
        </button>
        <button
          v-for="(item, index) in login"
          :key="index"
          v-show="item.type === 'signup'"
           class="text-white font-bold text-16 bg-orange font-Lato py-2 px-6 hover:bg-red-500 duration-500 ease-linear  focus:outline-none"
        >
          {{ item.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  data() {
    return {
      logo: [],
      login: [],
    };
  },
  async fetch() {
    this.logo = await fetch("http://localhost:3000/logo").then((res) =>
      res.json()
    );
    this.login = await fetch("http://localhost:3000/auth").then((res) =>
      res.json()
    );
  },
  components: {
    Menu,
  },
};
</script>

<style>
</style>