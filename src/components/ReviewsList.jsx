import ReviewsCard from "./ReviewsCard";

const reviews = [
  {
    id: 4,
    movie_id: 2,
    name: "Diana",
    vote: 5,
    text: "The best crime movie ever made.",
    created_at: "2024-11-29T10:40:13.000Z",
    updated_at: "2024-11-29T10:40:13.000Z",
  },
];
console.log(reviews);

export default function ReviewsList() {
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
