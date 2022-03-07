<template>
    <div id="map" class="bg-blue-200 bg-slate-100 flex-1 ">

    </div>
</template>

<script>
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { reactive, toRefs, ref, inject, onMounted} from 'vue'

export default{
    setup(){

             let map; 
const southWest = L.latLng(-89.98155760646617, -180);
const northEast = L.latLng(89.99346179538875, 180);
const bounds = L.latLngBounds(southWest, northEast);

      onMounted(() => {
      

       map = leaflet.map('map').setView([39.505, -0.09], 6.2);
       leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXRhbWFyY28iLCJhIjoiY2wwYzloZjJtMHpibzNpcnF0ZDlkeGdvNCJ9.tKPKbQ719rwU4fJmXtENmA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom:3,
    noWrap:true,
    center: bounds.getCenter(),
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    maxBoundsViscosity: 0.5,
    accessToken: 'pk.eyJ1IjoiaXRhbWFyY28iLCJhIjoiY2wwYzloZjJtMHpibzNpcnF0ZDlkeGdvNCJ9.tKPKbQ719rwU4fJmXtENmA'
}).addTo(map);

map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: true });
});
      }); 
    }
}
</script>

<style lang="scss" scoped>

</style>