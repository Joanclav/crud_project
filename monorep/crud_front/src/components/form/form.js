import React from 'react';

const Formulario = ({ newItem, error, handleCreate, setNewItem, setError }) => {
  return (
    <div>
      <h2>Añade un nuevo ítem a la tabla</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Título {error.text && <span style={{ color: 'red' }}>*</span>}
          </label>
          <input
            type="text"
            className={`form-control ${error.text && 'is-invalid'}`}
            id="text"
            value={newItem.text}
            onChange={(e) => {
              setNewItem({ ...newItem, text: e.target.value });
              setError({ ...error, text: '' });
            }}
          />
          {error.text && <div className="invalid-feedback">{error.text}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Fecha {error.date && <span style={{ color: 'red' }}>*</span>}
          </label>
          <input
            type="date"
            className={`form-control ${error.date && 'is-invalid'}`}
            id="date"
            value={newItem.date}
            onChange={(e) => {
              setNewItem({ ...newItem, date: e.target.value });
              setError({ ...error, date: '' });
            }}
          />
          {error.date && <div className="invalid-feedback">{error.date}</div>}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="status"
            checked={newItem.status}
            onChange={() => setNewItem({ ...newItem, status: !newItem.status })}
          />
          <label className="form-check-label" htmlFor="status">
            Aprobado
          </label>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleCreate}>
          Create
        </button>
      </form>
    </div>
  );
};

export default Formulario;
