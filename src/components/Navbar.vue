<template>
<!-- TODO NO TOCAR CSS -->
    <nav class="w-full bg-white shadow relative z-20 bg-gray-900 border-b-2 border-current ">
        <div class="px-6 h-16 flex items-center lg:items-stretch mx-auto">
           
                <div class="mr-10 flex items-center"> 
                    <a href="#" class="flex item-center">
                    <router-link to="/">
                    <img class="" src="../../public/images/virus.png" alt="bacteria" />
                  </router-link>
                 </a>
                 <span
                    class="self-center tracking-wider text-2xl whitespace-nowrap dark:text-white  fa-solid fa-text tracking-tight ml-5"
                >COVID-19 TRACKER
                </span>
                </div>
           
            <div class=" xl:flex hidden items-center h-full"  id="mobile-menu">
                <ul
                    class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium "
                >
                    <li>
                        <a
                            href="/"
                            class="block py-2 pr-4 pl-3 text-lg border-b md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-teal-200  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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