<template>
  <div class="bg-gray-800 pt-8 pb-8 relative z-10">
    <div
      v-if="home"
      class="container px-6 mx-auto flex flex-col items-start lg:flex-row lg:items-center md:flex-row md:items-center justify-between "
    >
      <div  class="flex-col flex lg:flex-row md:flex-row lg:items-center items-start lg:items-center">
        
        <h2
          class="fa-regular block tracking-wider   lg:text-2xl text-white leading-4 mb-1  sm:leading-10 sm:my-5 md:leading-10 md:my-5 md:text-xl italic sm:text-xl"
        >Ready to track Covid-19</h2>
         <button class="mx-5 inline-flex items-center justify-center rounded-full border border-transparent  px-5 py-3 text-base tracking-wider text-white transition duration-150 ease-in-out  focus:outline-none sm:py-3">
            <img class="" src="../../public/images/information.png" alt="información" />
      </button>
        <!-- <img class="" src="../../public/images/interrogacion.png" alt="interrogacion" /> -->
      </div>
      <!-- flex-shrink-0 and mt-0 -->
      <div class="mx-20 inline-flex ">
        <div class="inline-flex rounded-md lg:mt-0 lg:flex-shrink-0 ">
          <router-link
            to="/trackerDetails"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-800 px-5 py-3 text-base font-medium leading- text-white transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none sm:py-3"
          >Go track</router-link>
        </div>
         <ButtonRepo />
        
      </div>
    </div>
  </div>
  
</template>

<script>
import ButtonRepo from "@/components/ButtonRepo.vue";
import Drawer from "vue-simple-drawer"
import { reactive, toRefs, ref, inject, onMounted} from 'vue'

export default {
  name: "NavRoutes",
  components: {
    ButtonRepo
  },
  setup() {
    const home = true;
 
    return {home}
  },
}
</script>

<style>
</style>