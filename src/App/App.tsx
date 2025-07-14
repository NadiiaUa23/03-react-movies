import SearchBar from "../SearchBar/SearchBar";
import React, { useEffect } from "react";
import { fetchMovies } from "../services/movieService";
import type { Movie } from "../types/movie";
import type { MoviesHttpResponse } from "../types/movie";
import axios from "axios";

import "./App.module.css";

export default function App() {
  return (
    <>
      <SearchBar />
      <div>🎬 React Movies</div>
    </>
  );
}
