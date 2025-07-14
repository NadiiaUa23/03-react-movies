import "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  const handleSearch = async (query: string) => {
    console.log(query);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}
