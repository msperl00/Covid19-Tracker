<template>
  <div>
      
  </div>

</template>

<script>

import { ref, onMounted, inject} from 'vue'
import {useFetch} from '../hooks/useFetch'

export default {
    name: 'Tracker',
    components: {
        
    },
    setup(props, context){
        const inj = inject('mySpinner')
        console.log('Using Inject in Tracker '+inj.val);

        let loading = true;
        let title= 'Global';
        let dateDate= '';
        let status= {};
        let countries= {};
        let worldData = {};
    
         async function getWorldData() {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            return data;
        }
       
         onMounted( async () => {
             console.log('mounted in the composition api!')
            getWorldData().then( (response) => {
                worldData = response;
                console.log('GetWorldData',worldData);
                // ! Se quita el spinner cuando se obtenga la response
                inj.val = false;
            }).catch(err => alert(err));
             
        })
       return {getWorldData}
       
    },
    mounted(){
        console.log('asd');
    }

    
}
</script>

<style>

</style>