<template>
  <main class="container mx-auto px-4 sm:mt-28 mt-28 md:mt-20 h-screen">
    <div class="hero py-16">
      <!-- container -->
      <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div
          class=" grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <!-- hero text -->
          <div class=" col-span-6">
            <h1
              class=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight"
            >
              Hi, I'm @GrahamSH
            </h1>
            <hr class=" w-12 h-1 bg-indigo-600 rounded-full mt-8" />
            <p
              class="text-gray-800 text-2xl leading-relaxed mt-8 font-semibold"
            >
              Coder and Scratcher
            </p>
          </div>

          <!-- hero image -->
          <div class="col-span-6">
            <img src="/logo.svg" height="300px" width="300px" />
          </div>
        </div>
      </div>
    </div>
    <!-- end hero -->
  </main>
</template>

<script>
export default {
head () {
 return {
  title: 'Home - GrahamSH',
  }
  },
};
</script>
