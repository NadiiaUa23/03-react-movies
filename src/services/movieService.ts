import axios from "axios";
import type { Movie, MoviesHttpResponse } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDhkNDNkYWUyNTY2MzQyZDEzMWY5Yzk4MDBhMDRmYSIsIm5iZiI6MTc1MjA3NDc1Mi45NDU5OTk5LCJzdWIiOiI2ODZlOGEwMGU5MDkxYjI5ZGE5YTRiZjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WRQ2c_ngw_W2MKeL-1Gq3tSLdz5dcB2ZxVPMfZduLCk";

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<MoviesHttpResponse>(API_URL, {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  console.log(response);

  return response.data.results;
};
