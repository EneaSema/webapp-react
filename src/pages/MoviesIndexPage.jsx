import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import axios from "axios";

export default function MoviesIndexPage() {
  console.log("ciao");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((res) => {
      const movies = res.data.movies;
      setMovies(movies);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1>Movies List</h1>
      </div>
      <h5>ciao</h5>
      <MoviesList movies={movies} />
    </>
  );
}
