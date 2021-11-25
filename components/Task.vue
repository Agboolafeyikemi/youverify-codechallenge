<template>
  <div class="py-5 px-4 flex border-b">
    <div class="">
      <div
        class="bg-primary rounded-full w-8 h-8 flex justify-center items-center"
      >
        <i class="text-white el-icon-plus font-black"></i>
      </div>
      <span class="text-grayLighter text-sm">Assign Agent</span>
    </div>
    <div class="flex items-center justify-between w-full">
      <div class="w-11/12 text-sm">
        <h1 class="">Abiodun Olawale Solomon</h1>
        <p class="text-grayLight mt-1">12b Emmanuel Hign street, Sur...</p>
        <div class="flex mt-1">
          <BankLogo />
          <span class="ml-2 text-grayLight">Sterling Bank PLC</span>
        </div>
        <p class="mt-4 text-blue-500">A day Ago</p>
      </div>
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
import BankLogo from "../assets/icons/bank-icon.vue";
export default {
  components: {
    BankLogo,
  },
};
</script>

<style></style>
