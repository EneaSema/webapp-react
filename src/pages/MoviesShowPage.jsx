import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";

import ReviewsList from "../components/ReviewsList";
import ReviewForm from "../components/ReviewForm";

export default function MoviesShowPage() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      //console.log(res);

      //console.log(res);
      const movie = res.data.movie;

      setMovie(movie);
      //console.log(movie);
    });
  }, []);

  return (
    <>
      <div className="container">
        <Card
          title={movie.title}
          image={`http://localhost:3000/movies_cover/${movie.image}`}
          description={movie.abstract}
          link={`/movies/${movie.id}`}
        ></Card>

        {movie.reviews && <ReviewsList reviews={movie.reviews} />}

        <ReviewForm idMovie={movie.id}></ReviewForm>
      </div>
    </>
  );
}
