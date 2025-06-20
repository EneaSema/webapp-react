export default function ReviewForm({
  formInitialData,
  formData,
  setFormData,
  handleFormSubmit,
}) {
  const handleInputChange = (e) => {
    setFormData({ ...formInitialData, [e.target.name]: e.target.value });
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
            value={formData.name}
            onChange={handleInputChange}
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
            value={formData.text}
            onChange={handleInputChange}
            className="form-control"
            name="text"
            id="text"
          ></textarea>

          <label htmlFor="voto" className="form-label">
            Voto
          </label>
          <input
            value={formData.vote}
            onChange={handleInputChange}
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
