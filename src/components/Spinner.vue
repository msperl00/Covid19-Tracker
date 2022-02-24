
<template>

<div class="spin flex justify-center fixed h-full w-full " v-if="start">
         <img class="spinnerImage mt-64" src="../../public/images/load-corona.png"/>
  </div>
   
  <!--   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="this.start = !this.start">Spinner</button>
 -->
</template>

<script>
import { useStore } from '../stores/store';
export default {
    props: {
        start: Boolean
    },
     /* Asi se utilizan los props */
    setup(props){
        
    }
   
}
</script>

<style scoped>

.spin{
    z-index: -10;
    margin: 0 auto;
/*      background-color: rgba(0,0,0,0.2);*/
}

.spinnerImage {
    
    position: fixed;
    animation: rotation 2.5s infinite linear;
    width: 80px;
    height: 80px;
}
.spinnerImage:after {
  width: 0;
  height: 0;
  margin: 8px;
}

@keyframes rotation {
  0% {
    transform: rotate(0) scale(0.9);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg) scale(0.2);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
  100% {
    transform: rotate(1800deg) scale(0.9);

  }
}

</style>