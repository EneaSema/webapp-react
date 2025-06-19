import { Link } from "react-router-dom";

export default function Card({ title, description, image, link }) {
  return (
    <div className="card h-100">
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <div className="card-body">
        <img className="" src={image} alt={title} />
        <div>{description}</div>
      </div>

      <Link to={link} className="btn btn-primary my-3">
        leggi le recensioni
      </Link>
    </div>
  );
}
