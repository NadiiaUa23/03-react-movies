import "./App.module.css";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";

import { fetchMovies } from "../services/movieService";
import type { Movie } from "../types/movie";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieGrid from "../MovieGrid/MovieGrid";
// import MovieGrid from "../MovieGrid/MovieGrid";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      setError(false);
      setMovies([]);

      const results = await fetchMovies(query);
      console.log("Отримані фільми:", results);
      if (results.length === 0) {
        toast("No movies found for your request.");
        return;
      }
      setMovies(results);
    } catch (error) {
      setError(true);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      <Toaster position="bottom-right" reverseOrder={false} />
      <MovieGrid movies={movies} onSelect={(movie) => console.log(movie)} />
    </>
  );
}
