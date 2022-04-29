<template>
  <div v-if="flag">
    <div class="bg-gray-600 relative flex flex-row-reverse h-32">
      <div class="flex-initial flex w-72 mx-1 my-1 flexstart min-w-full sm:min-w-0">
        <div class="inline-flex">
          <router-link to="/trackerDetails"
            class="inline-flex  tracking-wider rounded-md  border border-transparent btn text-base ">
            Go track</router-link>
          <ButtonRepo />
        </div>
      </div>
      <div class="flex-initial w-64  mx-1  my-1">
        <!-- WhiteSpace -->
      </div>
      <div class="grow mx-1 my-1 flexstart pl-12 md:flex">
        <p class="block tracking-wide sm:text-3xl md:text-4xl font-bold lg:text-5xl text-white leading-10 italic">Ready
          to
          track Covid-19</p>
        <p class="text-7xl font-extrabold text-blue-800 "></p>
        <button id="PopUp " @click="() => TogglePopup('buttonTrigger')"
          class="lg:block items-center justify-center mx-10 py-3 text-base tracking-wider hidden">
          <img class="h-12" src="../../public/images/Coronavirus/popup.png" alt="información" />
        </button>
      </div>
    </div>
    <!-- Better rendering with teleport -->
    <Teleport to="body">
      <Popup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')" />
    </Teleport>
  </div>
  <div v-else>
    <div class="bg-gray-600 relative flex flex-row-reverse h-32">
      <div class="flex-initial flex w-72 mx-1 my-1 flexstart min-w-full sm:min-w-0">
        <div class="inline-flex">
          <router-link to="/" class="inline-flex  tracking-wider rounded-md  border border-transparent btn text-base ">
            Go back</router-link>
          <ButtonRepo />
        </div>
      </div>
      <div class="flex-initial w-64  mx-1  my-1">
        <!-- WhiteSpace -->
      </div>
      <div class="grow mx-1 my-1 flexstart pl-12 md:flex">
      <div>
        <h2 class="fa-regular block tracking-widest font-extrabold text-white leading-4 mb-1 text-4xl sm:leading-10 sm:my-5 italic">
          {{ title }}
        </h2>
        <Clock />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import ButtonRepo from "@/components/ButtonRepo.vue";
import Popup from "@/components/Popup.vue"

import { reactive, toRefs, ref, inject, onMounted } from 'vue'

export default {
  name: "NavRoutes",
  components: {
    ButtonRepo, Popup
  },
  props: {
    TogglePopup: Boolean,
    flag: Boolean,
    title: String
  },
  setup() {
    const home = true;
    const popupTriggers = ref({
      buttonTrigger: false,
      timedTrigger: false
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];

    }
    setTimeout(() => {
      popupTriggers.value.timedTrigger = true;
    }, 3000);

    return {
      home,
      Popup,
      popupTriggers,
      TogglePopup
    }
  },
}
</script>

<style>
</style>

