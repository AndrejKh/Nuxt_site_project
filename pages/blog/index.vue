<template>
  <main class="container mx-auto px-4 mt-28 md:mt-20 h-screen ">
    <h1
      class="text-4xl mb-6 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
    >
      Blog
    </h1>
    <ul>
      <li v-for="article in articles" class="xs:w-full md:w-1/2 px-2 xs:mb-6 mb-12" :key="article.slug">
        <NuxtLink class="flex transition-shadow duration-150 ease-in-out shadow-sm focus:shadow hover:shadow-md xxlmax:flex-col bg-gray-300 rounded-xl" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img v-if="article.img" class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover" :src="article.img" />
          <div
            class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
          >
            <h2 class="font-bold">{{ article.title }}</h2>
            <p>by Exploding Bricks</p>
            <p class="font-bold text-gray-600 text-sm">{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>

    </ul>
  </main>
</template>
<script>
  export default {
  head() {
    return {
      title: `Blog - GrahamSH`
    };
  },
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'desc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>
<style class="postcss">
.article-card {
  border-radius: 8px;
}
.article-card a {
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
