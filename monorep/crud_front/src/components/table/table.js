import React from 'react';
import moment from 'moment';

const Table = ({ data, handleDelete }) => {
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
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
