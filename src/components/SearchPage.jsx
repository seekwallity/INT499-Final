import React, { useState } from "react";
import { searchMovies } from "./api";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchMovies(query);
    localStorage.setItem("movieResults", JSON.stringify(results));
    navigate("/results");
  };

  return (
    <div className="search-page">
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchPage;
