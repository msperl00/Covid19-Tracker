<template>
    <Sidebar :global="true" v-if="!loading.val" @get-country="getCountryData" :countries="getCountries()" />
    <div ref="root" v-if="!loading.val" class="container mt-5 mb-5 h-full w-full">
        <!--         <CountrySelect @get-country="getCountryData" :countries="getCountries()" />
 -->
        <DataBox :stats="getStatus()" />
    </div>
    <div v-if="loading.val" class="h-screen w-full"></div>
</template>
<script>
import { ref, onMounted, inject, onBeforeUpdate, onBeforeMount, computed, reactive } from 'vue'
import { useFetch } from '../hooks/useFetch'
import DataBox from '../components/DataBox.vue'
import CountrySelect from '../components/CountrySelect.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
    name: 'Tracker',
    components: {
        DataBox, CountrySelect, Sidebar,
    },
    emits: ["customChange", "customChangeContinent"],
    setup(props, context) {
        const loading = inject('mySpinner');
        const titleConst = 'GLOBAL DETAILS';
        let addGlobal = ref(true);
        let date = '';
        let title = ref('GLOBAL DETAILS');
        let titleContinent = ref('');
        let stats = reactive({});
        let countries = {};
        let worldData = {};

        async function getWorldData() {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            return data;
        }
        async function getCountryFetchData() {
            const response = await fetch('https://api.caw.sh/v3/covid-19/countries');
            const data = await response.json();
            return data;
        }


        function getStatus() {
            /* TO READ REACTIVE DATA */
            if (title.value === 'GLOBAL DETAILS') {
                stats = worldData.Global;
                // titleContinent = '';

            }
            return stats;
        }

        function getCountries() {
            /* countries = worldData.Countries;
            if (addGlobal) {
                const auxGlobal = worldData.Global;
                countries.unshift(worldData.Global);
                addGlobal = false;
            } */
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
                    // console.log('GetCountryData', countries);
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