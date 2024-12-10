import React, { useEffect, useState } from "react";

const MovieResults = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedResults = localStorage.getItem("movieResults");
    if (storedResults) {
      setMovies(JSON.parse(storedResults));
    }
  }, []);

  return (
    <div className="movie-results">
      <h1>Movie Results</h1>
      {movies.length ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default MovieResults;
