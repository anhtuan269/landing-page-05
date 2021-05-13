<template>
  <div class="bg-blue-02 pt-10 ">
    <div class="max-w-400 mx-auto md:max-w-2xl xl:max-w-1110 xl:flex xl:justify-between xl:items-center acer:max-w-1300 2xl:max-w-1500">
      <div class="head xl:w-3/12">
      <Heading
        v-for="(head, index) in heading"
        :key="index"
        v-show="head.type === 'offer'"
        :head="head"
        :text="text"
      />
      <div class="relative flex items-center mb-10">
        <div class="relative mr-5 insta group cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="group-hover:opacity-0 duration-500 ease-linear"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 12C2 7.80863 2 5.71294 3.05041 4.26718C3.38964 3.80026 3.80026 3.38964 4.26718 3.05041C5.71294 2 7.80863 2 12 2C16.1914 2 18.2871 2 19.7328 3.05041C20.1997 3.38964 20.6104 3.80026 20.9496 4.26718C22 5.71294 22 7.80863 22 12C22 16.1914 22 18.2871 20.9496 19.7328C20.6104 20.1997 20.1997 20.6104 19.7328 20.9496C18.2871 22 16.1914 22 12 22C7.80863 22 5.71294 22 4.26718 20.9496C3.80026 20.6104 3.38964 20.1997 3.05041 19.7328C2 18.2871 2 16.1914 2 12ZM12 6.70588C9.07632 6.70588 6.70588 9.07632 6.70588 12C6.70588 14.9237 9.07632 17.2941 12 17.2941C14.9237 17.2941 17.2941 14.9237 17.2941 12C17.2941 9.07632 14.9237 6.70588 12 6.70588ZM12 15.3088C10.1762 15.3088 8.69118 13.8238 8.69118 12C8.69118 10.1749 10.1762 8.69118 12 8.69118C13.8238 8.69118 15.3088 10.1749 15.3088 12C15.3088 13.8238 13.8238 15.3088 12 15.3088ZM18.3966 6.30883C18.3966 6.69844 18.0808 7.01427 17.6912 7.01427C17.3016 7.01427 16.9857 6.69844 16.9857 6.30883C16.9857 5.91923 17.3016 5.60339 17.6912 5.60339C18.0808 5.60339 18.3966 5.91923 18.3966 6.30883Z"
              fill="white"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-0 opacity-0 group-hover:opacity-100 duration-500 ease-linear"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 12C2 7.80863 2 5.71294 3.05041 4.26718C3.38964 3.80026 3.80026 3.38964 4.26718 3.05041C5.71294 2 7.80863 2 12 2C16.1914 2 18.2871 2 19.7328 3.05041C20.1997 3.38964 20.6104 3.80026 20.9496 4.26718C22 5.71294 22 7.80863 22 12C22 16.1914 22 18.2871 20.9496 19.7328C20.6104 20.1997 20.1997 20.6104 19.7328 20.9496C18.2871 22 16.1914 22 12 22C7.80863 22 5.71294 22 4.26718 20.9496C3.80026 20.6104 3.38964 20.1997 3.05041 19.7328C2 18.2871 2 16.1914 2 12ZM12 6.70588C9.07632 6.70588 6.70588 9.07632 6.70588 12C6.70588 14.9237 9.07632 17.2941 12 17.2941C14.9237 17.2941 17.2941 14.9237 17.2941 12C17.2941 9.07632 14.9237 6.70588 12 6.70588ZM12 15.3088C10.1762 15.3088 8.69118 13.8238 8.69118 12C8.69118 10.1749 10.1762 8.69118 12 8.69118C13.8238 8.69118 15.3088 10.1749 15.3088 12C15.3088 13.8238 13.8238 15.3088 12 15.3088ZM18.3966 6.30883C18.3966 6.69844 18.0808 7.01427 17.6912 7.01427C17.3016 7.01427 16.9857 6.69844 16.9857 6.30883C16.9857 5.91923 17.3016 5.60339 17.6912 5.60339C18.0808 5.60339 18.3966 5.91923 18.3966 6.30883Z"
              fill="#FF5722"
            />
          </svg>
        </div>
        <div class="relative mr-5 group cursor-pointer subtract">
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="group-hover:opacity-0 duration-500 ease-linear"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.3903 1.11407C22.4182 1.39093 23.2288 2.20135 23.5055 3.22948C24.0197 5.1074 23.9999 9.02181 23.9999 9.02181C23.9999 9.02181 23.9999 12.9163 23.5057 14.7944C23.2288 15.8223 22.4184 16.6329 21.3903 16.9096C19.5122 17.404 12 17.404 12 17.404C12 17.404 4.50731 17.404 2.60961 16.89C1.58148 16.6131 0.771054 15.8025 0.4942 14.7746C0 12.9163 0 9.00203 0 9.00203C0 9.00203 0 5.1074 0.4942 3.22948C0.770871 2.20153 1.60125 1.37115 2.60943 1.09448C4.48753 0.600098 11.9998 0.600098 11.9998 0.600098C11.9998 0.600098 19.5122 0.600098 21.3903 1.11407ZM15.8549 9.00207L9.60788 12.6001V5.40404L15.8549 9.00207Z"
              fill="white"
            />
          </svg>
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-0 opacity-0 group-hover:opacity-100 duration-500 ease-linear"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.3903 1.11407C22.4182 1.39093 23.2288 2.20135 23.5055 3.22948C24.0197 5.1074 23.9999 9.02181 23.9999 9.02181C23.9999 9.02181 23.9999 12.9163 23.5057 14.7944C23.2288 15.8223 22.4184 16.6329 21.3903 16.9096C19.5122 17.404 12 17.404 12 17.404C12 17.404 4.50731 17.404 2.60961 16.89C1.58148 16.6131 0.771054 15.8025 0.4942 14.7746C0 12.9163 0 9.00203 0 9.00203C0 9.00203 0 5.1074 0.4942 3.22948C0.770871 2.20153 1.60125 1.37115 2.60943 1.09448C4.48753 0.600098 11.9998 0.600098 11.9998 0.600098C11.9998 0.600098 19.5122 0.600098 21.3903 1.11407ZM15.8549 9.00207L9.60788 12.6001V5.40404L15.8549 9.00207Z"
              fill="#FF5722"
            />
          </svg>
        </div>
        <div class="relative mr-5 group cursor-pointer facebook">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="group-hover:opacity-0 duration-500 ease-linear"
          >
            <path
              d="M17.5629 1.00458L14.7857 1C11.6655 1 9.64912 3.12509 9.64912 6.41423V8.91055H6.85671C6.61541 8.91055 6.42001 9.1115 6.42001 9.35937V12.9763C6.42001 13.2241 6.61564 13.4249 6.85671 13.4249H9.64912V22.5514C9.64912 22.7993 9.84452 23 10.0858 23H13.7291C13.9704 23 14.1658 22.799 14.1658 22.5514V13.4249H17.4308C17.6721 13.4249 17.8675 13.2241 17.8675 12.9763L17.8688 9.35937C17.8688 9.24036 17.8227 9.12638 17.741 9.04215C17.6592 8.95793 17.5478 8.91055 17.4319 8.91055H14.1658V6.79439C14.1658 5.77727 14.4018 5.26094 15.6916 5.26094L17.5625 5.26025C17.8036 5.26025 17.999 5.0593 17.999 4.81166V1.45317C17.999 1.20576 17.8038 1.00504 17.5629 1.00458Z"
              fill="white"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-0 opacity-0 group-hover:opacity-100 duration-500 ease-linear"
          >
            <path
              d="M17.5629 1.00458L14.7857 1C11.6655 1 9.64912 3.12509 9.64912 6.41423V8.91055H6.85671C6.61541 8.91055 6.42001 9.1115 6.42001 9.35937V12.9763C6.42001 13.2241 6.61564 13.4249 6.85671 13.4249H9.64912V22.5514C9.64912 22.7993 9.84452 23 10.0858 23H13.7291C13.9704 23 14.1658 22.799 14.1658 22.5514V13.4249H17.4308C17.6721 13.4249 17.8675 13.2241 17.8675 12.9763L17.8688 9.35937C17.8688 9.24036 17.8227 9.12638 17.741 9.04215C17.6592 8.95793 17.5478 8.91055 17.4319 8.91055H14.1658V6.79439C14.1658 5.77727 14.4018 5.26094 15.6916 5.26094L17.5625 5.26025C17.8036 5.26025 17.999 5.0593 17.999 4.81166V1.45317C17.999 1.20576 17.8038 1.00504 17.5629 1.00458Z"
              fill="#FF5722"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="content text-white text-center md:flex md:justify-between md:text-left xl:w-8/12" >
      <div class="col w-1/4 mb-10">
        <Title
          class="menu"
          v-for="(item, index) in title"
          :key="index"
          :item="item"
          v-show="item.type === 'space'"
        />
        <Link
          v-for="(item, index) in textLink"
          :key="index"
          :item="item"
          v-show="item.type === 'space'"
        />
      </div>
      <div class="col w-1/4 mb-10">
        <Title
          class="menu"
          v-for="(item, index) in title"
          :key="index"
          :item="item"
          v-show="item.type === 'Company'"
        />
        <Link
          v-for="(item, index) in textLink"
          :key="index"
          :item="item"
          v-show="item.type === 'Company'"
        />
      </div>
      <div class="col w-1/4 mb-10">
        <Title
          class="menu"
          v-for="(item, index) in title"
          :key="index"
          :item="item"
          v-show="item.type === 'Support'"
        />
        <Link
          v-for="(item, index) in textLink"
          :key="index"
          :item="item"
          v-show="item.type === 'Support'"
        />
      </div>
      <div class="col w-1/4 mb-10">
        <Title
          class="menu"
          v-for="(item, index) in title"
          :key="index"
          :item="item"
          v-show="item.type === 'Contact'"
        />
        <Link
          v-for="(item, index) in textLink"
          :key="index"
          :item="item"
          v-show="item.type === 'Contact'"
        />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
import Title from "@/components/Footer_title";
import Link from "@/components/Footer_link";
export default {
  data() {
    return {
      heading: [],
      title: [],
      textLink: [],
      text: "white",
      color: "white",
    };
  },
  components: {
    Heading,
    Title,
    Link,
  },
  async fetch() {
    this.heading = await fetch("http://localhost:3000/heading").then((res) => {
      return res.json();
    });
    this.title = await fetch(" http://localhost:3000/footerTitle").then(
      (res) => {
        return res.json();
      }
    );
    this.textLink = await fetch(" http://localhost:3000/footerText").then(
      (res) => {
        return res.json();
      }
    );
  },
};
</script>

<style>
</style>