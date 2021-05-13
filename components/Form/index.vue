<template>
  <div class="block">
    <div class="form  bg-blue-01 text-white p-10 mb-10 xl:w-440 ">
      <form action="">
        <h3
          v-for="(item, index) in form"
          :key="index"
          v-show="item.type === 'title'"
          class="text-28 font-bold leading-8 mb-5 xl:text-34"
        >
          {{ item.title }}
        </h3>
        <div
          class="form-control bg-blue-02 py-2 px-4 mb-5 font-Lato"
          v-for="(item, index) in form"
          :key="index"
          v-show="item.type === 'location'"
        >
          <label for="" class="block pl-1 text-gray-01 transform capitalize tracking-wide font-semibold text-16 leading-6">{{ item.label }}</label>
          <select name="" id="" class="bg-blue-02 w-full focus:outline-none">
            <option :value="item.option_1">{{ item.option_1 }}</option>
            <option :value="item.option_2">{{ item.option_2 }}</option>
            <option :value="item.option_3">{{ item.option_3 }}</option>
            <option :value="item.option_4">{{ item.option_4 }}</option>
          </select>
        </div>
        <div
          class="form-control  bg-blue-02 py-2 px-4 mb-5 font-Lato"
          v-for="(item, index) in form"
          :key="index"
          v-show="item.type === 'type'"
        >
          <label for=""
           class="block pl-1 text-gray-01 transform capitalize tracking-wide font-semibold text-16 leading-6"
          >{{ item.label }}</label>
          <select name="" id="" class="bg-blue-02 w-full focus:outline-none">
            <option :value="item.option_1">{{ item.option_1 }}</option>
            <option :value="item.option_2">{{ item.option_2 }}</option>
            <option :value="item.option_3">{{ item.option_3 }}</option>
            <option :value="item.option_4">{{ item.option_4 }}</option>
          </select>
        </div>
        <div
          class="form-control  bg-blue-02 py-2 px-4 mb-5 font-Lato"
          v-for="(item, index) in form"
          :key="index"
          v-show="item.type === 'date'"
        >
          <label for=""
           class="block pl-1 text-gray-01 transform capitalize tracking-wide font-semibold text-16 leading-6"
          >{{ item.label }}</label>
          <select name="" id="" class="bg-blue-02 w-full focus:outline-none">
            <option :value="item.option_1">{{ item.option_1 }}</option>
            <option :value="item.option_2">{{ item.option_2 }}</option>
            <option :value="item.option_3">{{ item.option_3 }}</option>
            <option :value="item.option_4">{{ item.option_4 }}</option>
          </select>
        </div>
        <button
          v-for="(item, index) in form"
          :key="index"
          v-show="item.type === 'button'"
          class="bg-orange w-full py-3 text-center text-18 leading-5 font-bold hover:bg-blue-01 hover:text-white duration-500 ease-linear"
        >
          {{ item.text }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: [],
    };
  },
  async fetch() {
    this.form = await fetch("http://localhost:3000/select").then((res) => {
      return res.json();
    });
  },
};
</script>

<style>
</style>