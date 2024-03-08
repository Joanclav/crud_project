import React from 'react';
import moment from 'moment';

const Table = ({ data }) => {
  return (
    <div>
      <h2>Tabla</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Fecha</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.text}</td>
              <td>{moment(item.date).format('MM/DD/YYYY')}</td>
              <td>{item.status ? 'Aprobado' : 'No Aprobado'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
