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
        <p class="block tracking-wide sm:text-2xl md:text-3xl font-bold lg:text-4xl text-white leading-10 italic uppercase">Ready
          to
          track Covid-19</p>
        <p class="text-7xl font-extrabold text-blue-800 "></p>
        <button id="PopUp " @click="() => TogglePopup('buttonTrigger')"
          class="lg:block items-center justify-center mx-10">
          <img class="h-12" src="../../public/images/Coronavirus/popup.png" alt="información" />
        </button>
      </div>
    </div>
    <!-- Better rendering with teleport -->
    <Teleport to="body">
      <Popup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')">
        <p class="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-5 underline underline-offset-2">How to use it</p>
        <p class="text-lg text-gray-500 text-justify	font-dm">It's almost 2022 and we still don't know if there is
          aliens living among us, or
          do we? Maybe the person writing this is an alien, or a software developer lack of imagination.
          I used to say that became an engineer because of my lack of imagination. Meanwhile, I honestly tought about
          something that we call <code
            class=" font-dm bg-indigo-100 px-1 py-0.5 rounded text-indigo-900">"lack of future"</code>
          and that was
          at least the most terrible word that I listen. I just couldn't find the answers that matched what I thought
          they should be. But someone would break it. So I just open my computer and using two fingers began typing out,
          what I thought were my TFG.
        </p>
      </Popup>
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
      <div class="grow mx-1  flexstart pl-12 md:flex">
        <div class="grid md:grid-cols-1 text-center items-center">
          <h2
            class=" font-lora block  text-center tracking-widest font-extrabold text-white leading-4  text-4xl sm:leading-10 sm:my-3  uppercase">
            {{ title }}
          </h2>
          <div class="relative flexstart">
                      <span class=" font-bold uppercase tracking-widest italic mx-10">{{ titleContinent }}</span>
                      <img :src="this.url" :alt="this.title" class="relative w-auto h-10   shadow-white ">
          </div>
          <!--  <Clock /> -->
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import ButtonRepo from "@/components/ButtonRepo.vue";
import Popup from "@/components/Popup.vue"

import { reactive, toRefs, ref, inject, provide, onMounted } from 'vue'

export default {
  name: "NavRoutes",
  components: {
    ButtonRepo, Popup
  },
  props: {
    TogglePopup: Boolean,
    flag: Boolean,
    title: String,
    titleContinent: String,
    url: String
  },
  setup() {
    const home = true;
    let url = ref('as');
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
      TogglePopup,
    }
  },

}
</script>

<style>
</style>

