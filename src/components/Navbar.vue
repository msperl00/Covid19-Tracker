<template>
    <nav class=" px-6 py-8  bg-teal-500">
        <div class="container mx-auto flex items-center justify-between">
            <a href="#" class="flex cursor-pointer text-white-800 dark:text-white">
                <router-link to="/">
                    <img class="mr-3 h-10" src="../../public/images/virus.png" alt="bacteria" />
                </router-link>
                <span
                    class="self-center text-2xl whitespace-nowrap dark:text-white  font-semibold tracking-tight"
                >COVID-19 TRACKER</span>
                <router-link to="/about">
                    <img class="ml-3 h-10" src="../../public/images/prismaticos.png" alt="prismaticos" />
                </router-link>
            </a>
            <div class="hidden w-full md:block md:w-auto px-10"  id="mobile-menu">
                <ul
                    class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
                >
                    <li>
                        <a
                            href="/"
                            class="block py-2 pr-4 pl-3   text-lg border-b md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-teal-200  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            aria-current="page"
                        >Home</a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            class="block py-2 pr-4 pl-3   text-lg border-b   md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-teal-200  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >Documentation</a>
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