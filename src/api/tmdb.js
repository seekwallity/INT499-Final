import axios from "axios";

const API_KEY = "82e66ab93ebbec18a31414d3fc2fc506";
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
