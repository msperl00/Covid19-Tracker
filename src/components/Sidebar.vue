<template>
<div class="min-h-screen lg:flex inset-0 transform lg:transform-none lg:opacity-100  lg:relative z-10  bg-indigo-800 text-white h-screen p-3">
   <span @click="toggleSideBar" class="flex justify-between p-2">
             <i class="fa-solid fa-window-maximize"></i>
   </span>
  <transition name="slide-fade">
    <nav v-if="visibility">
     <ul class="mt-8">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-indigo-800 rounded-md">Home</a>
        <a href="#" class="block px-4 py-2 hover:bg-indigo-800 rounded-md">About</a>
        <a href="#" class="block px-4 py-2 hover:bg-indigo-800 rounded-md">Products</a>
        <a href="#" class="block px-4 py-2 hover:bg-indigo-800 rounded-md">Pricing</a>
      </li>
    </ul>
</nav>
 </transition>

</div>
    
</template>

<script>
import { useSideBarStore } from '@/stores/sidebarStore'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useSideBarStore()

    const {visibility, measures} = storeToRefs(store);
    console.log(measures.value.colapsed);
    console.log(visibility);
    console.log(visibility.value);
    
    
    function toggleSideBar(){
        store.toggleSideBar();
    }
  

    return {
      // you can return the whole store instance to use it in the template
      store, visibility, measures, toggleSideBar
    }
  },
}
</script>

<style>

:root{
    --sidebar-bg-color: #1d2431;
    --sidebar-item-hover: #3a38a1;
    --sidebar-item-active: #2a38a1;

}
</style>

<style scoped>

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.sidebar{
    background-color: var(--sidebar-bg-color);
}
</style>