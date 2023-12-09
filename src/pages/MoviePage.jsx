import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../services/api.js";

function MoviePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchAndSetMovies() {
      const fetchedMovies = await fetchMovies();
      setMovies(fetchedMovies);
    }

    fetchAndSetMovies();
  }, []);

  return (
    <div>
      <div>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviePage;
