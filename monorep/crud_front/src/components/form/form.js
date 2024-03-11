import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = ({ newItem, error, handleCreate, setNewItem, setError, handleCancelEdit }) => {
  const isEditing = newItem._id !== undefined;

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="bg-white p-4 rounded shadow-lg" style={{ width: '600px', height: '400px', border: '2px solid #ccc' }}>
        <h2 className="mb-4">
          {isEditing ? 'Edita un ítem en la tabla' : 'Añade un nuevo ítem a la tabla'}
        </h2>
        <form className="row g-3">
          <div className="col-md-12 mb-3">
            <label htmlFor="text" className="form-label">
              Título {error.text && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              className={`form-control ${error.text && 'is-invalid'} border shadow-lg`}
              id="text"
              value={newItem.text}
              onChange={(e) => {
                setNewItem({ ...newItem, text: e.target.value });
                setError({ ...error, text: '' });
              }}
            />
            {error.text && <div className="invalid-feedback">{error.text}</div>}
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="date" className="form-label">
              Fecha {error.date && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="date"
              className={`form-control ${error.date && 'is-invalid'} border shadow-lg`}
              id="date"
              value={newItem.date}
              onChange={(e) => {
                setNewItem({ ...newItem, date: e.target.value });
                setError({ ...error, date: '' });
              }}
            />
            {error.date && <div className="invalid-feedback">{error.date}</div>}
          </div>
          <div className="col-md-12 mb-3 form-check">
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
          <div className="col-md-12 mb-3">
            <button type="button" className="btn btn-primary" onClick={handleCreate}>
              {isEditing ? 'Actualizar' : 'Crear'}
            </button>
            {isEditing && (
              <button type="button" className="btn btn-secondary ml-2" onClick={handleCancelEdit}>
                Cancelar Edición
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
