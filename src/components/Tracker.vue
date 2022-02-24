<template>
   <div ref="root" v-if="!loading.val" >
       <DataBox :stats="getStatus()" />
   </div>
   <div v-else="" class="flex flex-col align-center justify-center text-center">
       <div class="text-gray-500 text-3xl mt-10 mb-6 font-bold">
           Loading data...
       </div>
   </div>
</template>
<script>
import { ref, onMounted, inject, onBeforeUpdate,onBeforeMount, computed} from 'vue'
import {useFetch} from '../hooks/useFetch'
import DataBox from '../components/DataBox.vue'
export default {
    name: 'Tracker',
    components: {
        DataBox
    },
    setup(props, context){
        const loading = inject('mySpinner')
        console.log('Using Inject in Tracker '+loading.val);
        
        let title= 'Global';
        let date= '';
        let stats= {};
        let countries= {};
        let worldData = {};

         async function getWorldData() {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            return data;
        }

         function getDate(){
             date = worldData.Date;
             return date;
          }
         function getStatus(){
             stats = worldData.Global;
             return stats;
         }
         function getCountries(){
             countries = worldData.Countries;
             return countries;
         }

         onMounted( async () => {
             console.log('mounted in the composition api!')
            getWorldData().then((response) => {
                worldData = response;
                console.log('GetWorldData',worldData);
                // ! Se quita el spinner cuando se obtenga la response
                 setTimeout(() => {
                loading.val = false;
            }, 2000)
                
            
            }).catch(err => alert(err));
             
        })

        onBeforeMount( () => {
            // ! Gestionar en un futuro en cache, si tenemos toda esta información
            loading.val = true;
        })

       return {getWorldData, loading, getStatus, getCountries, getDate}
       
    }
}
</script>

<style>

</style>