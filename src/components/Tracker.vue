<template>
   <div ref="root" v-if="!loading.val" class="container" >
       <CountrySelect @get-country="getCountryData" :countries="getCountries()" />
       <DataBox :stats="getStatus()" />
   </div>
   <div v-else="" class="flex flex-col align-center justify-center text-center">
       <div class="text-gray-500 text-3xl mt-10 mb-6 font-bold">
           Loading data...
       </div>
   </div>
</template>
<script>
import { ref, onMounted, inject, onBeforeUpdate,onBeforeMount, computed, reactive} from 'vue'
import {useFetch} from '../hooks/useFetch'
import DataBox from '../components/DataBox.vue'
import CountrySelect from '../components/CountrySelect.vue'
export default {
    name: 'Tracker',
    components: {
        DataBox, CountrySelect
    },
    setup(props, context){
        const loading = inject('mySpinner')
        console.log('Using Inject in Tracker '+loading.val);
        const titleConst = 'GLOBAL DETAILS';
        let addGlobal = ref(true);
       /*  let title= ref('Global'); */
        let date= '';
        let title = ref('GLOBAL DETAILS');
        let stats= reactive({});
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
          stats = worldData.Global;
          
         function getStatus(){
             /* TO READ REACTIVE DATA */
           if(title.value === 'GLOBAL DETAILS')
                 stats = worldData.Global;
             return stats;
         }

         function getCountries(){
             countries = worldData.Countries;
            console.log(addGlobal);
             if(addGlobal){
             const auxGlobal = worldData.Global;
             countries.unshift(worldData.Global);
             addGlobal = false;
             }
             console.log(countries);
             console.log(addGlobal);
             return countries;
         }
         
         function getCountryData(country){
             stats = country;
             console.log(country);
             if(country.Country != undefined)
                 title.value = country.Country;     
             else
                title.value = titleConst; 
         }

         onMounted( async () => {
             console.log('mounted in the composition api!')
            getWorldData().then((response) => {
                worldData = response;
                console.log('GetWorldData', worldData);
                 stats = worldData.Global;
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

       return {getWorldData, loading, getStatus, getCountries, getDate, getCountryData, title, stats, addGlobal}
       
    },
    watch: {
        title(newValue, oldValue){
            if(newValue != oldValue){
                this.$emit("customChange", newValue);
            }
        }
    }
}
</script>

<style>

</style>