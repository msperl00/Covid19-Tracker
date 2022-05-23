<template>
    <Sidebar :global="true" v-if="!loading.val" @get-country="getCountryData" :countries="getCountries()" @get-global="(n) => boxComponent = n"/>
    <div ref="root" v-if="!loading.val" class="container mt-5 mb-5 h-full w-full">
        <!--         <CountrySelect @get-country="getCountryData" :countries="getCountries()" />
 -->
        <DataBox :stats="getStatus()" />
       <!-- <component :is='boxComponent' :stats="getStatus()" /> -->
    </div>
    <div v-if="loading.val" class="h-screen w-full"></div>
</template>
<script>
import { ref, onMounted, inject, onBeforeUpdate, onBeforeMount, computed, reactive } from 'vue'
import { useFetch } from '../hooks/useFetch'
import DataBox from '../components/DataBox.vue'
import DataGlobalBox from '../components/DataGlobalBox.vue'
import CountrySelect from '../components/CountrySelect.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
    name: 'Tracker',
    components: {
        DataBox, CountrySelect, Sidebar, DataGlobalBox
    },
    emits: ["customChange", "customChangeContinent"],
    setup(props, context) {
        const loading = inject('mySpinner');
        const titleConst = 'GLOBAL DETAILS';
        let addGlobal = ref(true);
        let title = ref('GLOBAL DETAILS');
        let titleContinent = ref('');
        let stats = reactive({});
        let countries = {};
        let worldData = {};
        let boxComponent = ref('DataBox');

        async function getWorldData() {
            const response = await fetch('https://api.caw.sh/v3/covid-19/all');
            const data = await response.json();
            return data;
        }
        async function getCountryFetchData() {
            const response = await fetch('https://api.caw.sh/v3/covid-19/countries');
            const data = await response.json();
            return data;
        }

        /**
         * Función que checkea el valor del titulo, modificado por el sidebar
         * para saber si tiene que renderizar los datos de algún otro pais.
         */
        function getStatus() {
            
            /* TO READ REACTIVE DATA */
            if (title.value === 'GLOBAL DETAILS') {
                stats = worldData;
            }
            return stats;
        }

        function getCountries() {
         
            console.log('GetCountryData', countries);

            return countries;
        }


        /**
         * Seleccionamos segun si es pais o global los datos 
         * para pasarselos al dataBox
         * @param {*} country 
         */
        function getCountryData(country) {

            if (country != null) {
                title.value = country.country;
                titleContinent.value = country.continent;
                stats = country;

            } else {

                title.value = titleConst;
                titleContinent.value = '';
                getStatus();

            }
            console.log('Title: ' + titleConst);
        }

        /* *********************** INIT HOOKS *********************** */
        onMounted(async () => {

            console.log('mounted in the composition api!');
            getWorldData().then(
                function (response) {
                    worldData = response;
                    console.log('GetWorldData', worldData);
                    stats = worldData;
                    // ! Se quita el spinner cuando se obtenga la response
                    setTimeout(() => {
                        loading.val = false;
                    }, 1000)

                }, function (err) {
                    console.log(err);
                });

            getCountryFetchData().then(
                function (response) {
                    countries = response;
                     console.log('GetCountryData', countries);
                    // ! Se quita el spinner cuando se obtenga la response

                }, function (err) {
                    console.log(err);
                }

            )
        })

        onBeforeMount(() => {
            // TODO Gestionar en un futuro en cache, si tenemos toda esta información
            loading.val = true;
        })

        /* *********************** FIN HOOKS *********************** */

        return {
            getWorldData,
            loading,
            getStatus,
            getCountries,
            getCountryData,
/*             switchComponent,
 */            boxComponent,
            title,
            stats,
            addGlobal,
            titleContinent
        }

    },
    methods: {


    },
    watch: {
        title(newValue, oldValue) {
            if (newValue != oldValue) {
                this.$emit("customChange", newValue);
            }
        },
        titleContinent(newValue, oldValue) {
            if (newValue != oldValue) {
                this.$emit("customChangeContinent", newValue);
            }
        }
    }
}
</script>

<style>
</style>