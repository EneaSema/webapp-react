import { useParams } from "react-router-dom";
import Card from "../components/Card";
import ReviewsList from "../components/ReviewsCard";

export default function MoviesShowPage() {
  const { id } = useParams();
  return (
    <>
      <div className="container">
        <Card
          title={"title"}
          description={"abstract"}
          link={`/movies/1`}
        ></Card>

        {/* <ReviewsList /> */}

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
