import { useEffect, useState } from "react";

const formInitialData = {
  name: "",
  text: "",
  vote: 1,
};

export default function ReviewForm({ idMovie }) {
  const [formData, setFormData] = useState(formInitialData);

  useEffect(() => {
    setFormData({
      movie_id: idMovie,
      ...formData,
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formInitialData, [e.taget.name]: e.target.value });
  };
  console.log(formData);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="my-3">
      <h2>
        <strong>Inserisci la tua recensione</strong>
      </h2>
      <form className="row g-3" onSubmit={handleFormSubmit}>
        <div className="col-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={handleInputChange}
            value={formData.name}
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />

          <label htmlFor="text" className="form-label">
            Recensione
          </label>
          <textarea
            onChange={handleInputChange}
            value={formData.text}
            className="form-control"
            name="text"
            id="text"
          ></textarea>

          <label htmlFor="voto" className="form-label">
            Voto
          </label>
          <input
            onChange={handleInputChange}
            value={formData.vote}
            type="number"
            className="form-control"
            id="voto"
            name="voto"
            min="1"
            max="5"
            required
          />
          <button className="btn btn-primary">Invia recensione</button>
        </div>
      </form>
    </section>
  );
}
