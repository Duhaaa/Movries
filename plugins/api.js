import axios from "axios";

export default function({env}, inject) {
  const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",

    headers: {
      common: {
        Authorization: process.env.API_KEY || env.API_KEY
      }
    }
  });

  inject("api", tmdb);
}
