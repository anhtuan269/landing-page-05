<template>
  <div class="question group">
    <div class="card bg-white relative p-10 text-center w-full h-n-160 mb-14 group-hover:bg-orange duration-500 ease-in-out shadow-2xl">
      <p class="text-20 leading-7 group-hover:text-white duration-500 ease-in-out ">{{ item.text }}</p>
      <div class=" p-4 bg-orange absolute -bottom-0 left-2/4 transform -translate-x-2/4 translate-y-5 shadow-2xl group-hover:opacity-0 duration-500 ease-in-out">
          <svg
      class=" fill-current text-blue-01  "
        width="12"
        height="12"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.00501 7.4C5.78501 7.4 5.58501 7.31999 5.42501 7.15999L0.425009 1.95999C0.125009 1.63999 0.125004 1.14 0.445004 0.819998C0.765004 0.519998 1.26502 0.519999 1.58502 0.839999L6.00501 5.44L10.425 0.839999C10.725 0.519999 11.245 0.519998 11.565 0.819998C11.885 1.12 11.885 1.63999 11.585 1.95999L6.58502 7.15999C6.42502 7.31999 6.22501 7.4 6.00501 7.4Z"
          fill="white"
        />
      </svg>
      </div>
       <div class=" p-4 bg-white absolute -bottom-0 opacity-0 left-2/4 transform -translate-x-2/4 translate-y-5 shadow-2xl duration-500 ease-in-out group-hover:opacity-100">
          <svg
      class=" fill-current text-blue-01  "
        width="12"
        height="12"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.00501 7.4C5.78501 7.4 5.58501 7.31999 5.42501 7.15999L0.425009 1.95999C0.125009 1.63999 0.125004 1.14 0.445004 0.819998C0.765004 0.519998 1.26502 0.519999 1.58502 0.839999L6.00501 5.44L10.425 0.839999C10.725 0.519999 11.245 0.519998 11.565 0.819998C11.885 1.12 11.885 1.63999 11.585 1.95999L6.58502 7.15999C6.42502 7.31999 6.22501 7.4 6.00501 7.4Z"
          fill="#FF5722"
        />
      </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style scoped>
img:hover svg {
  fill: #5454d4;
}
</style>