<template>
 <div class="text-indigo-200 text-lg text-center hover:underline font-mono font-semibold ">
      {{date.count}}
 </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import{ DateTime } from 'luxon'

export default {
    setup () {
      const dt = DateTime.now();
      const dateInit = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
      let date = reactive({ count: dateInit })
        const dtFormat = setInterval(() => {
            const dt = DateTime.now();
            ////console.log(dt.toLocaleString());
            date.count = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
            return dt;
        }, 1000)
       
        return {
            date
        }
    }
}

</script>

<style>

</style>