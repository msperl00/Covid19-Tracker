<template>
  <NavRoutes :title="this.title" :titleContinent="this.titleContinent" :url="this.url" />
  <div class="flex flex-col">
    <div class='flex flex-grow'>
      <Tracker @customChange="log" @customChangeContinent="logContinente" />
    </div>
  </div>


</template>
<script>
import Tracker from '../components/Tracker.vue'
import Clock from '../components/Clock.vue'
import Sidebar from '../components/Sidebar.vue'
import NavRoutes from '../components/NavRoutes.vue'
import { ref, onMounted, inject, provide, onBeforeUpdate, onBeforeMount, computed } from 'vue'

export default {
  name: 'GlobalDetails',
  components: { Tracker, Clock, Sidebar, NavRoutes },
  setup() {
    let url = ref('/public/images/Coronavirus/mapamundi.png');
    let title = ref('Global details');
    let titleContinent = ref('WORLD DATA');

    provide('url', url)

    /**
     *  Recibe el evento que cambia el titulo,
     *  proveniente de GlobalDetails
     * @param {*} event 
     */
    function log(event) {
      title.value = event;

    }
    /**
     *  Recibe el evento que cambia el coninente,
     *  proveniente de Sidebar o GlobalDetails
     * @param {*} event 
     */
    function logContinente(event) {

      if (event === undefined || event === '') {
        titleContinent.value = 'WORLD DATA';
      } else {
        titleContinent.value = event;
        //console.log(titleContinent.value);
      }

    }

    return { title, titleContinent, url, log, logContinente }
  }

}
</script>

<style>
</style>