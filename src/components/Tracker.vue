<template>
  <div class="container ">
    <Clock />
  </div>
</template>

<script>

import { ref, onMounted } from 'vue'
import Clock from './Clock.vue'
export default {
    name: 'Tracker',
    components: {
        Clock
    },
    setup(){
        const load = true;
        const title= 'Global';
        const worldData =  async () => {

            const response = await fetch('https://disease.sh/v3/covid-19/all');
            const data = await response.json();
            console.log(data);
            return data;
        
        }

         onMounted( () => {
             console.log('mounted in the composition api!')
             worldData();
        })
       
    },
    methods: {
        
        
    },

    
}
</script>

<style>

</style>