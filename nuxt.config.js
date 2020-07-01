require("dotenv").config();
//import axios from "axios";

export default {
  target: "static",
  mode: "universal",
  webfontloader: {
    google: {
      families: ["Montserrat:700", "Open+Sans:400,600"]
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Movries", //process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Movies and Series fetcher using TMDb API and NuxtJS."
      },

      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "http://movries.surge.sh"
      },

      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Movries"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Movries - Movies and Series fetcher"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Movries. A Movies and Series fetcher using TMDb API and NuxtJS. Created by Duha."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "http://movries.surge.sh/movries.jpg"
      },
      {
        hid: "og:locale",
        property: "og:locale",
        content: "en"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#4fc08d", throttle: 0 },
  /*
   ** Global CSS
   */
  css: ["@fortawesome/fontawesome/styles.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/filters.js", "~plugins/api.js", "~plugins/fa.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/dotenv"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-lazy-load",
      {
        directiveOnly: true,
        defaultImage: '/images/default-image.png'
      }
    ], "nuxt-webfontloader",
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
