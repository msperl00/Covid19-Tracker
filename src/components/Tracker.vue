<template>
  <div>
      
  </div>

</template>

<script>

import { ref, onMounted } from 'vue'

export default {
    name: 'Tracker',
    components: {
        
    },
    setup(){
        let loading = true;
        let title= 'Global';
        let dateDate= '';
        let status= {};
        let countries= {};
        


        const worldData =  async () => {
            const response = await fetch('https://api.covid19api.com/summary');
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