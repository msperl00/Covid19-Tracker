<template>
  
  
    <div
      class="mx-auto max-w-screen-xl  sm:px-4 lg:flex lg:justify-between md:flex md:justify-between lg:py-6 lg:px-8 md:py-6 md:px-8"
    >
      <h2
        class="text-3xl font-extrabold  leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Global Tracker
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
  <Tracker />

</template>
<script>
import Tracker from '../components/Tracker.vue'

export default {
    name: 'GlobalDetails',
    components: {Tracker},

}
</script>

<style>

</style>