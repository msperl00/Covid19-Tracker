<template>
     <div class="p-52 border-r-8">
                    <h2> {{title}} </h2>
                    <p> {{msg}}</p>
                    <button @click="$emit('close')"> Close </button>
    </div>
</template>

<script setup>
import {defineProps, defineEmit} from 'vue'

defineProps({
    title: String,
    msg: String,
})

defineEmit("close")
</script>

<style lang="scss" scoped>

</style>