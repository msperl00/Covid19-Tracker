<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
        <div class=" flex flex-wrap justify-between items-center mx-auto">
            <a href="#" class="flex">
                <router-link to="/">
                    <img class="mr-3 h-10" src="../../public/images/virus.png" alt="bacteria" />
                </router-link>
                <span
                    class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white "
                >Covid Tracker</span>
                <router-link to="/about">
                    <img class="ml-3 h-10" src="../../public/images/prismaticos.png" alt="prismaticos" />
                </router-link>
            </a>
            <div class="hidden w-full md:block md:w-auto"  id="mobile-menu">
                <ul
                    class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
                >
                    <li>
                        <a
                            href="/"
                            class="block py-2 pr-4 pl-3 text-gray-700  text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            aria-current="page"
                        >Home</a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            class="block py-2 pr-4 pl-3 text-gray-700 text-lg border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style>
</style>