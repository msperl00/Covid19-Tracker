

<template>
  <Navbar />
      <Spinner :start="spin.val"/>
  <router-view />
</template>


<script>
/* SCRIPT setup CAN NOT CONTAIN export default */
import { useStore } from './stores/store';
import { storeToRefs } from 'pinia'
import Navbar from './components/Navbar.vue'
import Spinner from "@/components/Spinner.vue";
import { reactive, toRefs, ref} from 'vue'
export default {
  components: {
    Navbar,
    Spinner
  },
  data: () => ({
    spin: {
      val: false
    }
  }),
  setup() {
    const store = useStore()
    // const {count} = store // NOT REACTIVE 
    const { count } = storeToRefs(store);
    console.log(count.value);
    return {count}
  },
  provide() {
    return {
      mySpinner: this.spin
    }
  }


};

</script>
