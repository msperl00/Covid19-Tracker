<template>
    <div id="map" class="bg-blue-200 bg-slate-100 flex-1 p-6">

    </div>
</template>

<script>
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { reactive, toRefs, ref, inject, onMounted} from 'vue'

export default{
    setup(){

             let map; 
    
      onMounted(() => {
      

       map = leaflet.map('map').setView([51.505, -0.09], 13);
       leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXRhbWFyY28iLCJhIjoiY2wwYzloZjJtMHpibzNpcnF0ZDlkeGdvNCJ9.tKPKbQ719rwU4fJmXtENmA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaXRhbWFyY28iLCJhIjoiY2wwYzloZjJtMHpibzNpcnF0ZDlkeGdvNCJ9.tKPKbQ719rwU4fJmXtENmA'
}).addTo(map);
      }); 
    }
}
</script>

<style lang="scss" scoped>

</style>