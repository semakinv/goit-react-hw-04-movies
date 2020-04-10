import axios from 'axios';
const baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '4f292cf02e36b127ea919faf9e96235d';

const fetchHomePageUrl = () => {
  return axios.get(`${baseURL}/trending/movie/day?api_key=${API_KEY}`);
};
const fetchMovieDetailsPage = movie_id => {
  return axios.get(`${baseURL}/movie/${movie_id}?api_key=${API_KEY}`);
};
const fetchCast = movie_id => {
  return axios.get(`${baseURL}/movie/${movie_id}/credits?api_key=${API_KEY}`);
};

const fetchReviews = movie_id => {
  return axios.get(`${baseURL}/movie/${movie_id}/reviews?api_key=${API_KEY}`);
};

const fetchMovies = search_query => {
  return axios.get(
    `${baseURL}/search/movie${search_query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  );
};

export default {
  fetchHomePageUrl,
  fetchMovieDetailsPage,
  fetchCast,
  fetchReviews,
  fetchMovies,
};
