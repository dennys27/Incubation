import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Context from './Store/context';
import ApplicationContexts from './Store/applications';
import AdminContexts from './Store/Admin';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminContexts>
        <ApplicationContexts>
          <Context>
            <App />
          </Context>
        </ApplicationContexts>
      </AdminContexts>
    </BrowserRouter>
  </React.StrictMode>
);


