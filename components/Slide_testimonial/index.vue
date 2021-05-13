<template>
<div class=" bg-blue-01 p-10  max-w-400 text-white h-n-400 relative font-Lato md:max-w-330 xl:max-w-380">
    <div class="content">
        <p class="text-16 leading-7">{{item.review}}</p>
    </div>
    <div class="auth absolute bottom-10 flex items-center ">
        <img :src="item.url" alt="">
       <div class="contact ml-3">
            <p class="name text-18 leading-7 font-bold">{{item.name}}</p>
        <p class="position text-16 leading-7 ">{{item.position}}</p>
       </div>
    </div>
</div>
  
</template>

<script>
export default {
    props: {
        item: {
            type:Object
        }
    }

}
</script>

<style>

</style>