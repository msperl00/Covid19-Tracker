<template>
  <div class="bg-gray-600 relative flex flex-row-reverse h-32	">
   
    <div class="flex-initial w-32 mx-1 my-1 bg-red-200">
      02
    </div>
    <div class="flex-initial w-32  mx-1  my-1 bg-red-200">
      03
    </div>
    <div class=" grow  mx-1 bg-red-200 my-1">
       <h2
          class="fa-regular block tracking-wider   lg:text-2xl text-white leading-4 mb-1  sm:leading-10 sm:my-5 md:leading-10 md:my-5 md:text-xl italic sm:text-xl"
        >Ready to track Covid-19</h2>
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