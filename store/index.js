export const state = () => ({
  movies: {
    type: "",
    list: []
  },
  movie: {},
  trending: {},
  loading: true,
  error: {}
});

export const mutations = {
  setMovies(state, movies) {
    state.movies = movies;
  },
  setMovie(state, movie) {
    state.movie = movie;
  },
  setTrending(state, trending) {
    state.trending = trending;
  },
  changeLoadingState(state, loading) {
    state.loading = loading;
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
        commit("setMovies", { type: "popular", list: res.data });
        commit("changeLoadingState", false);
      })
      .catch(e => commit("setError", e));
  },
  // Top Rated Movies
  async fetchTopRatedMovies({ commit }) {
    await this.$api
      .get("/movie/top_rated")
      .then(res => {
        commit("setMovies", { type: "top_rated", list: res.data });
        commit("changeLoadingState", false);
      })
      .catch(e => commit("setError", e));
  },
  // Upcoming Movies
  async fetchUpcomingMovies({ commit }) {
    await this.$api
      .get("/movie/upcoming")
      .then(res => {
        commit("setMovies", { type: "upcoming", list: res.data });
        commit("changeLoadingState", false);
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
        commit("changeLoadingState", false);
      })
      .catch(e => commit("setError", e));
  },
  // Trending Movies & Series
  async fetchTrending({commit}) {
    await this.$api
      .get("/trending/movie/day")
      .then(res => {
        commit("setTrending", res.data);
        commit("changeLoadingState", false)
      })
      .catch(e => commit("setError", e));
  }
};
