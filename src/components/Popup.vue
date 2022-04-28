<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center w-full h-full justify-center">
    <!-- PARTE EXTERIOR -->
    <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
    <div class="absolute w-5/6 rounded-lg shadow-lg ">
      <div
        class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-8 text-white  text-xl text-md z-50">
        <button class="popup-close flex fixed items-center text-black font-extrabold transition ease-in-out   hover:-translate-y-1 hover:scale-110  duration-300" @click="TogglePopup()">
          <p class=" opacity-75">X</p>
        </button>
      </div>
      <div class="p-32 bg-amber-100 cursor-pointer ">
        <slot />

      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['TogglePopup']
}
</script>

<style  scoped>
</style>