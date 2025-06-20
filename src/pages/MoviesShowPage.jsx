import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";

import ReviewsList from "../components/ReviewsList";
import ReviewForm from "../components/ReviewForm";

const formInitialData = {
  name: "",
  text: "",
  vote: 1,
};

export default function MoviesShowPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState(formInitialData);
  const [movie, setMovie] = useState({});

  const getMovieApiUrl = `http://localhost:3000/movies/${id}`;
  const storeReviewApiReviewUrl = `http://localhost:3000/movies/${id}/reviews`;
  const fetchStoreMovieReview = () => {
    axios.post(storeReviewApiReviewUrl, formData).then((res) => {
      console.log(res);
    });
  };

  const handleStoreFormReviewFormSubmit = (e) => {
    e.preventDefault();
    setFormData(formInitialData);
    fetchStoreMovieReview();
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      const movie = res.data.movie;
      setMovie(movie);
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

        <ReviewForm
          formInitialData={formInitialData}
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleStoreFormReviewFormSubmit}
        ></ReviewForm>
      </div>
    </>
  );
}
