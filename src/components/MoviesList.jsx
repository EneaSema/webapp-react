import Card from "./Card";

export default function MoviesList(movies) {
  return (
    <div className="container">
      <section className="my-3">
        <div className="row">
          <div className="col-4">
            <Card
              title={"title"}
              description={"abstract"}
              link={`/movies/1`}
            ></Card>
          </div>
        </div>
      </section>

      <section className="my-3">
        <h2>Recensioni</h2>
        <p>Lista delle recensioni</p>
      </section>

      <section className="my-3">
        <h2>la tua recnsione</h2>
        <p>Form inserimento</p>
      </section>
    </div>
  );
}
