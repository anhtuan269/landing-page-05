<template>
  <ul>
    <li class="py-2 text-16 leading-18 font-Lato transform hover:translate-x-2 duration-500 ease-linear">
      <nuxt-link :to="item.link">{{ item.text }}</nuxt-link>
    </li>
  </ul>
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

<style>
</style>