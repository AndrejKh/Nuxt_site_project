<template>
  <main>
    <h1
      class="
        text-4xl
        mb-6
        tracking-tight
        font-extrabold
        text-gray-900
        sm:text-5xl
        md:text-6xl
      "
    >
      Blog
    </h1>
    <ul>
      <div v-for="blog in blogs" class="mt-6" :key="blog.slug">
        <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">{{
              formatDate(blog.date)
            }}</span>
          </div>
          <div class="mt-2">
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
              class="text-2xl text-gray-700 font-bold hover:underline"
              >{{ blog.title }}</NuxtLink
            >
            <p class="mt-2 text-gray-600">
              {{ blog.description }}
            </p>
          </div>
          <div class="flex justify-between items-center mt-4">
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: blog.slug } }"
              class="text-blue-500 hover:underline"
              >Read more</NuxtLink
            >
            <div>
              <span class="flex items-center"
                ><img
                  :src="blog.author.image"
                  alt="avatar"
                  class="
                    mx-4
                    w-10
                    h-10
                    object-cover
                    rounded-full
                    hidden
                    sm:block
                  "
                />
                <h1 class="text-gray-700 font-bold">
                  {{ blog.author.name }}
                </h1>
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
      title: `Blog - GrahamSH`,
    };
  },
  async asyncData({ $content, params }) {
    const blogs = await $content("blog", params.slug)
      .only(["title", "description", "img", "slug", "author", "date"])
      .sortBy("date", "desc")
      .fetch();

    return {
      blogs,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      console.log(date)
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
<style class="postcss">
.blog-card {
  border-radius: 8px;
}
.blog-card a {
  border-radius: 8px;
}
.blog-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
