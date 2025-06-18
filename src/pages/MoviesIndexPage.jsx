import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import axios from "axios";

export default function MoviesIndexPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((res) => {
      const movies = res.data;
      setMovies(movies);
    });
  }, []);
  return (
    <>
      <div className="container">
        <h1>Movies List</h1>
      </div>
      <MoviesList />
    </>
  );
}
