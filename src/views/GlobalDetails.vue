<template>
  <div class="bg-gray-800 pt-8 relative z-10">
    <div
      class="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between "
    >
    <div>
 <h2
        class="fa-regular block tracking-wider text-white leading-4 mb-1 text-4xl sm:leading-10 sm:my-5 italic"
      >
        {{ title }}
        <!-- TODO -> Date -->
        <br />
      </h2>
      <Clock/>
    </div>
      <div class="mx-20 inline-flex rounded-md lg:mt-0 lg:flex-shrink-0 mb-6">
          <router-link
            to="/"
            class=" mx-5 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
          >Go back</router-link>
        </div>
    </div> 
    
  </div>
    <div class="flex flex-col">
    <div class='flex flex-grow'>
      <Sidebar />
      <div class="mt-10 min-h-screen">
    <Tracker @customChange="log" />
  </div>
    </div>
    
</div>

  
</template>
<script>
import Tracker from '../components/Tracker.vue'
import Clock from '../components/Clock.vue'
import Sidebar from '../components/Sidebar.vue'
import { ref, onMounted, inject, onBeforeUpdate, onBeforeMount, computed } from 'vue'

export default {
  name: 'GlobalDetails',
  components: { Tracker, Clock, Sidebar },
  setup() {

    let title = ref('Global details');

    function log(event) {
      console.log('New country details -> ' + event);
      title.value = event;
    }

    return { title, log }
  }

}
</script>

<style>
</style>