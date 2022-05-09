<template>
    <Sidebar :global="true" v-if="!loading.val" @get-country="getCountryData" :countries="getCountries()" />
    <div ref="root" v-if="!loading.val" class="container mt-10 h-full w-full">
        <CountrySelect @get-country="getCountryData" :countries="getCountries()" />
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
    emits: ["customChange"],
    setup(props, context) {
        const loading = inject('mySpinner')
        const titleConst = 'GLOBAL DETAILS';
        let addGlobal = ref(true);
        let date = '';
        let title = ref('GLOBAL DETAILS');
        let stats = reactive({});
        let countries = {};
        let worldData = {};

        async function getWorldData() {
            const response = await fetch('https://api.covid19api.com/summary');
            const data = await response.json();
            return data;
        }

        function getDate() {
            date = worldData.Date;
            return date;
        }


        function getStatus() {
            /* TO READ REACTIVE DATA */
            if (title.value === 'GLOBAL DETAILS')
                stats = worldData.Global;
            return stats;
        }

        function getCountries() {
            countries = worldData.Countries;
            if (addGlobal) {
                const auxGlobal = worldData.Global;
                countries.unshift(worldData.Global);
                addGlobal = false;
            }
            return countries;
        }

        function getCountryData(country) {

            if (country != undefined){
                title.value = country.Country;
                stats = country;
             } else{
                title.value = titleConst;
                getStatus();
             }
                console.log('Title: '+titleConst);
        }

        onMounted(async () => {
            console.log('mounted in the composition api!')
            getWorldData().then((response) => {
                worldData = response;
                console.log('GetWorldData', worldData);
                stats = worldData.Global;
                // ! Se quita el spinner cuando se obtenga la response
                setTimeout(() => {
                    loading.val = false;
                }, 1000)


            }).catch(err => alert(err));
        })

        onBeforeMount(() => {
            // !TODO Gestionar en un futuro en cache, si tenemos toda esta información
            loading.val = true;
        })

        return { getWorldData, loading, getStatus, getCountries, getDate, getCountryData, title, stats, addGlobal }

    },
    watch: {
        title(newValue, oldValue) {
            if (newValue != oldValue) {
                this.$emit("customChange", newValue);
            }
        }
    }
}
</script>

<style>
</style>