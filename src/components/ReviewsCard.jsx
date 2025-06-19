export default function ReviewCard({ review }) {
  //return <p>{JSON.stringify(review)}</p>;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center border-bottom py-2">
        <div>{review.name}</div>
        <div>{review.text}</div>
        <div>{review.vote}</div>
      </div>
    </>
  );
}
