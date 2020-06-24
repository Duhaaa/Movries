require("dotenv").config();
import axios from "axios";

export default {
  generate: {
    routes() {
      return axios
        .get("https://api.themoviedb.org/3/discover/movie?api_key=" + process.env.apikey)
        .then(res => {
          return res.data.results.map(movie => {
            return "/movies/" + movie.id;
          });
        });
    }
  },
  mode: "universal",
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
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:400,600"
      },
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
  modules: [],

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
