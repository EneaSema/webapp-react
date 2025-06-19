import Card from "./Card";

export default function MoviesList({ movies }) {
  const generateInfo = (movie) => {
    return (
      <>
        <section>
          <h2>Info sul film</h2>
          <div>
            <strong>Genere:</strong>
            {movie.genre}
          </div>
          <div>
            <strong>Director: </strong>
            {movie.director}
          </div>
          <div>
            <strong>Release_year: </strong>
            {movie.release_year}
          </div>
          <div>
            <strong> Depscrition: </strong>
            {movie.abstract}
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="container">
      <section className="my-3">
        <div className="row g-2">
          {movies.map((movie) => {
            return (
              <div className="col-4 text-center" key={movie.id}>
                <Card
                  image={`http://localhost:3000/movies_cover/${movie.image}`}
                  title={movie.title}
                  description={generateInfo(movie)}
                  link={`/movies/${movie.id}`}
                ></Card>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
