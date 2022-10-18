import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Context from './Store/context';
import ApplicationContexts from './Store/applications';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApplicationContexts>
        <Context>
          <App />
        </Context>
      </ApplicationContexts>
    </BrowserRouter>
  </React.StrictMode>
);


