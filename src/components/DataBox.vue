<template>
    
        <div class="relative flex flex-row h-12 mb-3 ">
            <div class="  flex w-64 mx-10 my-1 flex-grow items-center min-w-full sm:min-w-0">
                <span
                    class="text-blue-900 text-xl underline uppercase tracking-widest decoration-green-200 underline-offset-4">Population</span>:
                <span class="text-blue-900 uppercase tracking-widest ml-5 ">{{ this.getPopulation() }} </span>
            </div>
        </div>
        <!-- ! FILA 1 -->
        
        <div class="grid md:grid-cols-2 gap-10">
            <div class="shadow-md bg-blue-100 p-10 text-center rounded">
                <h3 class="text-3xl text-blue-900 text-center  uppercase mb-8 tracking-widest ">Cases
                </h3>
                <div class="grid md:grid-cols-2">
                    <div class="text-2xl">
                        <ul class="text-left">
                            <li class="">
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">Count:</span>
                            </li>
                            <li>
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">PMP:</span>
                            </li>
                        </ul>
                    </div>
                    <div class="grid text-2xl tracking-widest">
                        <span class=" hover:text-black-800 text-left">{{ this.getCases() }}</span>
                        <span class=" hover:text-black-800 text-left">{{ this.getCasesPerOneMillion() }}</span>
                    </div>
                </div>
            </div>
            <!-- ! FILA 2 -->
            <div class="shadow-md bg-blue-100 p-10 text-center rounded">
                <h3 class="text-3xl text-blue-900  text-center  uppercase mb-8 tracking-widest">Active
                    cases</h3>
                <div class="grid md:grid-cols-2">
                    <div class="text-2xl ">
                        <ul class="text-left">
                            <li>
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">Active:</span>
                            </li>
                            <li>
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">PMP:</span>
                            </li>
                            <li>
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">OCPP:</span>
                            </li>
                        </ul>
                    </div>
                    <div class="grid text-2xl tracking-widest">
                        <span class=" hover:text-black-800 text-left">{{ this.getActiveCases() }}</span>
                        <span class=" hover:text-black-800 text-left">{{ this.getActiveCasesPerOneMillion() }}</span>
                        <span class=" hover:text-black-800 text-left">{{ this.getOneCasePerPeople() }}</span>
                    </div>
                </div>
            </div>

            <div class="shadow-md bg-blue-100 p-10 text-center rounded">
                <h3 class="text-3xl text-blue-900    text-center  uppercase mb-8 tracking-widest">Deaths
                </h3>
                <div class="grid md:grid-cols-2">
                    <div class="text-2xl ">
                        <ul class="text-left">
                            <li>
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">Count:</span>
                            </li>
                            <li>
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">PMP:</span>
                            </li>
                            <li>
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">ODPP:</span>
                            </li>
                        </ul>
                    </div>
                    <div class="grid text-2xl tracking-widest">
                        <span class=" hover:text-black-800 text-left">{{ this.getDeaths() }}</span>
                        <span class=" hover:text-black-800 text-left">{{ this.getDeathsPerOneMillion() }}</span>
                        <span class=" hover:text-black-800 text-left">{{ this.getDeathPerPeople() }}</span>
                    </div>
                </div>
            </div>

            <div class="shadow-md bg-blue-100 p-10 text-center rounded">
                <h3 class="text-3xl text-blue-900 text-center  uppercase mb-8 tracking-widest">Critical cases</h3>
                <div class="grid md:grid-cols-2">
                    <div class="text-2xl ">
                        <ul class="text-left">
                            <li>
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">Count:</span>
                            </li>
                            <li>
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">PMP:</span>
                            </li>
                        </ul>
                    </div>
                    <div class="grid text-2xl tracking-widest">
                        <span class=" hover:text-black-800 text-left">{{ this.getCritical() }}</span>
                        <span class=" hover:text-black-800 text-left">{{ this.getCriticalPerOneMillion() }}</span>
                    </div>
                </div>
            </div>
            <div class="shadow-md bg-blue-100 p-10 text-center rounded">
                <h3 class="text-3xl text-blue-900   text-center  uppercase mb-8 tracking-widest">Tests
                </h3>
                <div class="grid md:grid-cols-2">
                    <div class="text-2xl ">
                        <ul class="text-left">
                            <li>
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">Count:</span>
                            </li>
                            <li>
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">PMP:</span>
                            </li>
                        </ul>
                    </div>
                    <div class="grid text-2xl tracking-widest">
                        <span class=" hover:text-black-800 text-left">{{ this.getTests() }}</span>
                        <span class=" hover:text-black-800 text-left">{{ this.getTestPerOneMillion() }}</span>
                    </div>
                </div>
            </div>
            <div class="shadow-md bg-blue-100 p-10 text-center rounded">
                <h3 class="text-3xl text-blue-900  text-center  uppercase mb-8 tracking-widest">Recovered
                    cases</h3>
                <div class="grid md:grid-cols-2">
                    <div class="text-2xl ">
                        <ul class="text-left">
                            <li>
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">Active:</span>
                            </li>
                            <li>
                                <span
                                    class="font-bold text-blue-900 opacity-90 hover:text-red-600 mr-2 text-left">Today:</span>
                            </li>
                        </ul>
                    </div>
                    <div class="grid text-2xl tracking-widest">
                        <span class=" hover:text-black-800 text-left">{{ this.getRecovered() }}</span>
                        <span class=" hover:text-black-800 text-left">{{ this.getTodayRecovered() }}</span>
                    </div>
                </div>
            </div>
        </div>
    

