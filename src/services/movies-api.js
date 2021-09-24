import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "b760a58e749aebdb345fb45ac26ad542";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY };

export async function fetchPopularFilms() {
  const response = await axios.get("/trending/movies/day", {
    params: { page: 1 },
  });
  return response.data.results;
}

export async function fetchQueryFilms(query) {
  const response = await axios.get("/search/movie", { params: { query } });
  return response.data.results;
}

export async function fetchFilmInfo(id) {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
}

export async function fetchFilmCast(id) {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data.cast;
}

export async function fetchFilmReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data.results;
}
