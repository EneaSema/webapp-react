import { Link } from "react-router-dom";

export default function Card({ id, title, description, image, link }) {
  return (
    <div className="card">
      <div className="card-body">
        <p>{image}</p>
      </div>
      <div className="card-title">
        <h1>{title}</h1>
        <div>{description}</div>
        <Link to={link} className="btn btn-primary">
          leggi le recensioni
        </Link>
      </div>
    </div>
  );
}
