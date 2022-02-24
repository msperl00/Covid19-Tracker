<script >
import ButtonRepo from "@/components/ButtonRepo.vue";
import Spinner from "@/components/Spinner.vue";
import { reactive, toRefs, ref, inject, onMounted} from 'vue'
export default {
  name: "Home",
  inject: ['mySpinner'],
  components: {
    Spinner, ButtonRepo
  },
    setup () {
     
      const inj = inject('mySpinner')
      console.log('Using Inject '+inj.val);
      onMounted(() => {
        setTimeout(() => {
          inj.val = false;
        },1800)
      });
      return {
        inj
      }
    },
    
  
};
</script>
<template>
  <div class="bg-slate-100">
    <div
      class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-6 lg:px-8 md:flex md:items-center md:justify-between md:py-6 md:px-8"
    >
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Ready to track covid? 
        <br />
      </h2>
      <!-- flex-shrink-0 and mt-0 -->
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/trackerDetails"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading- text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
          >Go track</router-link>
        </div>
        <ButtonRepo />
      </div>
    </div>
  </div>
<!--   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="mySpinner.val = !mySpinner.val">Spinner</button>
 --></template>
