<template>
  <nav
    class="bg-indigo-700 p-2 mt-0 fixed w-full z-10 top-0 drop-shadow-md filter"
  >
    <div class="container mx-auto flex flex-wrap items-center">
      <div
        class="
          flex
          w-full
          md:w-1/2
          justify-center
          md:justify-start
          text-white
          font-bold
        "
      >
        <NuxtLink
          class="
            text-white
            no-underline
            hover:text-white
            hover:no-underline
            font-bold
          "
          to="/"
        >
          <span class="text-2xl"
            ><img
              class="h-10 pr-2 inline-block"
              src="/logo.svg"
            />GrahamSH</span
          >
        </NuxtLink>
      </div>
      <div
        class="
          flex
          w-full
          content-center
          justify-between
          md:w-1/2
          md:justify-end
        "
      >
        <ul
          class="
            list-reset
            flex
            justify-between
            flex-1
            md:flex-none
            items-center
          "
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
        <Search />
      </div>
    </div>
  </nav>
</template>
<style class="postcss">
.nuxt-link-exact-active {
  @apply text-white !important;
}
</style>
