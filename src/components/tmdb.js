import axios from "axios";

const API_KEY = "your_tmdb_api_key";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      page: 1,
    },
  });
  return response.data.results;
};
