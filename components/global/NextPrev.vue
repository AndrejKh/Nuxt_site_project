<template>
  <div>
    <NuxtLink v-if="prev" :to="{ name: 'blog-slug', params: { slug: prev.slug } }">
      {{ prev.title }}
    </NuxtLink>

    <NuxtLink v-if="next" :to="{ name: 'blog-slug', params: { slug: next.slug } }">
      {{ next.title }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const [prev, next] = await $content('articles')
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      prev,
      next
    }
  }
}
</script>
