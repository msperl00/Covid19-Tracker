<template>
    <div class="root">
        <button @click="isOpen = true">
            Open
        </button>
        <teleport to="body">
            <div v-if="isOpen" class=" absolute top-0 left-0 bg-slate-600 w-full h-full flex justify-center items-center">
               <modal-content 
               @close="isOpen = false"
               title="Does this work"
               msg="I hope so."
               />
            </div>
        </teleport>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ModalContent from './ModalContent.vue'
const isOpen = ref(false);
</script>

<style lang="scss" scoped>
</style>