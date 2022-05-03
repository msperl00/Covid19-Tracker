<template>
    <div class="grid md:grid-cols-2 gap-4 mb-10">
        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h3
                class="text-3xl text-blue-900 font-bold hover:font-extrabold  mb-4"
            >Cases</h3>

            <div class="text-2xl mb-4 text-left">
                <span class="font-bold hover:text-red-600 mr-2">New cases:</span>
                <span class="font-medium hover:text-black-800">{{ this.getNewCases() }}</span>

            </div>
            <div class="text-2xl  text-left">
                <span class="font-bold hover:text-red-600 mr-2">Total confirmed:</span>
                <span class="font-medium">{{ this.getTotalConfirmed() }}</span>
            </div>
        </div>
        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h3
                class="text-3xl text-blue-900 font-bold hover:font-extrabold  mb-4"
            >Deaths</h3>
            <div class="text-2xl  mb-4 text-left">
                <span class="font-bold hover:text-red-600 mr-2">New deaths :</span>
                <span class="font-medium">{{ this.getNewDeaths() }}</span>
            </div>
            <div class="text-2xl  text-left">
                <span class="font-bold hover:text-red-600 mr-2">Total deaths:</span>
                <span class="font-medium">{{ this.getTotalDeaths() }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataBox',
    props: ['stats'],
    setup(props, context) {

        function getTotalConfirmed() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.TotalConfirmed);
        }
        function getNewDeaths() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.NewDeaths);
        }
        function getTotalDeaths() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.TotalDeaths);
        }
        function getNewCases() {
            const ss = new Intl.NumberFormat('es-ES')
            return ss.format(props.stats.NewConfirmed);
        }

        return { getTotalConfirmed, getNewDeaths, getTotalDeaths, getNewCases }
    }
}
</script>

<style lang="scss" scoped>
</style>