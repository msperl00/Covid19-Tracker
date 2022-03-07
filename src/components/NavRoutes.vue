<template>
  <div class="bg-gray-800 pt-8 pb-8 relative z-10">
    <div
      v-if="home"
      class="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between "
    >
      <div  class="flex-col flex lg:flex-row items-start lg:items-center">
        <h2
          class="fa-regular block tracking-wider text-white leading-4 mb-1 text-4xl sm:leading-10 sm:my-5 italic"
        >Ready to track Covid-19</h2>
        <!-- <img class="" src="../../public/images/interrogacion.png" alt="interrogacion" /> -->
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
</template>

<script>
import ButtonRepo from "@/components/ButtonRepo.vue";
export default {
  name: "NavRoutes",
  components: {
    ButtonRepo
  },
  setup() {

    const home = true;
    return {home}
  }
}
</script>

<style lang="scss" scoped>
</style>