
<template>
  <div class="bg-slate-100">
    <div
      class="bg-slate-100 mx-auto max-w-screen-xl px-5 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-6 lg:px-8  md:flex md:items-center md:justify-between md:py-6 md:px-8"
    >
    <div class="container flex">
       <h2
        class="text-3xl font-extrabold  leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
      <i class="fa fa-viruses mr-3 h-10 mb-3"></i>
        Documentation
        
        <p class="text-lg font-light ml-16">Api by <a class="text-indigo-500" href="https://disease.sh/">covid19Api</a></p>
        
      </h2>
      <button @click="toggle">       
      <img class="ml-5" src="../../public/images/information.png" alt="información" />
      </button>
    </div>
      <div id="BackHome" class="mt-8 flex lg:mt-0 lg:flex-shrink-0 ">
        <div class="inline-flex rounded-md shadow md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <router-link
            to="/"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
            >Back Home</router-link
          >
        </div>
        <ButtonRepo />
      </div>
    </div>
  </div>
   <div class="mt-10 min-h-screen">
   
  </div>
  
</template>

<script>
import ButtonRepo from '@/components/ButtonRepo.vue'

import { ref, onMounted, inject, onBeforeUpdate,onBeforeMount, computed, reactive} from 'vue'

 export default {
   components: {
     ButtonRepo
   },
   setup(){
     const loading = inject('mySpinner');
      onMounted(() => {
        loading.val = false;
      })
     

      

   },
  }

</script>

<style lang="scss" scoped>

</style>