</template>

<script>

import { inject, watch } from 'vue'

export default {
    name: 'DataBox',
    props: ['stats'],
    setup(props, context) {

        let url = inject('url');
        /**
         * Get active cases
         */
        function getActiveCases() {

            getImage();
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.active);
        }
        /**
         * Get active cases per Million
         */
        function getActiveCasesPerOneMillion() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.activePerOneMillion);
        }
        /**
         * Get cases cases per Million
         */
        function getCases() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.cases);
        }
        /**
         * Get cases cases per Million
         */
        function getCasesPerOneMillion() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.casesPerOneMillion);
        }
        /**
         * Get one case per people in country
         */
        function getOneCasePerPeople() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.oneCasePerPeople);
        }
        /**
         * Get cases cases per Million
         */
        function getCritical() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.critical);
        }
        /**
         * Get cases cases per Million
         */
        function getCriticalPerOneMillion() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.criticalPerOneMillion);
        }
        /**
         * Get number of inhabitants
         */
        function getPopulation() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.population);
        }
        /**
         * Get the url of the image that has to display 
         */
        function getImage() {
            //console.log(props.stats.countryInfo);
            if (props.stats.countryInfo == undefined) {
                url.value = 'public/images/Coronavirus/mapamundi.png';
                return 'public/images/Coronavirus/mapamundi.png';
            }
            url.value = props.stats.countryInfo.flag;
            return props.stats.countryInfo.flag;
        }



        /**
         * Get number of deaths
         */
        function getDeaths() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.deaths);
        }
        /**
         * Get number of deaths per one million
         */
        function getDeathsPerOneMillion() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.deathsPerOneMillion);
        }
        /**
         * Get death per people in the country
         */
        function getDeathPerPeople() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.oneDeathPerPeople);
        }
        /**
         * Get tests of country
         */
        function getTests() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.tests);
        }
        /**
         * Get test per people in the country
         */
        function getDeathPerPeople() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.oneTestPerPeople);
        }
        /**
         * Get Tests per million
         */
        function getTestPerOneMillion() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.testsPerOneMillion);
        }
        /**
         * Get today cases in country
         */
        function getTodayCases() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.todayCases);
        }
        /**
         * Get today cases in country
         */
        function getTodayDeaths() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.todayDeaths);
        }
        /**
         * Get today cases in country
         */
        function getTodayRecovered() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.todayRecovered);
        }
        /**
         * Get today cases in country
         */
        function getRecovered() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.recovered);
        }


        return {
            getDeaths,
            getDeathsPerOneMillion,
            getDeathPerPeople,
            getCases,
            getCasesPerOneMillion,
            getCritical,
            getCriticalPerOneMillion,
            getActiveCases,
            getActiveCasesPerOneMillion,
            getImage,
            getPopulation,
            getOneCasePerPeople,
            getTests,
            getTestPerOneMillion,
            getTodayCases,
            getTodayDeaths,
            getTodayRecovered,
            getRecovered,
        }
    },
    methods: {


    }
}
</script>

<style lang="scss" scoped>
</style>