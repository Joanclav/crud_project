import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import CrudComponent from './components/CrudCompoents';

ReactDOM.render(
  <React.StrictMode>
    <CrudComponent />
  </React.StrictMode>,
  document.getElementById('root')
);