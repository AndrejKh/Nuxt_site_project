<template>
  <main class="container mx-auto px-4 sm:mt-28 mt-28 md:mt-20 min-h-screen">
    <div class="hero py-16">
      <!-- container -->
      <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <!-- hero text -->
          <div class="col-span-6">
            <h1
              class="font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight"
            >
              Hi, I'm @GrahamSH
            </h1>
            <hr class="w-12 h-1 bg-indigo-600 rounded-full mt-8" />
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
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
          >
            My portfolio
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            GrahamSH
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Some projects I've worked on
          </p>
        </div>

        <div class="mt-10">
          <dl
            class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <a href="https://scratchaddons.com">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      focusable="false"
                      width="1em"
                      height="1em"
                      style="
                        -ms-transform: rotate(360deg);
                        -webkit-transform: rotate(360deg);
                        transform: rotate(360deg);
                      "
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      class="h-6 w-6"
                    >
                      <path
                        d="M17 22H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1a4 4 0 0 1 7.3-2.18A3.86 3.86 0 0 1 14 6h3a1 1 0 0 1 1 1v3a4 4 0 0 1 2.18 7.3A3.86 3.86 0 0 1 18 18v3a1 1 0 0 1-1 1zM5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11v-3.18a1 1 0 0 1 .42-.82a1 1 0 0 1 .91-.13a1.77 1.77 0 0 0 1.74-.23a2 2 0 0 0 .93-1.37a2 2 0 0 0-.48-1.59a1.89 1.89 0 0 0-2.17-.55a1 1 0 0 1-.91-.13a1 1 0 0 1-.42-.82V8h-3.2a1 1 0 0 1-1-1.33a1.77 1.77 0 0 0-.23-1.74a1.94 1.94 0 0 0-3-.43A2 2 0 0 0 8 6a1.89 1.89 0 0 0 .13.67A1 1 0 0 1 7.18 8z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  ScratchAddons
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  I've made many contributions to ScratchAddons, the all in one
                  extension for new Scratch features and improvements.
                </dd>
              </div>
            </div>

            <div class="flex">
              <div class="flex-shrink-0">
                <a href="https://bijou.js.org">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <!-- Heroicon name: scale -->

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      focusable="false"
                      width="1em"
                      height="1em"
                      style="
                        -ms-transform: rotate(360deg);
                        -webkit-transform: rotate(360deg);
                        transform: rotate(360deg);
                      "
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      class="h-6 w-6"
                    >
                      <path
                        d="M7.5 10h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2zm4 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm0-4h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm6.92-2.62a1 1 0 0 0-.21-1.09l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0l-.28-.1H5.5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a1 1 0 0 0 0-2h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h4a1 1 0 0 0 .92-.62zM13.5 8a1 1 0 0 1-1-1V5.41L15.09 8zm7 4h-5a1 1 0 0 0-1 1v8a1 1 0 0 0 .53.88a1 1 0 0 0 1-.05l1.97-1.3l2 1.3a1 1 0 0 0 1.5-.83v-8a1 1 0 0 0-1-1zm-1 7.12l-.94-.63a1 1 0 0 0-1.12 0l-.94.63V14h3z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  Bijou.js
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  I'm a contributor to Bijou.js, the JS library for quick
                  snippets.
                </dd>
              </div>
            </div>

            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <!-- Heroicon name: lightning-bolt -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  GrahamSH.com
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  I rewrote GrahamSH.com (my site) in Nuxt.js.
                </dd>
              </div>
            </div>

            <div class="flex">
              <div class="flex-shrink-0">
                <a href="https://wasteof.money">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <!-- Heroicon name: annotation -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-gray-900">
                  wasteof.money
                </dt>
                <dd class="mt-2 text-base text-gray-500">
                  I've contributed a lot to wasteof.money, the next generation
                  social media.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <section>
      <h2 class="mt-10 text-xl font-semibold text-gray-900 dark:text-gray-100">
        My GitHub repositories
      </h2>
      <div class="mt-3">
        <div
          v-if="$fetchState.pending"
          class="grid grid-cols-1 gap-2 sm:grid-cols-2"
        >
          <Skeleton
            v-for="item in 6"
            :key="`repo-skeleton-${item}`"
            type="repository"
          />
        </div>

        <div v-if="$fetchState.error">Error loading GitHub repositories</div>

        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <a
            v-for="(repo, index) in repos"
            :key="`repo-${index}`"
            :href="repo.html_url"
            target="_blank"
            rel="noreferrer"
            title="Click here to visit this repository"
          >
            <Repo
              :name="repo.name"
              :language="repo.language"
              :stars="repo.stargazers_count"
              :description="repo.description || ''"
              :forks="repo.forks"
              class="h-full"
            />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      repos: [],
    };
  },
  head() {
    return {
      title: "Home - GrahamSH",
    };
  },
  fetchOnServer: false,
  async fetch() {
    const repos = await (
      await fetch("https://api.github.com/users/GrahamsH-LLK/repos")
    ).json();
    console.log(repos);
    const filter = [];
    this.repos = repos
      ?.filter((repo) => repo.fork === false && !filter.includes(repo.name))
      ?.sort((a, b) => b?.stargazers_count - a?.stargazers_count);
  },
};
</script>
