<template>
  <div class="bg-gray-600 relative flex flex-row-reverse h-32	">

    <div class="flex-initial flex w-72 mx-1 my-1 flexstart min-w-full sm:min-w-0">
      <div class="inline-flex">
        <router-link to="/trackerDetails"
          class="inline-flex  tracking-wider rounded-md  border border-transparent btn text-base ">
          Go track</router-link>
        <ButtonRepo />
      </div>
    </div>
    <div class="flex-initial w-64  mx-1  my-1 "><!-- WhiteSpace --></div>
    <div class="grow  mx-1  my-1 flexstart pl-12 md:flex">
      <p class="block tracking-wide sm:text-3xl md:text-4xl font-bold lg:text-5xl text-white leading-10 italic">Ready to track Covid-19</p>
      <button
        class="lg:block items-center justify-center mx-10 py-3 text-base tracking-wider hidden ">
        <img class="" src="../../public/images/information.png" alt="información" />
      </button>
    </div>
  </div>

</template>

<script>
import ButtonRepo from "@/components/ButtonRepo.vue";
import { reactive, toRefs, ref, inject, onMounted } from 'vue'

export default {
  name: "NavRoutes",
  components: {
    ButtonRepo
  },
  setup() {
    const home = true;

    return { home }
  },
}
</script>

<style>
</style>

