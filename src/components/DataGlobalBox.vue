<template>
    <div>
        <div class="relative flex flex-row h-12 mb-3 ">
            <div class="  flex w-64 mx-10 my-1 flex-grow items-center min-w-full sm:min-w-0">
                <span
                    class="text-blue-900 text-xl underline uppercase tracking-widest decoration-green-200 underline-offset-4">Population</span>:
                <span class="text-blue-900 uppercase tracking-widest ml-5 ">{{  }} </span>
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
                        <span class=" hover:text-black-800 text-left">{{ }}</span>
                        <span class=" hover:text-black-800 text-left">{{  }}</span>
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
                        <span class=" hover:text-black-800 text-left">{{  }}</span>
                        <span class=" hover:text-black-800 text-left">{{ }}</span>
                        <span class=" hover:text-black-800 text-left">{{  }}</span>
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
                        <span class=" hover:text-black-800 text-left">{{ }}</span>
                        <span class=" hover:text-black-800 text-left">{{  }}</span>
                        <span class=" hover:text-black-800 text-left">{{  }}</span>
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
                        <span class=" hover:text-black-800 text-left">{{  }}</span>
                        <span class=" hover:text-black-800 text-left">{{ }}</span>
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
                        <span class=" hover:text-black-800 text-left">{{  }}</span>
                        <span class=" hover:text-black-800 text-left">{{  }}</span>
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
                        <span class=" hover:text-black-800 text-left">{{ }}</span>
                        <span class=" hover:text-black-800 text-left">{{  }}</span>
                    </div>
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


        return {
         
        }
    },
    methods: {


    }
}
</script>

<style lang="scss" scoped>
</style>