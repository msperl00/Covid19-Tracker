<template>
    <div class="grid md:grid-cols-2 gap-4">
        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900  font-bold hover:font-extrabold hover:tracking-wider mb-2">Cases</h3>
            <div class="text-2xl mb-4 hover:tracking-wider">
                <span class="font-bold hover:text-red-600"> New cases: </span>
                <span class="">{{stats.NewConfirmed}}</span>
            </div> 
            <div class="text-2xl">
                <span class="font-bold hover:text-red-600 hover:tracking-wider"> Total deaths: </span>
               <span class=""> {{stats.TotalDeaths}}</span>
            </div>
        </div>
        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900  font-bold hover:font-extrabold hover:tracking-wider mb-2">Deaths</h3>
            <div class="text-2xl mb-4 hover:tracking-wider">
                <span class="font-bold hover:text-red-600"> Last week deaths: </span>
                <span class="">{{stats.NewDeaths}}</span>
            </div> 
            <div class="text-2xl">
                <span class="font-bold hover:text-red-600 hover:tracking-wider"> Total deaths: </span>
               <span class=""> {{stats.TotalConfirmed}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataBox',
    props: ['stats']
}
</script>

<style lang="scss" scoped>

</style>