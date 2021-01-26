<template>
  <main class="container mx-auto px-4 mt-28 md:mt-16 ">
    <article class="prose">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
      <nav>
        <h4>Table of contents</h4>
        <ul class="list-none">
          <li
            v-for="link of article.toc"
            :key="link.id"
            :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
          >
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <nuxt-content :document="article" />
    </article>
  </main>
</template>
<style>
.prose .list-none > li::before {
  display: none;
}
.icon.icon-link {
  background-image: url("~assets/svg/icon-hashtag.svg");
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  margin-right: 5px;
  visibility: hidden;
}
a:hover .icon.icon-link {
  visibility: visible !important;
}
</style>
<script>
export default {
  head() {
    return {
      title: `${this.article.title} - Blog - GrahamSH`
    };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  }
};
</script>
