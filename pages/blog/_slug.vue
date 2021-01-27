<template>
  <main class="container mx-auto px-4 mt-28 md:mt-16 min-h-screen">
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
      <script
        src="https://utteranc.es/client.js"
        repo="grahamsh-llk/site"
        issue-term="title"
        theme="github-light"
        crossorigin="anonymous"
        async
      ></script>
    </article>
  </main>
</template>
<style class="postcss">
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
pre[class*="language-"].line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber;
}

pre[class*="language-"].line-numbers > code {
  position: relative;
  white-space: inherit;
}

.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 0;
  font-size: 100%;
  left: -3.8em;
  width: 3em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #999;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.line-numbers-rows > span {
  display: block;
  counter-increment: linenumber;
}

.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}
.nuxt-content-highlight {
  @apply relative;
}
.nuxt-content-highlight > .filename {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 1;
  margin-top: 0.75rem;
  margin-right: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  --tw-text-opacity: 1;
  color: rgba(243, 244, 246, var(--tw-text-opacity));
  letter-spacing: -0.025em;
  z-index: 10;
  color: black;
}

/* Add top padding to code blocks with filename */
.nuxt-content-highlight > .filename + pre[class*="language-"] {
  @apply pt-8;
}
</style>
<script>
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";

export default {
  mounted() {
    Prism.highlightAll();
  },

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
<style class="postcss">
article.prose {
  max-width: 80ch !important;
}
</style>
