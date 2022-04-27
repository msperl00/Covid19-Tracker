<template>
  <NavRoutes />
    <div class="max-h-screen flex flex-col">
      <div class='relative flex flex-grow'>
        <Sidebar />
          <!-- KeepAlive -->
        <Map />
      </div>
  </div>
</template>

<script >
import ButtonRepo from "@/components/ButtonRepo.vue";
import Map from "@/components/Map.vue"
import Spinner from "@/components/Spinner.vue";
import NavRoutes from "@/components/NavRoutes.vue"
import Sidebar from "@/components/Sidebar.vue"
import { reactive, toRefs, ref, inject, onMounted} from 'vue'


export default {
  name: "Home",
  inject: ['mySpinner'],
  components: {
    Spinner, ButtonRepo, Map, NavRoutes, Sidebar
  },
    setup () {
     
      const inj = inject('mySpinner')
      console.log('Using Inject '+inj.val);
    
      onMounted(() => {
        setTimeout(() => {
          inj.val = false;
        },1800)

      });
      return {
        inj
      }
    },
    
  
};
</script>
