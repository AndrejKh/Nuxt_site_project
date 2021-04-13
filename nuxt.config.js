import tailwindTypography from "@tailwindcss/typography";
import lineClamp from "tailwindcss-line-clamp";
const createSitemapRoutes = async () => {
  let routes = [];
  const { $content } = require("@nuxt/content");
  let posts = await $content("articles").fetch();
  posts.forEach((post) => {
    console.log(post);
    routes.push(`blog/${post.slug}`);
  });
  return routes;
};

export default {
  ssr: false,
  telemetry: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",
  generate: {
    async routes() {
      const { $content } = require("@nuxt/content");
      const files = await $content({ deep: true }).only(["path"]).fetch();

      return files.map((file) => (file.path === "/index" ? "/" : file.path));
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "GrahamSH",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.svg" }],
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography, lineClamp],
      theme: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  pwa: {
    icons: {
      source: `[srcDir]/[staticDir]/logo.svg`,
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/pwa",
    "@nuxtjs/svg",
  ],

  workbox: {
    runtime: [
      {
        urlPattern: "https://fonts.gstatic.com/.*",
        handler: "staleWhileRevalidate",
      },
      {
        urlPattern: ".*",
        handler: "staleWhileRevalidate",
      },
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content", "@nuxtjs/sitemap", "vue-plausible"],
  plausible: {
    domain: "grahamsh.com",
    apiHost: "https://analytics.jeffalo.net",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  sitemap: {
    hostname: "https://grahamsh.com",
    gzip: true,
    routes: createSitemapRoutes,
    exclude: ["/articles/**"],
  },
  plugins: ["~/plugins/json-ld", "~/plugins/unicons"],
};
