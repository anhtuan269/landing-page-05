<template>
<div class="count grid grid-cols-2 md transform md:-translate-x-10 "
>
    <div class="item flex justify-end mb-10  "
    v-for="(item,index) in content"
    :key="index"
    >
        <div class="icon  ">
            <img class="" :src="item.url" alt="" >
        </div>
        <div class="content ml-4 w-2/4 md:ml-10">
            <h2 class="text-28 leading-8">{{item.counting}}</h2>
            <p class="text-16 text-gray-01 mt-2 leading-6 ">{{item.space}}</p>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    data() {
        return {
            content: []
        }
    },
    async fetch() {
        this.content = await fetch('http://localhost:3000/counting').then(((res) => {
            return res.json()
        }))
    }

}
</script>

<style>

</style>