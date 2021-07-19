import "consola";
import fetch from "node-fetch"
if (process.env.NODE_ENV === "development") {
  consola.info(
    "Hello, and thanks for having interest in my site. However, I am not accepting contributions, as this is my personal site, and my project. If you want to contribute to something, find another open source project that needs your help. \n~ GrahamSH"
  );
}
import tailwindTypography from "@tailwindcss/typography";
import lineClamp from "tailwindcss-line-clamp";
const createSitemapRoutes = async () => {
  let routes = [];
  const { $content } = require("@nuxt/content");
  let posts = await $content("blog").fetch();
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
  target: "static",
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
      mode: "jit",
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
  modules: ["@nuxt/content", "@nuxtjs/sitemap", "vue-plausible",    '@nuxtjs/feed', "@nuxtjs/markdownit",'@nuxtjs/critters',],
  plausible: {
    domain: "grahamsh.com",
    apiHost: "https://analytics.jeffalo.net",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //parallel: true,
  },
  sitemap: {
    hostname: "https://grahamsh.com",
    gzip: true,
    routes: createSitemapRoutes,
    exclude: ["/blogs/**"],
  },
  plugins: ["~/plugins/json-ld", "~/plugins/unicons"],
  storybook: {
    stories: ["~/components/**/*.stories.mdx"],
    addons: ["@storybook/addon-docs"],
    parameters: {
      //viewMode: 'docs'
    },
  },
  feed: [
    {
      // this sets up where to find your rss feed - mine will be called feed.xml, and located in the root of my project
      path: '/feed.xml',
      // this function will be what sets the data that goes into feed.xml
      async create(feed) {
        // the main options of what the page is called, desc, and where to find it as a full path
        feed.options = {
          title: 'Blog - GrahamSH',
          description: 'Code notes and other assorted goodies from GrahamSH',
          link: 'https://grahamsh.com/feed.xml',
        };
  
        // we're going to require the content module so we have access to $content, then we're going to fetch all of our posts. If you're using eslint in your project, you might need to ignore this line because it's requiring something inside a function. Will work just fine, it might yell at you though. :)
  
        // eslint-disable-next-line global-require
        const { $content } = require('@nuxt/content');
  
        // get all the posts we have
        const posts = await $content('blog').fetch();
        // then, we'll loop over each post and grab the data fields we want to show in our feed. The name of your fields might be different than mine - that depends on how your data is set up in your Content settings.
        posts.forEach(async (post) => {
          // the url of the post is set first
          const url = `https://grahamsh.com/blog/${post.slug}`;
          // then we do addItem, and give it all the details we want. You'll often see a date field here too - I don't have one because I don't post my dates on my posts.
          feed.addItem({
            title: post.title,
            id: url,
            link: url,
            description: post.blurb,
            date: new Date(post.date),
            // this is what we did in part two! Accessing that body text, that we converted into HTML
            content: post.bodyText,
          });
        });
      }, // this is the end of the create function
  
      // cacheTime sets how long the feed is cached - this is what they had in the feed-module example, and I've left it as is for now. Type sets what kind of feed it is - you can do atom or json as well.
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
    },
  ], // this is the end of the feed settings
  
  // This is our hook! We check if the document is a markdown file (meaning it's a blog post in this case), and if so we get the reading time and set it to a property on the document, and also set our plain text of the post to a property.
  hooks: {
    'content:file:beforeInsert': (document) => {
      // first, we're going to bring in our markdownit file - in JS, it's written as markdown-it, but in the package.json and modules bit, there's no dash - hence the eslint-disable line. It will work fine - it just doesn't get that the package name is written differently
      // eslint-disable-next-line
      const md = require('markdown-it')();
      if (document.extension === '.md') {
        // ignoring eslint again :) same warning as earlier
        // eslint-disable-next-line global-require
        const { text } = require('reading-time')(document.text);
  
        document.readingTime = text;
        // Now we pass our post's plain text into the md.render file, which will convert it into HTML
        // Then we store that value in our bodyText variable on our post
        const mdToHtml = md.render(document.text);
        document.bodyText = mdToHtml;
      }
    },
  }, // end of the hook setting
  // We'll also need to add in some default settings for the markdown-it package - this part I don't quite understand yet as far as what everything's doing, they're just the default settings listed on the package's GitHub page
  markdownit: {
      preset: 'default',
      linkify: true,
      breaks: true,
      use: ['markdown-it-div', 'markdown-it-attrs'],
    },
  
};
