<template>
  <div class="bg-slate-100">
    <div
      class="grid grid-cols-2 py-5 content-center items-center md:items-center md:justify-between sm:items-center sm:content-center sm:text-center sm:justify-between "
    >
    <div>
        <h2
        class="font-light tracking-wide text-gray-900 text-4xl sm:leading-10 italic sm:my-5"
      >
        Ready to track Covid-19? 
        <br />
      </h2>
    </div>
      <!-- flex-shrink-0 and mt-0 -->
      <div class="mx-20">
        <div class="inline-flex rounded-md lg:mt-0 lg:flex-shrink-0 mx-20">
          <router-link
            to="/trackerDetails"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading- text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none sm:py-3"
          >Go track</router-link>
          <ButtonRepo />
        </div>
        
      </div>
    </div>
  </div>
  <div class="h-screen-map flex flex-col">
    <div class='relative flex flex-grow'>
        <nav class='bg-white shadow-sm p-6 space-y-6 w-64'> Navbar </nav>
          <Map />
    </div>

</div>
 
    

<!--   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="mySpinner.val = !mySpinner.val">Spinner</button>
 --></template>

<script >
import ButtonRepo from "@/components/ButtonRepo.vue";
import Map from "@/components/Map.vue"
import Spinner from "@/components/Spinner.vue";
import { reactive, toRefs, ref, inject, onMounted} from 'vue'


export default {
  name: "Home",
  inject: ['mySpinner'],
  components: {
    Spinner, ButtonRepo, Map
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
