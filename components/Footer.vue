<template>
  <footer class="bg-indigo-700 pt-10 sm:mt-10 pt-10">
    <div class="max-w-6xl m-auto text-indigo-800 flex flex-wrap justify-left">
      <!-- Col-1 -->
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <!-- Col Title -->
        <div class="text-xs uppercase text-indigo-400 font-medium mb-6">
          Pages
        </div>

        <!-- Links -->
        <NuxtLink
          to="/"
          class="
            my-3
            block
            text-indigo-300
            hover:text-indigo-100
            text-sm
            font-medium
            duration-700
          "
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/blog"
          class="
            my-3
            block
            text-indigo-300
            hover:text-indigo-100
            text-sm
            font-medium
            duration-700
          "
        >
          Blog
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="
            my-3
            block
            text-indigo-300
            hover:text-indigo-100
            text-sm
            font-medium
            duration-700
          "
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="
            my-3
            block
            text-indigo-300
            hover:text-indigo-100
            text-sm
            font-medium
            duration-700
          "
        >
          Contact
        </NuxtLink>
      </div>

      <!-- Col-3 -->
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <!-- Col Title -->
        <div class="text-xs uppercase text-indigo-400 font-medium mb-6">
          Me on the web
        </div>

        <!-- Links -->
        <a
          href="https://github.com/GrahamSH-LLK"
          class="
            my-3
            block
            text-indigo-300
            hover:text-indigo-100
            text-sm
            font-medium
            duration-700
          "
        >
          GitHub
        </a>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="pt-2">
      <div
        class="
          flex
          pb-5
          px-3
          m-auto
          pt-5
          border-t border-indigo-500
          text-indigo-400 text-sm
          flex-col
          md:flex-row
          max-w-6xl
        "
      >
        <div class="mt-2">© Copyright 2021 GrahamSH. All Rights Reserved.</div>
        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <social-icon to="https://github.com/GrahamSH-LLK">
            <svg
              class="
                fill-current
                cursor-pointer
                text-indigo-500
                hover:text-indigo-400
              "
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              /></svg
          ></social-icon>
        </div>
      </div>
    </div>
  </footer>
</template>
