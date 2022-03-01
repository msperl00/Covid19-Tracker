<template>
    <div
      class="mx-auto max-w-screen-xl  sm:px-4 lg:flex lg:justify-between md:flex md:justify-between lg:py-6 lg:px-8 md:py-6 md:px-8"
    >
      <h2
        class="text-3xl  italic font-extrabold  leading-9 tracking-wider text-gray-900 sm:text-4xl sm:leading-10"
      >
        {{title}} <Clock /> 
        <!-- TODO -> Date -->
        <br />
      </h2>
      <div class="hidden w-full md:block md:w-auto">
        <div class="inline-flex rounded-md shadow md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <router-link
            to="/"
            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
            >Go back</router-link
          >

        </div>
      </div>
    </div>
    <div>
      <Tracker @customChange="log"/>
    </div>
</template>
<script>
import Tracker from '../components/Tracker.vue'
import Clock from '../components/Clock.vue'
import { ref, onMounted, inject, onBeforeUpdate,onBeforeMount, computed} from 'vue'

export default {
    name: 'GlobalDetails',
    components: {Tracker, Clock},
    setup(){

      let title = ref('Global details');

      function log(event) {
          console.log('New country details -> '+event);
          title.value = event;
      }

      return {title, log}
    }
    
}
</script>

<style>

</style>