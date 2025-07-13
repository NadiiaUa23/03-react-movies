import SearchBar from "../SearchBar/SearchBar";
import { useEffect } from "react";
import { fetchMovies } from "../services/movieService";

import "./App.module.css";

export default function App() {
  useEffect(() => {
    fetchMovies("batman")
      .then((movies) => console.log("Фільми:", movies))
      .catch((error) => console.error("Помилка:", error));
  }, []);

  return (
    <>
      {/* <SearchBar /> */}
      <div>🎬 React Movies</div>
    </>
  );
}
