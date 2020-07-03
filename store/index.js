import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const state = () => ({
  list: {},
  type: {},
  movie: {},
  serie: {},
  person: {}
});

export const mutations = {
  setMovie(state, movie) {
    state.movie = movie;
  },
  setSerie(state, serie) {
    state.serie = serie;
  },
  setList(state, list) {
    state.list = list;
  },
  setType(state, type) {
    state.type = type;
  },
  setPerson(state, person) {
    state.person = person;
  }
};

export const actions = {
  // Popular Movies
  async fetchPopularMovies({ commit }) {
    await this.$api.get("/movie/popular").then(res => {
      commit("setList", res.data);
      commit("setType", "movie");
    });
  },
  // Top Rated Movies
  async fetchTopRatedMovies({ commit }) {
    await this.$api.get("/movie/top_rated").then(res => {
      commit("setList", res.data);
      commit("setType", "movie");
    });
  },
  // Upcoming Movies
  async fetchUpcomingMovies({ commit }) {
    await this.$api.get("/movie/upcoming").then(res => {
      commit("setList", res.data);
      commit("setType", "movie");
    });
  },
  // Single Movie
  async fetchMovieById({ commit, error }, id) {
    const options = "?append_to_response=credits,similar,external_ids";
    await this.$api.get(`/movie/${id + options}`).then(res => {
      commit("setMovie", res.data);
    });
  },
  // Trending Movies & Series
  async fetchTrending({ commit }) {
    await this.$api.get("/trending/all/day").then(res => {
      commit("setList", res.data);
    });
  },
  // Single Serie
  async fetchSerieById({ commit }, id) {
    const options = "?append_to_response=credits,external_ids";
    await this.$api.get(`/tv/${id + options}`).then(res => {
      commit("setSerie", res.data);
    });
  },
  // Fetch Season
  async fetchSeasonByIdAndNumber({ commit }, payload) {
    await this.$api
      .get(`/tv/${payload.serie_id}/season/${payload.season_number}`)
      .then(res => {
        commit("setList", res.data);
      });
  },
  // Popular Series
  async fetchPopularSeries({ commit }) {
    await this.$api.get("/tv/popular").then(res => {
      commit("setList", res.data);
      commit("setType", "serie");
    });
  },
  // Series On Air
  async fetchOnAirSeries({ commit }) {
    await this.$api.get("/tv/on_the_air").then(res => {
      commit("setList", res.data);
      commit("setType", "serie");
    });
  },
  // Single Person
  async fetchPersonById({ commit }, id) {
    const options = "?append_to_response=combined_credits,external_ids";
    await this.$api.get(`/person/${id + options}`).then(res => {
      commit("setPerson", res.data);
    });
  },
  // Search Movies and Series
  async searchMoviesAndSeries({ commit }, q) {
    await this.$api.get(`/search/multi?query=${q}`).then(res => {
      commit("setList", res.data);
    });
  }
};
