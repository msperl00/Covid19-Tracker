

<template>
  <Navbar />
  <div>
    <main>
      <router-view />
    </main>
  </div>
</template>


<script>
/* SCRIPT setup CAN NOT CONTAIN export default */
import { useStore } from './stores/store';
import { storeToRefs } from 'pinia'
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar,
  },
  setup() {
    const store = useStore()
    // const {count} = store // NOT REACTIVE 
    const { count } = storeToRefs(store);
    console.log(count.value);
    return {count}
  },


};

</script>
