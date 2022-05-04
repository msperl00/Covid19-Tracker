<template>
  <div
    class="lg:flex inset-0 transform lg:transform-none lg:opacity-100  lg:relative z-10  bg-gray-700 text-white h-screen p-3 border-t-2 ">
    <div v-if="global">
      <transition name="slide-fade">
        <nav v-if="true" >
            <button
              class="block  px-1 py-2 mb-2 bg-green-600 hover:bg-green-500  w-full text-lg font-bold tracking-wider	uppercase" @click="intersected(country, $event)"> Global </button>
          <ul class="scroll-container">
            <li v-for="(country, i) in countries" :key="i" :id="country.Country">
              <button  v-if="country.ID != undefined"
                :class="{active: isActive}"
                class="block  px-1 py-2 hover:bg-indigo-800 active:text-green-500 w-full font-mono"
                @click="intersected(country, $event)
                 ">{{ country.Country }}</button>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
    <div v-else>
      <transition name="slide-fade">
        <nav v-if="true">
          <!--  visibility -->
          <ul class="mt-8">
            <!-- TODO BOTONES -->
            <li class="divide-y divide-slate-200">
              <a href="#" class="block px-4 py-2 hover:bg-indigo-800 rounded-md">Home</a>
              <a href="#" class="block px-4 py-2 hover:bg-indigo-800 rounded-md">Documentation</a>
              <a href="#" class="block px-4 py-2 hover:bg-indigo-800 rounded-md">Products</a>

            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </div>

</template>

<script>
import { useSideBarStore } from '@/stores/sidebarStore'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'
import Observer from "./Observer.vue";

export default {
  components: {
    Observer,
  },
  props: {
    global: Boolean,
    countries: Array,
  },
  data: () => ({ page: 1, items: [], isActive: false }),
  setup(props, context) {

    let selected = 0;
    let flagGreen = false;
    const store = useSideBarStore();
    const { visibility, measures } = storeToRefs(store);
    console.log(measures.value.colapsed);
    console.log(visibility);
    console.log(visibility.value);
    console.log(props.global);
    console.log('Sidebar');
    function toggleSideBar() {
      store.toggleSideBar();
    }
    return {
      // you can return the whole store instance to use it in the template
      store, visibility, measures, toggleSideBar, selected
    }
  },
  methods: {


    getCountry(){

    },
    /**
     * Metodo que emite el evento que proporcionar
     * el pais seleccionado en el sidebar
     * @param {*} item 
     */
     intersected(item, event) {

                    console.log(this.selected);
                    document.getElementById(item.Country).style.backgroundColor = ' green' ; 
                    this.$emit('get-country', item);
                    this.$emit('get-title','GLOBAL DETAILS')
    },             
  },
}
</script>

<style>
:root {
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

.sidebar {
  background-color: var(--sidebar-bg-color);
}

.active{
  background-color: greenyellow;
}

.scroll-container {
  overflow-y: scroll;
  height: 580px;
}
</style>