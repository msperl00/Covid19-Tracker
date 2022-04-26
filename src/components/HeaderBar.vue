<template>
<!-- ! CAN NOT TOUCH -->
    <nav class="w-full text-white shadow relative  bg-gray-700 px-6 h-16 flex">
        <div class="mr-10 flex items-center">
            <a href="#" class="flex item-center">
                <router-link to="/">
                    <img class="" src="../../public/images/virus.png" alt="bacteria" />
                </router-link>
            </a>
            <p
                class="text-2xl font-bold whitespace-nowrap dark:text-white tracking-widest ml-5">
                COVID-19 TRACKER
            </p>
        </div>

        <div class="flex flex-row items-center h-full font-medium">
                <div class="py-2 pr-4 pl-3 hidden md:block">
                    <a href="/"
                        class="md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-teal-200  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        aria-current="page">Home</a>
                </div>
                <div class="py-2 pr-4 pl-3 hidden md:block">
                    <a href="/Documentation"
                        class="md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-teal-200  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Documentation</a>
                </div>
        </div>


    </nav>
</template>

<script>
export default {
    name: "HeaderBar"
}
</script>

<style>
</style>