import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from './form/form';
import Table from './table/table';

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ text: '', date: '', status: false });
  const [error, setError] = useState({ text: '', date: '' });
  const [showForm, setShowForm] = useState(true);

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
      const newError = {};
      if (!newItem.text) {
        newError.text = 'Campo obligatorio';
      }
      if (!newItem.date) {
        newError.date = 'Campo obligatorio';
      }

      if (Object.keys(newError).length > 0) {
        setError(newError);
        return;
      }

      await axios.post('http://localhost:3000/crud', newItem);
      setNewItem({ text: '', date: '', status: false });
      fetchData();
      setError({ text: '', date: '' });
      setShowForm(false);
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          {showForm && (
            <Formulario
              newItem={newItem}
              error={error}
              handleCreate={handleCreate}
              setNewItem={setNewItem}
              setError={setError}
            />
          )}

          {!showForm && (
            <button type="button" className="btn btn-secondary mt-3" onClick={() => setShowForm(true)}>
              Volver al formulario
            </button>
          )}
        </div>
        <div className="col-md-6">
          {data.length > 0 && !showForm && <Table data={data} />}
        </div>
      </div>
    </div>
  );
};

export default CrudComponent;
