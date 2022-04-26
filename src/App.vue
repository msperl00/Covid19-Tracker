

<template>
  <HeaderBar />
      <Spinner :start="spin.val"/>
  <router-view />
   <Footer />
</template>


<script>
/* SCRIPT setup CAN NOT CONTAIN export default */
import { useStore } from './stores/store';
import { storeToRefs } from 'pinia'
import HeaderBar from './components/HeaderBar.vue'
import Spinner from "@/components/Spinner.vue";
import Footer from './components/Footer.vue';

import { reactive, toRefs, ref} from 'vue'
export default {
  components: {
    HeaderBar,
    Spinner,
    Footer
  },
  data: () => ({
    spin: {
      val: true
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
