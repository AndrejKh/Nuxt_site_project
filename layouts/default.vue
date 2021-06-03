<template>
  <div>
    <Nav />
    <Nuxt />
<Footer/>
  </div>
</template>

<script>
export default {
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: "https://grahamsh.com",
      logo: "https://grahamsh.com/logo.svg",
    };
  },
  head() {
    return {
      title: `GrahamSH`,
    };
  },
};
</script>
<style class="postcss">
main {
  margin-top: 7rem;
}
.error svg {
  display: inline !important;
}
</style>
