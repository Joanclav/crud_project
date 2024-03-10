import React from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ data, handleDelete, handleEdit }) => {
  return (
    <div>
      <h2>Tabla</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Fecha</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.text}</td>
              <td>{moment(item.date).format('MM/DD/YYYY')}</td>
              <td>{item.status ? 'Aprobado' : 'No Aprobado'}</td>
              <td>
                <div className="btn-group" role="group" aria-label="Acciones">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    Eliminar
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleEdit(item)}
                  >
                    Editar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
