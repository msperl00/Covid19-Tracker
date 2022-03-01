<template>
    <select @change="onChange()" v-model="selected" class="form-select block border rounded p-3 w-full mb-5">
        <option value="0" >Select Country</option>
        <option v-for="country in countries" :value="country.ID"> {{country.Country}}</option>
        <!-- TODO interface del input -->
    </select>
    
</template>
<script >
    export default {
        name: 'CountrySelect',
        props: ['countries'],
         setup(props, context){
        
       
        },
        data() {
            return {
                selected: 0
            }
        },
        methods: {
                onChange() {
                    const country = this.countries.find( (item) => item.ID === this.selected);
                    console.log(country);
                    this.$emit('get-country', country)
                }
        }
    }
</script>

<style lang="scss" scoped>

</style>