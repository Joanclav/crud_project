import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';


const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ text: '', date: '', status: false });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/crud');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post('http://localhost:3000/crud', newItem);
      setNewItem({ text: '', date: '', status: false });
      fetchData();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>Añade un nuevo ítem a la tabla</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="text" className="form-label">Título</label>
              <input
                type="text"
                className="form-control"
                id="text"
                value={newItem.text}
                onChange={(e) => setNewItem({ ...newItem, text: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Fecha</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={newItem.date}
                onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="status"
                checked={newItem.status}
                onChange={() => setNewItem({ ...newItem, status: !newItem.status })}
              />
              <label className="form-check-label" htmlFor="status">Aprobado</label>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleCreate}>Create</button>
          </form>
        </div>
        <div className="col-md-6">
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
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.text}</td>
                  <td>{moment(item.date).format('MM/DD/YYYY hh:mm A')}</td>
                  <td>{item.status ? 'Aprobado' : 'No Aprobado'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CrudComponent;