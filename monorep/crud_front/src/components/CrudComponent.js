import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './form/form';
import Table from './table/table';
import Banner from './banner/banner';

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ text: '', date: '', status: false });
  const [error, setError] = useState({ text: '', date: '' });
  const [showForm, setShowForm] = useState(true);
  const [editingItemId, setEditingItemId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.get(apiUrl);
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

      const apiUrl = process.env.REACT_APP_API_URL;

      if (editingItemId) {
        await axios.put(`${apiUrl}/${editingItemId}`, newItem);
        setEditingItemId(null); 
      } else {
        await axios.post(apiUrl, newItem);
      }

      fetchData();
      setError({ text: '', date: '' });
      setShowForm(false);
    } catch (error) {
      console.error('Error creating/updating item:', error);
    }
  };

  const handleEdit = (item) => {
    setEditingItemId(item._id); // Establecer el ID del elemento que se está editando
    setNewItem(item); // Poblar el Form con los datos del elemento
    setShowForm(true); // Mostrar el Form de nuevo
  };

  const handleCancelEdit = () => {
    setEditingItemId(null); // Restablecer el ID de edición
    setNewItem({ text: '', date: '', status: false }); // Limpiar el Form
    setShowForm(false); // Ocultar el Form
  };

  const handleDelete = async (objectId) => {
    try {
      const apiUrl = `${process.env.REACT_APP_API_URL}/${objectId}`;
      await axios.delete(apiUrl);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <Banner />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            {/* Mostrar el formulario si showForm es true */}
            {showForm && (
              <div>
                <Form
                  newItem={newItem}
                  error={error}
                  handleCreate={handleCreate}
                  setNewItem={setNewItem}
                  setError={setError}
                  handleCancelEdit={handleCancelEdit}
                />
              </div>
            )}
          </div>
          <div className="col-md-6 mx-auto">
            {/* Mostrar el botón para crear un nuevo ítem en la esquina superior derecha */}
            {!showForm && (
              <div className="d-flex justify-content-end mt-2">
                <button className="btn btn-primary" onClick={() => setShowForm(true)}>
                  Crear Nuevo Ítem
                </button>
              </div>
            )}

            {/* Mostrar la tabla centrada si hay datos y no se está editando un ítem */}
            {data.length > 0 && !showForm && (
              <div className="mt-3">
                <Table data={data} handleDelete={handleDelete} handleEdit={handleEdit} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrudComponent;