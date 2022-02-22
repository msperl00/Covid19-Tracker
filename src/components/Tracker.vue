<template>
  <div class="container bg-indigo-400">
    
  </div>
</template>

<script>

import { ref, onMounted } from 'vue'

export default {
    name: 'Tracker',
    setup(){
       
        const worldData =  async () => {

            const response = await fetch('https://disease.sh/v3/covid-19/all');
            console.log(response);
            const data = await response.json();
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