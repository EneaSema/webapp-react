import ReviewsCard from "./ReviewsCard";

export default function ReviewsList({ reviews }) {
  console.log(reviews);
  return (
    <section className="my-3">
      <h2>
        <strong>Recensioni</strong>
      </h2>

      {reviews.map((review) => {
        <ReviewsCard key={review.id} review={review} />;
      })}
    </section>
  );
}
