<template>
  <div>
    <Nav />
    <Nuxt />
<footer class="bg-gray-800 pt-10 sm:mt-10 pt-10">
    <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <!-- Col-1 -->
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <!-- Col Title -->
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                Pages
            </div>

            <!-- Links -->
            <NuxtLink to="/" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Home
            </NuxtLink>
            <NuxtLink to="/blog" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Blog
            </NuxtLink>
            <NuxtLink to="/about" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                About
            </NuxtLink>
        </div>


        <!-- Col-3 -->
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <!-- Col Title -->
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                Me on the web
            </div>

            <!-- Links -->
            <a href="https://github.com/GrahamSH-LLK" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                GitHub
            </NuxtLink>
        </div>
    </div>

    <!-- Copyright Bar -->
    <div class="pt-2">
        <div class="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
            <div class="mt-2">
                © Copyright 2021 GrahamSH. All Rights Reserved.
            </div>

            <!-- Required Unicons (if you want) -->
        </div>
    </div>
</footer>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
