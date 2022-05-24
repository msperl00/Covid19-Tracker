<template>
    <div class="px-4 mx-auto">
        <div class="container md:flex ">
            <main class="px-4 mb-6" flex-grow>
                <p class="text-lg text-indigo-600 font-semibold tracking-wide uppercase mb-5">Can you help me <i
                        class="fa-solid fa-question"></i></p>
                <p class="mb-4  text-justify text-lg font-light">This is part of my final project, so I want you to take
                    part of this.</p>
                <p class="mb-5 text-lg font-light">Well, is <code
                        class=" font-light bg-indigo-100 px-1 py-0.5 rounded text-indigo-900">very simple</code>. You
                    can rate my job
                    and share it with everybody. If you will have any questions or suggestions about my project, please
                    let me know.</p>
                <code
                    class="text-xl font-light">  Your feedback is welcome <i class="fa-solid fa-exclamation"></i> <i class="fa-regular fa-heart"></i></code>

                <p class="my-8 text-justify  font-light text-gray-400 ">To your right, you can see the feedback form. So
                    read and complete it. It will not take much time. If something is needed or must be improved,
                    please report it below. (In massage section)
                </p>
                <p class="text-justify rounded pl-4  bg-indigo-100 font-light text-indigo-600">
                    You don't have to know about software or technical process <i class="fa-solid fa-exclamation"></i>
                </p>

            </main>
            <aside class="px-4 md:flex-none md:w-3/5">
                <div class="px-4 py-2 mb-2  tracking-wide uppercase bg-orange-200">Give me your feedback <i
                        class="fa-solid fa-exclamation"></i> <i class="fa-solid fa-circle-down"></i></div>
                <div class="flexstart">
                    <div class=" p-6 rounded-lg shadow-lg bg-white w-full">
                        <form>
                            <div class="form-group mb-6">
                                <input type="text" class="form-control block
        w-full
        px-3
        py-1.5 
        font-light
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name">
                            </div>
                            <div class="form-group mb-6">
                                <span class="text-lg font-light">Which word do you identify with?</span>

                                <div class="mt-2  font-light text-gray-700">
                                    <label class="inline-flex items-center">
                                        <input type="radio" class="form-radio" name="accountType" value="personal">
                                        <span class="ml-2">Software Developer</span>
                                    </label>
                                    <label class="inline-flex items-center ml-6">
                                        <input type="radio" class="form-radio" name="accountType" value="busines">
                                        <span class="ml-2">Student</span>
                                    </label>
                                    <label class="inline-flex items-center ml-6">
                                        <input type="radio" class="form-radio" name="accountType" value="busines">
                                        <span class="ml-2">University teacher</span>
                                    </label>
                                    <label class="inline-flex items-center ml-6">
                                        <input type="radio" class="form-radio" name="accountType" value="busines">
                                        <span class="ml-2">Other</span>
                                    </label>
                                </div>
                            </div>
                            <div class="form-group mb-6">
                                <label class="block mt-4 text-gray-700">
                                    <span class="text-black text-lg font-light">How many hours did I invest in the project Aprox.</span>
                                    <select class="form-select mt-1 block w-full font-light text-gray-600 border border-solid border-gray-300">
                                        <option value="" selected disabled hidden >Choose here</option>
                                        <option>less than 100</option>
                                        <option> between 100 and 200</option>
                                        <option> between 200 and 300</option>
                                        <option>more than 300</option>
                                    </select>
                                </label>
                            </div>
                            <div class="form-group mb-6">
                             <span class="text-black text-lg font-light">Just to have the possibility to contact you </span>
                                <input type="email" class="form-control block
        w-full
        px-3
        py-1.5
        font-light
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                    placeholder="Email address (Not required) ">
                            </div>
                            <div class="form-group mb-6">
                             <span class="text-black text-lg font-light">Suggestions, tips and errors</span>
                                <textarea class="
        form-control
        block
        w-full
        px-3
        py-1.5
        font-light
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                            </div>
                            <div class="form-group form-check text-center mb-6">
                                <input type="checkbox"
                                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                    id="exampleCheck87" checked>
                                <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me
                                    a copy of this message</label>
                            </div>
                            <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Send</button>
                        </form>

                    </div>
                </div>

            </aside>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>