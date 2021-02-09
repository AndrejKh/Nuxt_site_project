<template>
  <main class="container mx-auto px-4 mt-28 md:mt-20 h-screen ">
    <h1
      class="text-4xl mb-6 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
    >
      Blog
    </h1>
    <ul>
      <div v-for="article in articles" class="mt-6" :key="article.slug">
        <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">{{ formatDate(article.updatedAt) }}</span>
          </div>
          <div class="mt-2">
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              class="text-2xl text-gray-700 font-bold hover:underline"
              >{{ article.title }}</NuxtLink
            >
            <p class="mt-2 text-gray-600">
              {{ article.description }}
            </p>
          </div>
          <div class="flex justify-between items-center mt-4">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="text-blue-500 hover:underline">Read more</NuxtLink>
            <div>
              <span class="flex items-center"
                ><img
                  :src="article.author.image"
                  alt="avatar"
                  class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                />
                <h1 class="text-gray-700 font-bold">{{ article.author.name }}</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
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
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug", "author", "updatedAt"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  },

};
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
