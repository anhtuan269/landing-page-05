<template>
  <div class="member flex items-center js">
      <div class="head" v-for="(head,index) in heading" :key="index" v-show="head.type==='member'">
          <Name :head="head"/>
          <Heading :head="head" />
          <button>SIGN UP NOW</button>
      </div>
      <div class="relative">
          <img src="@/static/image/member.png" alt="" class="z-20">
          <img src="@/static/image/Pattern.png" alt="" class="absolute top-0 z-0">
      </div>
      
  </div>
</template>

<script>
import Heading from '@/components/Heading'
import Name from '@/components/Name'
export default {
    data() {
        return {
            heading:[]
        }
    },
    components: {
        Heading,
        Name
    },
    async fetch() {
        this.heading = await fetch("http://localhost:3000/heading").then((res) => {
            return res.json();
        });
    }

}
</script>

<style>

</style>