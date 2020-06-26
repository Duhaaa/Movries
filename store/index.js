export const state = () => ({
  list: {},
  type: {},
  movie: {},
  serie: {},
  error: {}
});

export const mutations = {
  setMovie(state, movie) {
    state.movie = movie;
  },
  setSeries(state, series) {
    state.series = series;
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
  setError(state, error) {
    state.error = error;
  }
};

export const actions = {
  // Popular Movies
  async fetchPopularMovies({ commit }) {
    await this.$api
      .get("/movie/popular")
      .then(res => {
        commit("setList", res.data);
        commit("setType", "movie")
        //commit("changeLoadingState", false);
      })
      .catch(e => commit("setError", e));
  },
  // Top Rated Movies
  async fetchTopRatedMovies({ commit }) {
    await this.$api
      .get("/movie/top_rated")
      .then(res => {
        commit("setList", res.data);
        commit("setType", "movie")
        //commit("changeLoadingState", false);
      })
      .catch(e => commit("setError", e));
  },
  // Upcoming Movies
  async fetchUpcomingMovies({ commit }) {
    await this.$api
      .get("/movie/upcoming")
      .then(res => {
        commit("setList", res.data);
        commit("setType", "movie")
      })
      .catch(e => commit("setError", e));
  },
  // Single Movie
  async fetchMovieById({commit}, id) {
    const options = "?append_to_response=credits,similar,external_ids";
    await this.$api
      .get(`/movie/${id + options}`)
      .then(res => {
        commit("setMovie", res.data);
        //commit("changeLoadingState", false);
      })
      .catch(e => commit("setError", e));
  },
  // Trending Movies & Series
  async fetchTrending({commit}) {
    await this.$api
      .get("/trending/all/day")
      .then(res => {
        commit("setList", res.data);
        //commit("changeLoadingState", false)
      })
      .catch(e => commit("setError", e));
  },
  // Single Serie
  async fetchSerieById({commit}, id) {
    const options = "?append_to_response=credits,external_ids"
    await this.$api
      .get(`/tv/${id + options}`)
      .then(res => {
        commit("setSerie", res.data);
        //commit("changeLoadingState", false);
      })
      .catch(e => commit("setError", e))
  },
  // Popular Series
  async fetchPopularSeries({ commit }) {
    await this.$api
      .get("/tv/popular")
      .then(res => {
        commit("setList", res.data);
        commit("setType", "serie")
      })
      .catch(e => commit("setError", e));
  },
  // Series On Air
  async fetchOnAirSeries({ commit }) {
    await this.$api
      .get("/tv/on_the_air")
      .then(res => {
        commit("setList", res.data);
        commit("setType", "serie")
      })
      .catch(e => commit("setError", e));
  },
};
