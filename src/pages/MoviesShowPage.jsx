import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";

import ReviewsList from "../components/ReviewsCard";

export default function MoviesShowPage() {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      console.log(res);
      console.log("ciao");

      console.log(res);
      const reviews = res.data.movie;
      console.log("ciao");

      setReviews(reviews);
      console.log(reviews);
    });
  }, []);

  return (
    <>
      <div className="container">
        <Card
          title={reviews.title}
          description={reviews.abstract}
          link={`/movies/${reviews.id}`}
        ></Card>

        {/* <ReviewsList reviews={reviews.reviews} /> */}

        <section className="my-3">
          <h2>
            <strong>Inserisci la tua recensione</strong>
          </h2>
          <p>Form inserimento</p>
        </section>
      </div>
    </>
  );
}
