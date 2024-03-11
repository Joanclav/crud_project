import React, { useState } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import './table.css';

const Table = ({ data, handleDelete, handleEdit }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const sortedData = data.slice().sort((a, b) => {
    const columnA = a[sortColumn];
    const columnB = b[sortColumn];

    if (sortOrder === 'asc') {
      return columnA > columnB ? 1 : -1;
    } else {
      return columnA < columnB ? 1 : -1;
    }
  });

  return (
    <div className="container-fluid">
      <h2 style={{ color: 'white' }}>Items Registrados</h2>
      <table className="table table-hover table-custom">
        <thead className="thead-dark">
          <tr>
            <th
              scope="col"
              onClick={() => handleSort('text')}
              className={sortColumn === 'text' ? 'active' : ''}
            >
              Título
              {sortColumn === 'text' && (
                <FontAwesomeIcon icon={sortOrder === 'asc' ? faSortUp : faSortDown} className="sort-icon" />
              )}
              {!sortColumn && <FontAwesomeIcon icon={faSort} className="sort-icon" />}
            </th>
            <th
              scope="col"
              onClick={() => handleSort('date')}
              className={sortColumn === 'date' ? 'active' : ''}
            >
              Fecha
              {sortColumn === 'date' && (
                <FontAwesomeIcon icon={sortOrder === 'asc' ? faSortUp : faSortDown} className="sort-icon" />
              )}
              {!sortColumn && <FontAwesomeIcon icon={faSort} className="sort-icon" />}
            </th>
            <th
              scope="col"
              onClick={() => handleSort('status')}
              className={sortColumn === 'status' ? 'active' : ''}
            >
              Estado
              {sortColumn === 'status' && (
                <FontAwesomeIcon icon={sortOrder === 'asc' ? faSortUp : faSortDown} className="sort-icon" />
              )}
              {!sortColumn && <FontAwesomeIcon icon={faSort} className="sort-icon" />}
            </th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item._id} className="table-row">
              <td>{item.text}</td>
              <td>{moment(item.date).format('MM/DD/YYYY')}</td>
              <td>{item.status ? 'Aprobado' : 'No Aprobado'}</td>
              <td>
                <div className="btn-group" role="group" aria-label="Acciones">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(item._id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} /> 
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(item);
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} /> 
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