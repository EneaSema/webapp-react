import { Link } from "react-router-dom";

export default function Card({ title, description, image, link }) {
  return (
    <div className="card h-100 w-100">
      <div className="card-title text-center my-3">
        <h1>{title}</h1>
      </div>
      <div className="card-body">
        <img className="img w-100" src={image} alt={title} />
        <div>{description}</div>
      </div>

      <Link to={link} className="btn btn-primary my-3">
        leggi le recensioni
      </Link>
    </div>
  );
}
