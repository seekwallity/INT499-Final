import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api/tmdb";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        setMovies(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    loadMovies();
  }, []);

  return (
    <div className="movies">
      <h2>Popular Movies</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>Rating: {movie.vote_average}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
