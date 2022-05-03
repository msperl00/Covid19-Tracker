<template>
  <NavRoutes :title="this.title"/>
  <div class="flex flex-col">
    <div class='flex flex-grow'>
        <Tracker @customChange="log" />
    </div>
  </div>


</template>
<script>
import Tracker from '../components/Tracker.vue'
import Clock from '../components/Clock.vue'
import Sidebar from '../components/Sidebar.vue'
import NavRoutes from '../components/NavRoutes.vue'
import { ref, onMounted, inject, onBeforeUpdate, onBeforeMount, computed } from 'vue'

export default {
  name: 'GlobalDetails',
  components: { Tracker, Clock, Sidebar, NavRoutes },
  setup() {

    let title = ref('Global details');

  /**
   *  Recibe el evento que cambia el titulo,
   *  proveniente de Sidebar o GlobalDetails
   * @param {*} event 
   */
    function log(event) {
      title.value = event;
    }

    return { title, log }
  }

}
</script>

<style>
</style>