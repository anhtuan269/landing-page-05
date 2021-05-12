<template>
  <ul>
    <li>
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