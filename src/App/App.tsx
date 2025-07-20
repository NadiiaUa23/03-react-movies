import "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
// import axios from "axios";
// import { fetchMovies } from "../services/movieService";
// import type { Movie } from "../types/movie";
// import { useState } from "react";
// import MovieGrid from "../MovieGrid/MovieGrid";

export default function App() {
  // const [movies, setMuvies] = useState<Movie[]>([]);

  const handleSearch = (searchQuery: string) => {
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="bottom-right" reverseOrder={false} />
      {/* {movies.length > 0 && <MovieGrid movies={movies} />} */}
    </>
  );
}
